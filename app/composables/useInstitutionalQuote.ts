import type {
  InstitutionTypeId,
  InstitutionalQuoteDraft,
  QuoteAttachment,
  QuoteSubmissionSnapshot,
} from '@/types/institutional-quote'
import { computeQuoteTotals, createQuoteReference, quoteSteps } from '@/data/institutional-quote'

const SUBMISSION_KEY = 'afric-educ-quote-submission'

export function useInstitutionalQuote() {
  const { loadDraft, saveDraft, createDraft, clearDraft } = useQuoteDraft()

  const draft = useState<InstitutionalQuoteDraft>('institutional-quote-draft', () => createDraft())
  const hydrated = useState('institutional-quote-hydrated', () => false)

  const currentStepMeta = computed(() => quoteSteps[draft.value.currentStep - 1] ?? quoteSteps[0])

  function hydrateFromStorage() {
    if (hydrated.value)
      return
    const stored = loadDraft()
    if (stored)
      draft.value = stored
    hydrated.value = true
  }

  function persist() {
    saveDraft(draft.value)
  }

  function setInstitutionType(type: InstitutionTypeId) {
    draft.value.institutionType = type
    persist()
  }

  function goToStep(step: number) {
    const max = quoteSteps.length
    draft.value.currentStep = Math.min(max, Math.max(1, step))
    persist()
  }

  function saveAsDraft() {
    persist()
  }

  function addAttachment(file: QuoteAttachment) {
    draft.value.attachments = [...draft.value.attachments, file]
    persist()
  }

  function loadSubmission(): QuoteSubmissionSnapshot | null {
    if (!import.meta.client)
      return null
    try {
      const raw = sessionStorage.getItem(SUBMISSION_KEY)
      if (!raw)
        return null
      return JSON.parse(raw) as QuoteSubmissionSnapshot
    }
    catch {
      return null
    }
  }

  async function submitQuote() {
    const reference = createQuoteReference()
    const email = draft.value.contact.email || draft.value.billing.billing.billingEmail
    const totals = computeQuoteTotals(draft.value)

    if (import.meta.client) {
      const snapshot: QuoteSubmissionSnapshot = {
        reference,
        email,
        organizationName: draft.value.institution.organizationName,
        submittedAt: new Date().toISOString(),
        summary: {
          references: totals.references,
          quantity: totals.quantity,
          services: totals.services,
          deliveryAddresses: totals.deliveryAddresses,
          estimateLabel: totals.estimateLabel,
          currency: totals.currency,
        },
      }
      sessionStorage.setItem(SUBMISSION_KEY, JSON.stringify(snapshot))
    }

    clearDraft()
    draft.value = createDraft()
    hydrated.value = true

    await navigateTo({
      path: '/partenaires/bibliotheques/devis/confirmation',
      query: { ref: reference },
    })

    return reference
  }

  return {
    draft,
    currentStepMeta,
    hydrateFromStorage,
    persist,
    setInstitutionType,
    goToStep,
    saveAsDraft,
    addAttachment,
    loadSubmission,
    submitQuote,
  }
}

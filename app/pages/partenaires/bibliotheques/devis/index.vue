<script setup lang="ts">
import { ArrowRight, Save, Send } from 'lucide-vue-next'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import QuotePageHeader from '~/components/institutional-quote/QuotePageHeader.vue'
import QuoteStepSidebar from '~/components/institutional-quote/QuoteStepSidebar.vue'
import QuoteSummarySidebar from '~/components/institutional-quote/QuoteSummarySidebar.vue'
import InstitutionStep from '~/components/institutional-quote/steps/InstitutionStep.vue'
import BookSelectionStep from '~/components/institutional-quote/steps/BookSelectionStep.vue'
import QuantityDistributionStep from '~/components/institutional-quote/steps/QuantityDistributionStep.vue'
import AdditionalServicesStep from '~/components/institutional-quote/steps/AdditionalServicesStep.vue'
import DeliveryConstraintsStep from '~/components/institutional-quote/steps/DeliveryConstraintsStep.vue'
import BudgetBillingStep from '~/components/institutional-quote/steps/BudgetBillingStep.vue'
import ReviewSubmitStep from '~/components/institutional-quote/steps/ReviewSubmitStep.vue'
import type { InstitutionTypeId, QuoteAttachment } from '@/types/institutional-quote'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Demander un devis institutionnel — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Demandez un devis institutionnel pour l’achat de lots de livres africains. Parcours guidé pour bibliothèques, écoles et organisations.',
    },
  ],
})

const {
  draft,
  hydrateFromStorage,
  persist,
  setInstitutionType,
  goToStep,
  saveAsDraft,
  addAttachment,
  submitQuote,
} = useInstitutionalQuote()

const draftSaved = ref(false)
const submitting = ref(false)

onMounted(() => {
  hydrateFromStorage()
})

watch(
  draft,
  () => {
    persist()
  },
  { deep: true },
)

const canContinueStep2 = computed(() => {
  const selection = draft.value.bookSelection
  if (!selection.method)
    return false
  if (selection.method === 'catalogue')
    return selection.selectedBooks.length > 0
  if (selection.method === 'import')
    return selection.import.rows.length > 0
  return selection.need.details.trim().length > 20
    || selection.need.objectives.length > 0
    || Boolean(selection.need.approximateCount.trim())
})

const canContinueStep3 = computed(() =>
  draft.value.quantities.lines.length > 0
  && draft.value.quantities.lines.every(line => line.quantity >= 1),
)

const canContinueStep5 = computed(() => {
  if (!draft.value.delivery.mode)
    return false
  const mode = draft.value.delivery.mode
  if (mode === 'pickup' || mode === 'partner')
    return true
  return Boolean(draft.value.delivery.address.country && draft.value.delivery.address.city)
})

const canContinueStep6 = computed(() => {
  const billing = draft.value.billing.billing
  return Boolean(
    billing.legalName.trim()
    && billing.taxId.trim()
    && billing.billingAddress.trim()
    && billing.billingEmail.trim()
    && billing.paymentContactName.trim(),
  )
})

const canSubmitStep7 = computed(() => {
  const consents = draft.value.consents
  return consents.accuracy && consents.contactAuth && consents.privacy
})

const totalBookCount = computed(() =>
  draft.value.quantities.lines.reduce((sum, line) => sum + line.quantity, 0),
)

function onSaveDraft() {
  saveAsDraft()
  draftSaved.value = true
  window.setTimeout(() => {
    draftSaved.value = false
  }, 2500)
}

function onInstitutionType(value: InstitutionTypeId) {
  setInstitutionType(value)
}

function onContinue() {
  if (draft.value.currentStep === 1 && draft.value.institutionType) {
    goToStep(2)
    return
  }
  if (draft.value.currentStep === 2 && canContinueStep2.value) {
    goToStep(3)
    return
  }
  if (draft.value.currentStep === 3 && canContinueStep3.value) {
    goToStep(4)
    return
  }
  if (draft.value.currentStep === 4) {
    goToStep(5)
    return
  }
  if (draft.value.currentStep === 5 && canContinueStep5.value) {
    goToStep(6)
    return
  }
  if (draft.value.currentStep === 6 && canContinueStep6.value)
    goToStep(7)
}

async function onSubmit() {
  if (!canSubmitStep7.value || submitting.value)
    return
  submitting.value = true
  try {
    await submitQuote()
  }
  finally {
    submitting.value = false
  }
}

function onAddAttachment(file: QuoteAttachment) {
  addAttachment(file)
}

function onContact() {
  window.location.href = 'mailto:institutions@afric-educ.com'
}
</script>

<template>
  <div class="inst-quote-page">
    <AppHeader />

    <div class="inst-quote-page__shell">
      <QuoteStepSidebar
        :current-step="draft.currentStep"
        @contact="onContact"
      />

      <div class="inst-quote-page__main">
        <div class="inst-quote-page__content">
          <QuotePageHeader
            :compact="draft.currentStep > 1"
            @save-draft="onSaveDraft"
          />

          <p
            v-if="draftSaved"
            class="inst-quote-page__toast"
            role="status"
          >
            Brouillon enregistré sur cet appareil.
          </p>

          <InstitutionStep
            v-if="draft.currentStep === 1"
            :institution-type="draft.institutionType"
            :institution="draft.institution"
            :contact="draft.contact"
            @update:institution-type="onInstitutionType"
            @update:institution="draft.institution = $event"
            @update:contact="draft.contact = $event"
          />

          <BookSelectionStep
            v-else-if="draft.currentStep === 2"
            :model-value="draft.bookSelection"
            @update:model-value="draft.bookSelection = $event"
          />

          <QuantityDistributionStep
            v-else-if="draft.currentStep === 3"
            :model-value="draft.quantities"
            :book-selection="draft.bookSelection"
            @update:model-value="draft.quantities = $event"
          />

          <AdditionalServicesStep
            v-else-if="draft.currentStep === 4"
            :model-value="draft.services"
            :default-book-count="totalBookCount || undefined"
            @update:model-value="draft.services = $event"
          />

          <DeliveryConstraintsStep
            v-else-if="draft.currentStep === 5"
            :model-value="draft.delivery"
            :institution="draft.institution"
            :contact="draft.contact"
            :total-book-count="totalBookCount"
            @update:model-value="draft.delivery = $event"
          />

          <BudgetBillingStep
            v-else-if="draft.currentStep === 6"
            :model-value="draft.billing"
            :institution="draft.institution"
            :contact="draft.contact"
            @update:model-value="draft.billing = $event"
          />

          <ReviewSubmitStep
            v-else-if="draft.currentStep === 7"
            :draft="draft"
            @edit="goToStep"
            @update:consents="draft.consents = $event"
          />

          <footer
            v-if="draft.currentStep <= 6"
            class="inst-quote-page__footer"
          >
            <button
              v-if="draft.currentStep > 1"
              type="button"
              class="inst-quote-btn inst-quote-btn--ghost"
              @click="goToStep(draft.currentStep - 1)"
            >
              Précédent
            </button>
            <button
              type="button"
              class="inst-quote-btn inst-quote-btn--primary"
              :disabled="
                draft.currentStep === 1
                  ? !draft.institutionType
                  : draft.currentStep === 2
                    ? !canContinueStep2
                    : draft.currentStep === 3
                      ? !canContinueStep3
                      : draft.currentStep === 5
                        ? !canContinueStep5
                        : draft.currentStep === 6
                          ? !canContinueStep6
                          : false
              "
              @click="onContinue"
            >
              Continuer
              <ArrowRight
                class="size-4"
                :stroke-width="2"
                aria-hidden="true"
              />
            </button>
          </footer>

          <footer
            v-else-if="draft.currentStep === 7"
            class="inst-quote-page__footer inst-quote-page__footer--review"
          >
            <button
              type="button"
              class="inst-quote-btn inst-quote-btn--ghost"
              @click="goToStep(6)"
            >
              Précédent
            </button>
            <button
              type="button"
              class="inst-quote-btn inst-quote-btn--ghost"
              @click="onSaveDraft"
            >
              <Save
                class="size-4"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              Enregistrer comme brouillon
            </button>
            <button
              type="button"
              class="inst-quote-btn inst-quote-btn--submit"
              :disabled="!canSubmitStep7 || submitting"
              @click="onSubmit"
            >
              Envoyer ma demande de devis
              <Send
                class="size-4"
                :stroke-width="1.75"
                aria-hidden="true"
              />
            </button>
          </footer>
        </div>

        <QuoteSummarySidebar
          :draft="draft"
          :book-selection="draft.bookSelection"
          :quantities="draft.quantities"
          :services="draft.services"
          :delivery="draft.delivery"
          :current-step="draft.currentStep"
          @contact="onContact"
          @add-attachment="onAddAttachment"
        />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

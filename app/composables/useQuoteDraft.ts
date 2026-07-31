import type { InstitutionalQuoteDraft } from '@/types/institutional-quote'
import { createEmptyQuoteDraft, normalizeQuoteDraft } from '@/data/institutional-quote'

const DRAFT_KEY = 'afric-educ-institutional-quote-draft'

export function useQuoteDraft() {
  function loadDraft(): InstitutionalQuoteDraft | null {
    if (!import.meta.client)
      return null

    try {
      const raw = localStorage.getItem(DRAFT_KEY)
      if (!raw)
        return null
      return normalizeQuoteDraft(JSON.parse(raw) as InstitutionalQuoteDraft)
    }
    catch {
      return null
    }
  }

  function saveDraft(draft: InstitutionalQuoteDraft) {
    if (!import.meta.client)
      return

    const payload: InstitutionalQuoteDraft = {
      ...draft,
      updatedAt: new Date().toISOString(),
    }

    localStorage.setItem(DRAFT_KEY, JSON.stringify(payload))
  }

  function clearDraft() {
    if (!import.meta.client)
      return
    localStorage.removeItem(DRAFT_KEY)
  }

  function createDraft(): InstitutionalQuoteDraft {
    return createEmptyQuoteDraft()
  }

  return {
    loadDraft,
    saveDraft,
    clearDraft,
    createDraft,
  }
}

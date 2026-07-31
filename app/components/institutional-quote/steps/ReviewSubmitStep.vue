<script setup lang="ts">
import { Info } from 'lucide-vue-next'
import ReviewSectionCard from '~/components/institutional-quote/review/ReviewSectionCard.vue'
import ConsentSection from '~/components/institutional-quote/review/ConsentSection.vue'
import {
  buildReviewCards,
  computeQuoteTotals,
} from '@/data/institutional-quote'
import type {
  InstitutionalQuoteDraft,
  QuoteConsentState,
} from '@/types/institutional-quote'

const props = defineProps<{
  draft: InstitutionalQuoteDraft
}>()

const emit = defineEmits<{
  edit: [step: number]
  'update:consents': [value: QuoteConsentState]
}>()

const cards = computed(() => buildReviewCards(props.draft))
const totals = computed(() => computeQuoteTotals(props.draft))

const referencesLabel = computed(() => {
  const n = totals.value.references
  return `${n} référence${n > 1 ? 's' : ''}`
})

const quantityLabel = computed(() => {
  const n = totals.value.quantity
  return `${n} exemplaire${n > 1 ? 's' : ''}`
})

const servicesLabel = computed(() => {
  const n = totals.value.services
  if (n === 0)
    return 'Aucun service'
  return `${n} service${n > 1 ? 's' : ''} sélectionné${n > 1 ? 's' : ''}`
})

const deliveryLabel = computed(() => {
  const n = totals.value.deliveryAddresses
  if (n === 0)
    return 'Livraison non définie'
  return `${n} adresse${n > 1 ? 's' : ''} de livraison`
})
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-review-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          07.
        </p>
        <h2
          id="inst-quote-step-review-heading"
          class="inst-quote-step__title"
        >
          Vérification et envoi
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Vérifiez les informations ci-dessous avant d’envoyer votre demande de devis. Vous pourrez modifier chaque section si nécessaire.
      </p>
    </header>

    <div class="inst-quote-review-grid">
      <ReviewSectionCard
        v-for="card in cards"
        :key="card.step"
        :title="card.title"
        :icon="card.icon"
        :lines="card.lines"
        :list-items="card.listItems"
        :list-expand-label="card.listExpandLabel"
        @edit="emit('edit', card.step)"
      />
    </div>

    <div class="inst-quote-review-totals">
      <ul class="inst-quote-review-totals__metrics">
        <li>{{ referencesLabel }}</li>
        <li>{{ quantityLabel }}</li>
        <li>{{ servicesLabel }}</li>
        <li>{{ deliveryLabel }}</li>
      </ul>
      <p class="inst-quote-review-totals__estimate">
        <span>Estimation provisoire</span>
        <strong>{{ totals.estimateLabel }}</strong>
        <Info
          class="size-3.5"
          :stroke-width="1.75"
          aria-hidden="true"
        />
      </p>
    </div>

    <ConsentSection
      :model-value="draft.consents"
      @update:model-value="emit('update:consents', $event)"
    />
  </section>
</template>

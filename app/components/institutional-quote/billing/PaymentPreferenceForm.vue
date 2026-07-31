<script setup lang="ts">
import {
  Check,
  ChevronDown,
  ClipboardList,
  CreditCard,
  MessageSquareText,
} from 'lucide-vue-next'
import {
  paymentModeOptions,
  purchaseOrderOptions,
} from '@/data/institutional-quote'
import type {
  PaymentModeId,
  QuotePaymentPreferences,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuotePaymentPreferences
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuotePaymentPreferences]
}>()

function patch(partial: Partial<QuotePaymentPreferences>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function toggleMode(id: PaymentModeId) {
  if (props.modelValue.modes.includes(id)) {
    patch({ modes: props.modelValue.modes.filter(item => item !== id) })
    return
  }
  patch({ modes: [...props.modelValue.modes, id] })
}
</script>

<template>
  <section
    class="inst-quote-bill-card"
    aria-labelledby="inst-quote-payment-heading"
  >
    <header class="inst-quote-bill-card__head">
      <span
        class="inst-quote-bill-card__icon"
        aria-hidden="true"
      >
        <CreditCard
          class="size-5"
          :stroke-width="1.5"
        />
      </span>
      <h3 id="inst-quote-payment-heading">
        Préférences de paiement
      </h3>
    </header>

    <div class="inst-quote-bill-chips">
      <p class="inst-quote-field__label">
        Mode de paiement envisagé
      </p>
      <div
        class="inst-quote-bill-chips__list"
        role="group"
        aria-label="Modes de paiement"
      >
        <button
          v-for="item in paymentModeOptions"
          :key="item.id"
          type="button"
          class="inst-quote-bill-chip"
          :class="{ 'inst-quote-bill-chip--on': modelValue.modes.includes(item.id) }"
          :aria-pressed="modelValue.modes.includes(item.id)"
          @click="toggleMode(item.id)"
        >
          <span
            class="inst-quote-bill-chip__icon"
            aria-hidden="true"
          >
            <component
              :is="item.icon"
              class="size-3.5"
              :stroke-width="1.75"
            />
          </span>
          {{ item.label }}
          <Check
            v-if="modelValue.modes.includes(item.id)"
            class="inst-quote-bill-chip__check"
            :stroke-width="2.75"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <label class="inst-quote-field">
      <span class="inst-quote-field__label">
        Votre institution exige-t-elle un bon de commande avant validation ?
      </span>
      <span class="inst-quote-field__select-wrap">
        <ClipboardList
          class="inst-quote-field__leading-icon"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <select
          class="inst-quote-field__input inst-quote-field__select inst-quote-field__input--icon"
          :value="modelValue.purchaseOrder ?? ''"
          @change="patch({
            purchaseOrder: (($event.target as HTMLSelectElement).value || null) as QuotePaymentPreferences['purchaseOrder'],
          })"
        >
          <option value="" disabled>
            Sélectionner
          </option>
          <option
            v-for="item in purchaseOrderOptions"
            :key="item.id"
            :value="item.id"
          >
            {{ item.label }}
          </option>
        </select>
        <ChevronDown
          class="inst-quote-field__chevron"
          :stroke-width="1.5"
          aria-hidden="true"
        />
      </span>
    </label>

    <label class="inst-quote-field">
      <span class="inst-quote-field__label">Commentaires ou exigences particulières (facultatif)</span>
      <span class="inst-quote-field__with-icon inst-quote-field__with-icon--textarea">
        <MessageSquareText
          class="inst-quote-field__leading-icon inst-quote-field__leading-icon--top"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea inst-quote-field__input--icon"
          rows="3"
          placeholder="Délais de paiement, références marché, conditions particulières…"
          :value="modelValue.comments"
          @input="patch({ comments: ($event.target as HTMLTextAreaElement).value })"
        />
      </span>
    </label>
  </section>
</template>

<script setup lang="ts">
import {
  Banknote,
  Check,
  ChevronDown,
  Coins,
  MessageSquareText,
  Scale,
  Wallet,
} from 'lucide-vue-next'
import {
  budgetAvailabilityOptions,
  budgetCurrencyOptions,
  fundingModeOptions,
} from '@/data/institutional-quote'
import type {
  FundingModeId,
  QuoteBudgetInfo,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteBudgetInfo
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteBudgetInfo]
}>()

const currencySuffix = computed(() =>
  budgetCurrencyOptions.find(item => item.id === props.modelValue.currency)?.suffix
  ?? props.modelValue.currency,
)

function patch(partial: Partial<QuoteBudgetInfo>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function toggleFunding(id: FundingModeId) {
  if (props.modelValue.fundingModes.includes(id)) {
    patch({ fundingModes: props.modelValue.fundingModes.filter(item => item !== id) })
    return
  }
  patch({ fundingModes: [...props.modelValue.fundingModes, id] })
}
</script>

<template>
  <section
    class="inst-quote-bill-card"
    aria-labelledby="inst-quote-budget-heading"
  >
    <header class="inst-quote-bill-card__head">
      <span
        class="inst-quote-bill-card__icon"
        aria-hidden="true"
      >
        <Wallet
          class="size-5"
          :stroke-width="1.5"
        />
      </span>
      <h3 id="inst-quote-budget-heading">
        Budget et financement
      </h3>
    </header>

    <div class="inst-quote-bill-card__grid inst-quote-bill-card__grid--budget">
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Budget disponible</span>
        <span class="inst-quote-field__select-wrap">
          <Wallet
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <select
            class="inst-quote-field__input inst-quote-field__select inst-quote-field__input--icon"
            :value="modelValue.availability ?? ''"
            @change="patch({
              availability: (($event.target as HTMLSelectElement).value || null) as QuoteBudgetInfo['availability'],
            })"
          >
            <option value="" disabled>
              Sélectionner
            </option>
            <option
              v-for="item in budgetAvailabilityOptions"
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
        <span class="inst-quote-field__label">Devise</span>
        <span class="inst-quote-field__select-wrap">
          <Coins
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <select
            class="inst-quote-field__input inst-quote-field__select inst-quote-field__input--icon"
            :value="modelValue.currency"
            @change="patch({ currency: ($event.target as HTMLSelectElement).value as QuoteBudgetInfo['currency'] })"
          >
            <option
              v-for="item in budgetCurrencyOptions"
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
        <span class="inst-quote-field__label">Montant maximum (facultatif)</span>
        <span class="inst-quote-bill-suffix">
          <Banknote
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            inputmode="numeric"
            placeholder="Ex. 25 000 000"
            :value="modelValue.maxAmount"
            @input="patch({ maxAmount: ($event.target as HTMLInputElement).value })"
          >
          <span class="inst-quote-bill-suffix__label">{{ currencySuffix }}</span>
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Fourchette budgétaire (facultatif)</span>
        <span class="inst-quote-bill-suffix">
          <Scale
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            placeholder="Ex. 20 000 000 — 30 000 000"
            :value="modelValue.range"
            @input="patch({ range: ($event.target as HTMLInputElement).value })"
          >
          <span class="inst-quote-bill-suffix__label">{{ currencySuffix }}</span>
        </span>
      </label>
    </div>

    <div class="inst-quote-bill-chips">
      <p class="inst-quote-field__label">
        Mode de financement
      </p>
      <div
        class="inst-quote-bill-chips__list"
        role="group"
        aria-label="Modes de financement"
      >
        <button
          v-for="item in fundingModeOptions"
          :key="item.id"
          type="button"
          class="inst-quote-bill-chip"
          :class="{ 'inst-quote-bill-chip--on': modelValue.fundingModes.includes(item.id) }"
          :aria-pressed="modelValue.fundingModes.includes(item.id)"
          @click="toggleFunding(item.id)"
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
            v-if="modelValue.fundingModes.includes(item.id)"
            class="inst-quote-bill-chip__check"
            :stroke-width="2.75"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <label class="inst-quote-field">
      <span class="inst-quote-field__label">Précisions sur le financement (facultatif)</span>
      <span class="inst-quote-field__with-icon inst-quote-field__with-icon--textarea">
        <MessageSquareText
          class="inst-quote-field__leading-icon inst-quote-field__leading-icon--top"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea inst-quote-field__input--icon"
          rows="3"
          placeholder="Ex. budget annuel 2026, financement projet UNESCO…"
          :value="modelValue.fundingNotes"
          @input="patch({ fundingNotes: ($event.target as HTMLTextAreaElement).value })"
        />
      </span>
    </label>
  </section>
</template>

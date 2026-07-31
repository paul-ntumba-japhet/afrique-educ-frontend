<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import {
  catalogueFilterOptions,
  needObjectiveOptions,
} from '@/data/institutional-quote'
import type { QuoteNeedDescription } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteNeedDescription
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteNeedDescription]
}>()

function patch(partial: Partial<QuoteNeedDescription>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function toggleObjective(value: string) {
  const has = props.modelValue.objectives.includes(value)
  patch({
    objectives: has
      ? props.modelValue.objectives.filter(item => item !== value)
      : [...props.modelValue.objectives, value],
  })
}
</script>

<template>
  <section class="inst-quote-books-panel">
    <h3 class="inst-quote-books-panel__title">
      Décrivez votre besoin
    </h3>

    <div class="inst-quote-form__grid">
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Niveau scolaire</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.schoolLevel"
            @change="patch({ schoolLevel: ($event.target as HTMLSelectElement).value })"
          >
            <option value="">
              Sélectionner
            </option>
            <option
              v-for="option in catalogueFilterOptions.level"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <svg
            class="inst-quote-field__chevron"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Matière</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.subject"
            @change="patch({ subject: ($event.target as HTMLSelectElement).value })"
          >
            <option value="">
              Sélectionner
            </option>
            <option
              v-for="option in catalogueFilterOptions.subject"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <svg
            class="inst-quote-field__chevron"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Tranche d’âge</span>
        <input
          class="inst-quote-field__input"
          :value="modelValue.ageRange"
          type="text"
          placeholder="Ex. 8–12 ans"
          @input="patch({ ageRange: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Langue</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.language"
            @change="patch({ language: ($event.target as HTMLSelectElement).value })"
          >
            <option value="">
              Sélectionner
            </option>
            <option
              v-for="option in catalogueFilterOptions.language"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <svg
            class="inst-quote-field__chevron"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Pays</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.country"
            @change="patch({ country: ($event.target as HTMLSelectElement).value })"
          >
            <option value="">
              Sélectionner
            </option>
            <option
              v-for="option in catalogueFilterOptions.country"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <svg
            class="inst-quote-field__chevron"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Format</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.format"
            @change="patch({ format: ($event.target as HTMLSelectElement).value })"
          >
            <option value="">
              Sélectionner
            </option>
            <option
              v-for="option in catalogueFilterOptions.format"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <svg
            class="inst-quote-field__chevron"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Nombre approximatif d’ouvrages</span>
        <input
          class="inst-quote-field__input"
          :value="modelValue.approximateCount"
          type="text"
          placeholder="Ex. 120"
          @input="patch({ approximateCount: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Budget estimé</span>
        <input
          class="inst-quote-field__input"
          :value="modelValue.estimatedBudget"
          type="text"
          placeholder="Ex. 4 500 €"
          @input="patch({ estimatedBudget: ($event.target as HTMLInputElement).value })"
        >
      </label>
    </div>

    <fieldset class="inst-quote-books-objectives">
      <legend class="inst-quote-form__legend">
        Objectifs pédagogiques
      </legend>
      <div class="inst-quote-books-objectives__grid">
        <button
          v-for="objective in needObjectiveOptions"
          :key="objective"
          type="button"
          class="inst-quote-books-objectives__card"
          :class="{ 'inst-quote-books-objectives__card--on': modelValue.objectives.includes(objective) }"
          :aria-pressed="modelValue.objectives.includes(objective)"
          @click="toggleObjective(objective)"
        >
          <span
            class="inst-quote-books-objectives__check"
            aria-hidden="true"
          >
            <Check
              class="size-3.5"
              :stroke-width="2.4"
            />
          </span>
          <span class="inst-quote-books-objectives__label">{{ objective }}</span>
        </button>
      </div>
    </fieldset>

    <label class="inst-quote-field inst-quote-field--full">
      <span class="inst-quote-field__label">Description détaillée</span>
      <textarea
        class="inst-quote-field__input inst-quote-field__textarea"
        rows="5"
        :value="modelValue.details"
        placeholder="Décrivez le contexte, les priorités et toute contrainte utile à la préparation du devis."
        @input="patch({ details: ($event.target as HTMLTextAreaElement).value })"
      />
    </label>
  </section>
</template>

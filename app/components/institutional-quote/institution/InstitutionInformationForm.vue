<script setup lang="ts">
import { ChevronDown, Globe } from 'lucide-vue-next'
import {
  quoteCountries,
  quoteRegionsByCountry,
} from '@/data/institutional-quote'
import type { QuoteInstitutionInfo } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteInstitutionInfo
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteInstitutionInfo]
}>()

const regions = computed(() => {
  const country = props.modelValue.country
  return quoteRegionsByCountry[country] ?? ['Autre']
})

function patch(partial: Partial<QuoteInstitutionInfo>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function onCountryChange(event: Event) {
  const country = (event.target as HTMLSelectElement).value
  patch({ country, region: '' })
}
</script>

<template>
  <fieldset class="inst-quote-form">
    <legend class="inst-quote-form__legend">
      Informations sur l’institution
    </legend>

    <div class="inst-quote-form__grid">
      <label class="inst-quote-field inst-quote-field--full">
        <span class="inst-quote-field__label">Nom officiel de l’organisation *</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="organization"
          :value="modelValue.organizationName"
          required
          @input="patch({ organizationName: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Pays *</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.country"
            required
            @change="onCountryChange"
          >
            <option value="" disabled>
              Sélectionner
            </option>
            <option
              v-for="country in quoteCountries"
              :key="country"
              :value="country"
            >
              {{ country }}
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
        <span class="inst-quote-field__label">Province / Région *</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.region"
            required
            :disabled="!modelValue.country"
            @change="patch({ region: ($event.target as HTMLSelectElement).value })"
          >
            <option value="" disabled>
              Sélectionner
            </option>
            <option
              v-for="region in regions"
              :key="region"
              :value="region"
            >
              {{ region }}
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
        <span class="inst-quote-field__label">Ville *</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="address-level2"
          :value="modelValue.city"
          required
          @input="patch({ city: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Adresse complète *</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="street-address"
          :value="modelValue.address"
          required
          @input="patch({ address: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Site web (facultatif)</span>
        <span class="inst-quote-field__with-icon">
          <Globe
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="url"
            placeholder="https://"
            autocomplete="url"
            :value="modelValue.website"
            @input="patch({ website: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">N° d’identification / Référence administrative (facultatif)</span>
        <input
          class="inst-quote-field__input"
          type="text"
          :value="modelValue.adminReference"
          @input="patch({ adminReference: ($event.target as HTMLInputElement).value })"
        >
      </label>
    </div>
  </fieldset>
</template>

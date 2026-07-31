<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import {
  quoteCountries,
  quoteDistrictsByCity,
  quoteRegionsByCountry,
} from '@/data/institutional-quote'
import type { QuoteDeliveryAddress } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteDeliveryAddress
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteDeliveryAddress]
}>()

const regions = computed(() => {
  const country = props.modelValue.country
  return quoteRegionsByCountry[country] ?? ['Autre']
})

const districts = computed(() => {
  const city = props.modelValue.city
  return quoteDistrictsByCity[city] ?? ['Autre']
})

function patch(partial: Partial<QuoteDeliveryAddress>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function onCountryChange(event: Event) {
  const country = (event.target as HTMLSelectElement).value
  patch({ country, region: '', city: '', district: '' })
}

function onRegionChange(event: Event) {
  patch({
    region: (event.target as HTMLSelectElement).value,
    city: '',
    district: '',
  })
}

function onCityChange(event: Event) {
  patch({
    city: (event.target as HTMLInputElement).value,
    district: '',
  })
}
</script>

<template>
  <fieldset class="inst-quote-form inst-quote-deliv-address">
    <legend class="inst-quote-form__legend">
      Adresse de livraison principale
    </legend>

    <div class="inst-quote-form__grid inst-quote-deliv-address__grid">
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Pays</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.country"
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
        <span class="inst-quote-field__label">Province / Région</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.region"
            :disabled="!modelValue.country"
            @change="onRegionChange"
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
        <span class="inst-quote-field__label">Ville</span>
        <input
          class="inst-quote-field__input"
          type="text"
          placeholder="Ex. Kinshasa"
          :value="modelValue.city"
          :disabled="!modelValue.region"
          @input="onCityChange"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Commune / Quartier</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="modelValue.district"
            :disabled="!modelValue.city"
            @change="patch({ district: ($event.target as HTMLSelectElement).value })"
          >
            <option value="" disabled>
              Sélectionner
            </option>
            <option
              v-for="district in districts"
              :key="district"
              :value="district"
            >
              {{ district }}
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.5"
            aria-hidden="true"
          />
        </span>
      </label>

      <label class="inst-quote-field inst-quote-deliv-address__street">
        <span class="inst-quote-field__label">Adresse détaillée</span>
        <input
          class="inst-quote-field__input"
          type="text"
          placeholder="Avenue, numéro, bâtiment…"
          :value="modelValue.address"
          @input="patch({ address: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field inst-quote-deliv-address__postal">
        <span class="inst-quote-field__label">Code postal</span>
        <input
          class="inst-quote-field__input"
          type="text"
          inputmode="numeric"
          :value="modelValue.postalCode"
          @input="patch({ postalCode: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Point de repère (facultatif)</span>
        <input
          class="inst-quote-field__input"
          type="text"
          placeholder="Ex. Face à l’université"
          :value="modelValue.landmark"
          @input="patch({ landmark: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Personne à contacter sur place</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="name"
          :value="modelValue.contactName"
          @input="patch({ contactName: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Téléphone</span>
        <input
          class="inst-quote-field__input"
          type="tel"
          autocomplete="tel"
          :value="modelValue.contactPhone"
          @input="patch({ contactPhone: ($event.target as HTMLInputElement).value })"
        >
      </label>
    </div>
  </fieldset>
</template>

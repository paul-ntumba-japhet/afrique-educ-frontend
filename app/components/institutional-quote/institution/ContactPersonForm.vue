<script setup lang="ts">
import type { QuoteContactPerson } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteContactPerson
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteContactPerson]
}>()

function patch(partial: Partial<QuoteContactPerson>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}
</script>

<template>
  <fieldset class="inst-quote-form">
    <legend class="inst-quote-form__legend">
      Personne de contact
    </legend>
    <p class="inst-quote-form__hint">
      Interlocuteur principal pour le suivi du devis, des validations et de la facturation.
    </p>

    <div class="inst-quote-form__grid">
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Prénom *</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="given-name"
          :value="modelValue.firstName"
          required
          @input="patch({ firstName: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Nom *</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="family-name"
          :value="modelValue.lastName"
          required
          @input="patch({ lastName: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field inst-quote-field--full">
        <span class="inst-quote-field__label">Fonction / titre *</span>
        <input
          class="inst-quote-field__input"
          type="text"
          autocomplete="organization-title"
          placeholder="Ex. Responsable des acquisitions"
          :value="modelValue.jobTitle"
          required
          @input="patch({ jobTitle: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Email professionnel *</span>
        <input
          class="inst-quote-field__input"
          type="email"
          autocomplete="email"
          :value="modelValue.email"
          required
          @input="patch({ email: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Téléphone *</span>
        <input
          class="inst-quote-field__input"
          type="tel"
          autocomplete="tel"
          :value="modelValue.phone"
          required
          @input="patch({ phone: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field inst-quote-field--full">
        <span class="inst-quote-field__label">Téléphone secondaire (facultatif)</span>
        <input
          class="inst-quote-field__input"
          type="tel"
          autocomplete="tel-national"
          :value="modelValue.secondaryPhone"
          @input="patch({ secondaryPhone: ($event.target as HTMLInputElement).value })"
        >
      </label>
    </div>
  </fieldset>
</template>

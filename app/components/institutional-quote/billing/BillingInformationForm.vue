<script setup lang="ts">
import {
  Briefcase,
  Building2,
  FileText,
  Hash,
  Mail,
  MapPin,
  Phone,
  ScrollText,
  UserRound,
} from 'lucide-vue-next'
import type { QuoteBillingInfo } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteBillingInfo
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteBillingInfo]
}>()

function patch(partial: Partial<QuoteBillingInfo>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}
</script>

<template>
  <section
    class="inst-quote-bill-card"
    aria-labelledby="inst-quote-billing-heading"
  >
    <header class="inst-quote-bill-card__head">
      <span
        class="inst-quote-bill-card__icon"
        aria-hidden="true"
      >
        <FileText
          class="size-5"
          :stroke-width="1.5"
        />
      </span>
      <h3 id="inst-quote-billing-heading">
        Informations de facturation
      </h3>
    </header>

    <div class="inst-quote-bill-card__grid inst-quote-bill-card__grid--billing">
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Raison sociale de facturation *</span>
        <span class="inst-quote-field__with-icon">
          <Building2
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            required
            autocomplete="organization"
            :value="modelValue.legalName"
            @input="patch({ legalName: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Numéro d’identification fiscale *</span>
        <span class="inst-quote-field__with-icon">
          <Hash
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            required
            :value="modelValue.taxId"
            @input="patch({ taxId: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">RCCM / Référence administrative</span>
        <span class="inst-quote-field__with-icon">
          <ScrollText
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            :value="modelValue.adminReference"
            @input="patch({ adminReference: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field inst-quote-bill-card__span-2">
        <span class="inst-quote-field__label">Adresse de facturation *</span>
        <span class="inst-quote-field__with-icon">
          <MapPin
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            required
            autocomplete="street-address"
            :value="modelValue.billingAddress"
            @input="patch({ billingAddress: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Email pour la facturation *</span>
        <span class="inst-quote-field__with-icon">
          <Mail
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="email"
            required
            autocomplete="email"
            :value="modelValue.billingEmail"
            @input="patch({ billingEmail: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Téléphone (bureau)</span>
        <span class="inst-quote-field__with-icon">
          <Phone
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="tel"
            autocomplete="tel"
            :value="modelValue.officePhone"
            @input="patch({ officePhone: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Personne responsable des paiements *</span>
        <span class="inst-quote-field__with-icon">
          <UserRound
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            required
            autocomplete="name"
            :value="modelValue.paymentContactName"
            @input="patch({ paymentContactName: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Fonction</span>
        <span class="inst-quote-field__with-icon">
          <Briefcase
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="text"
            autocomplete="organization-title"
            :value="modelValue.paymentContactTitle"
            @input="patch({ paymentContactTitle: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Email</span>
        <span class="inst-quote-field__with-icon">
          <Mail
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="email"
            autocomplete="email"
            :value="modelValue.paymentContactEmail"
            @input="patch({ paymentContactEmail: ($event.target as HTMLInputElement).value })"
          >
        </span>
      </label>
    </div>
  </section>
</template>

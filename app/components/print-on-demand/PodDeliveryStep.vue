<script setup lang="ts">
import { Check, Info, Plus } from 'lucide-vue-next'
import {
  POD_DELIVERY_NOTES_MAX,
  podSavedAddresses,
  podShippingMethods,
  type PodAddressSelection,
  type PodShippingMethodId,
} from '@/data/print-on-demand'
import PodOrderSummary from '~/components/print-on-demand/PodOrderSummary.vue'

const props = defineProps<{
  addressSelection: PodAddressSelection
  shippingMethod: PodShippingMethodId
  recipientName: string
  phone: string
  email: string
  addressLine: string
  city: string
  country: string
  notes: string
  format: string
  pages: number
  cover: string
  interior: string
  paper: string
  weight: string
  binding: string
  quantity: number
  unitPriceLabel: string
  subtotalLabel: string
  shippingLabel: string
  shippingMethodLabel: string
  totalLabel: string
}>()

const emit = defineEmits<{
  'update:addressSelection': [value: PodAddressSelection]
  'update:shippingMethod': [value: PodShippingMethodId]
  'update:recipientName': [value: string]
  'update:phone': [value: string]
  'update:email': [value: string]
  'update:addressLine': [value: string]
  'update:city': [value: string]
  'update:country': [value: string]
  'update:notes': [value: string]
}>()

const showNewAddressForm = computed(() => props.addressSelection === 'new')

const notesCount = computed(() => props.notes.length)

function selectAddress(id: PodAddressSelection) {
  emit('update:addressSelection', id)
}

function selectShipping(id: PodShippingMethodId) {
  emit('update:shippingMethod', id)
}

function fieldValue(event: Event) {
  return (event.target as HTMLInputElement | HTMLTextAreaElement).value
}

function onNotesInput(event: Event) {
  const value = fieldValue(event).slice(0, POD_DELIVERY_NOTES_MAX)
  emit('update:notes', value)
}
</script>

<template>
  <div class="page-container pod-delivery__layout">
    <div class="pod-delivery__main">
      <header class="pod-delivery__head">
        <h2>Où souhaitez-vous être livré ?</h2>
        <p>
          Choisissez votre adresse de livraison et le mode d’expédition.
        </p>
      </header>

      <div class="pod-delivery__addresses" role="radiogroup" aria-label="Adresses de livraison">
        <button
          v-for="address in podSavedAddresses"
          :key="address.id"
          type="button"
          class="pod-delivery__address-card"
          :class="{ 'pod-delivery__address-card--active': addressSelection === address.id }"
          role="radio"
          :aria-checked="addressSelection === address.id"
          @click="selectAddress(address.id)"
        >
          <span
            class="pod-delivery__address-mark"
            :class="{ 'pod-delivery__address-mark--on': addressSelection === address.id }"
            aria-hidden="true"
          >
            <Check
              v-if="addressSelection === address.id"
              class="size-3.5"
              :stroke-width="2.5"
            />
          </span>

          <span class="pod-delivery__address-icon">
            <component
              :is="address.icon"
              class="size-5"
              :stroke-width="1.4"
              aria-hidden="true"
            />
          </span>

          <strong>{{ address.label }}</strong>
          <p class="pod-delivery__address-name">{{ address.name }}</p>
          <p
            v-for="(line, index) in address.lines"
            :key="`${address.id}-${index}`"
            class="pod-delivery__address-line"
          >
            {{ line }}
          </p>
          <p class="pod-delivery__address-phone">{{ address.phone }}</p>
        </button>

        <button
          type="button"
          class="pod-delivery__address-card pod-delivery__address-card--new"
          :class="{ 'pod-delivery__address-card--active': addressSelection === 'new' }"
          role="radio"
          :aria-checked="addressSelection === 'new'"
          @click="selectAddress('new')"
        >
          <span
            class="pod-delivery__address-mark"
            :class="{ 'pod-delivery__address-mark--on': addressSelection === 'new' }"
            aria-hidden="true"
          >
            <Check
              v-if="addressSelection === 'new'"
              class="size-3.5"
              :stroke-width="2.5"
            />
          </span>

          <span class="pod-delivery__address-plus">
            <Plus class="size-7" :stroke-width="1.4" aria-hidden="true" />
          </span>
          <strong>Nouvelle adresse</strong>
          <p class="pod-delivery__address-line">
            Ajouter une nouvelle adresse de livraison
          </p>
        </button>
      </div>

      <div
        v-if="showNewAddressForm"
        class="pod-delivery__form-panel"
      >
        <div class="pod-delivery__form">
          <label class="pod-delivery__field">
            <span>Nom complet / Organisation</span>
            <input
              :value="recipientName"
              type="text"
              autocomplete="name"
              placeholder="Ex. Jean Dupont"
              @input="emit('update:recipientName', fieldValue($event))"
            >
          </label>

          <label class="pod-delivery__field">
            <span>Téléphone</span>
            <input
              :value="phone"
              type="tel"
              autocomplete="tel"
              placeholder="+243 …"
              @input="emit('update:phone', fieldValue($event))"
            >
          </label>

          <label class="pod-delivery__field">
            <span>E-mail</span>
            <input
              :value="email"
              type="email"
              autocomplete="email"
              placeholder="vous@exemple.com"
              @input="emit('update:email', fieldValue($event))"
            >
          </label>

          <label class="pod-delivery__field pod-delivery__field--full">
            <span>Adresse</span>
            <input
              :value="addressLine"
              type="text"
              autocomplete="street-address"
              placeholder="Avenue, numéro, quartier…"
              @input="emit('update:addressLine', fieldValue($event))"
            >
          </label>

          <label class="pod-delivery__field">
            <span>Ville</span>
            <input
              :value="city"
              type="text"
              autocomplete="address-level2"
              placeholder="Ex. Kinshasa"
              @input="emit('update:city', fieldValue($event))"
            >
          </label>

          <label class="pod-delivery__field">
            <span>Pays</span>
            <input
              :value="country"
              type="text"
              autocomplete="country-name"
              placeholder="République démocratique du Congo"
              @input="emit('update:country', fieldValue($event))"
            >
          </label>
        </div>
      </div>

      <section class="pod-delivery__methods" aria-labelledby="pod-shipping-heading">
        <h3 id="pod-shipping-heading">Choisissez le mode de livraison</h3>

        <div class="pod-delivery__methods-list" role="radiogroup" aria-label="Modes de livraison">
          <button
            v-for="method in podShippingMethods"
            :key="method.id"
            type="button"
            class="pod-delivery__method"
            :class="{ 'pod-delivery__method--active': shippingMethod === method.id }"
            role="radio"
            :aria-checked="shippingMethod === method.id"
            @click="selectShipping(method.id)"
          >
            <span class="pod-delivery__method-icon">
              <component
                :is="method.icon"
                class="size-5"
                :stroke-width="1.4"
                aria-hidden="true"
              />
            </span>

            <span class="pod-delivery__method-copy">
              <strong>{{ method.label }}</strong>
              <span>{{ method.description }}</span>
              <span class="pod-delivery__method-delay">{{ method.delay }}</span>
            </span>

            <strong class="pod-delivery__method-price">{{ method.priceLabel }}</strong>

            <span
              class="pod-delivery__method-radio"
              :class="{ 'pod-delivery__method-radio--on': shippingMethod === method.id }"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>

      <section class="pod-delivery__notes" aria-labelledby="pod-notes-heading">
        <h3 id="pod-notes-heading">Instructions de livraison (optionnel)</h3>

        <div class="pod-delivery__notes-field">
          <textarea
            :value="notes"
            rows="4"
            :maxlength="POD_DELIVERY_NOTES_MAX"
            placeholder="Code d’accès, étage, point de repère, horaires préférés…"
            @input="onNotesInput"
          />
          <span class="pod-delivery__notes-count">
            {{ notesCount }} / {{ POD_DELIVERY_NOTES_MAX }}
          </span>
        </div>

        <p class="pod-delivery__notes-info">
          <Info class="size-4" :stroke-width="1.5" aria-hidden="true" />
          <span>Un suivi de votre commande vous sera envoyé par email dès l’expédition.</span>
        </p>
      </section>
    </div>

    <PodOrderSummary
      :format="format"
      :pages="pages"
      :cover="cover"
      :interior="interior"
      :paper="paper"
      :weight="weight"
      :binding="binding"
      :quantity="quantity"
      :unit-price-label="unitPriceLabel"
      :subtotal-label="subtotalLabel"
      :shipping-label="shippingLabel"
      :shipping-method-label="shippingMethodLabel"
      :total-label="totalLabel"
      show-shipping-total
    />
  </div>
</template>

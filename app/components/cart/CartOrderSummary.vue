<script setup lang="ts">
import { Clock, ShieldCheck, Truck } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  checkoutLabel?: string
  checkoutTo?: string
  checkoutDisabled?: boolean
  requirePayment?: boolean
}>(), {
  checkoutLabel: 'Passer la commande',
  checkoutDisabled: false,
  requirePayment: false,
})

const {
  bookCountLabel,
  subtotal,
  discount,
  shipping,
  tax,
  total,
  formatMoney,
  lines,
  validatePaymentSelection,
} = useCart()

function handleCheckout() {
  if (props.checkoutDisabled || !props.checkoutTo)
    return

  if (lines.value.length === 0)
    return

  if (props.requirePayment && !validatePaymentSelection()) {
    document.getElementById('cart-payment-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    return
  }

  navigateTo(props.checkoutTo)
}
</script>

<template>
  <aside class="cart-summary">
    <h2 class="cart-summary__title">
      Résumé de commande
    </h2>

    <dl class="cart-summary__list">
      <div class="cart-summary__row">
        <dt>Sous-total ({{ bookCountLabel }})</dt>
        <dd>{{ formatMoney(subtotal) }}</dd>
      </div>
      <div
        v-if="discount > 0"
        class="cart-summary__row cart-summary__row--discount"
      >
        <dt>Remise</dt>
        <dd>-{{ formatMoney(discount) }}</dd>
      </div>
      <div class="cart-summary__row">
        <dt>Frais de livraison</dt>
        <dd>{{ formatMoney(shipping) }}</dd>
      </div>
      <div class="cart-summary__row">
        <dt>TVA</dt>
        <dd>{{ formatMoney(tax) }}</dd>
      </div>
    </dl>

    <div class="cart-summary__total">
      <span>Total</span>
      <strong>{{ formatMoney(total) }}</strong>
    </div>

    <div class="cart-summary__secure">
      <ShieldCheck
        class="cart-summary__secure-icon"
        aria-hidden="true"
      />
      <div>
        <p class="cart-summary__secure-title">
          Paiement sécurisé
        </p>
        <p class="cart-summary__secure-text">
          Vos données sont protégées et sécurisées.
        </p>
      </div>
    </div>

    <button
      type="button"
      class="cart-summary__checkout"
      :class="{ 'cart-summary__checkout--disabled': checkoutDisabled }"
      :disabled="checkoutDisabled"
      @click="handleCheckout"
    >
      {{ checkoutLabel }}
    </button>

    <ul class="cart-summary__notes">
      <li>
        <Clock
          class="cart-summary__note-icon"
          aria-hidden="true"
        />
        Livraison numérique instantanée pour les ebooks
      </li>
      <li>
        <Truck
          class="cart-summary__note-icon"
          aria-hidden="true"
        />
        Livraison 2 à 5 jours ouvrés pour les livres papier
      </li>
    </ul>
  </aside>
</template>

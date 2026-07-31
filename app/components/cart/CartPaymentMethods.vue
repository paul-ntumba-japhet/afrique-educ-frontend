<script setup lang="ts">
import { cartPaymentMethods } from '@/data/cart-page'

const { selectedPayment, selectPayment, paymentError } = useCart()
</script>

<template>
  <section
    id="cart-payment-section"
    class="cart-panel"
    :class="{ 'cart-panel--error': paymentError }"
    aria-labelledby="cart-payment-heading"
  >
    <h2
      id="cart-payment-heading"
      class="cart-panel__title"
    >
      Mode de paiement
    </h2>
    <p class="cart-panel__lead cart-panel__lead--payment">
      Veuillez sélectionner un mode de paiement
    </p>
    <p
      v-if="paymentError"
      class="cart-payment__error"
      role="alert"
    >
      Sélectionnez un mode de paiement pour poursuivre votre commande.
    </p>

    <div class="cart-payment__grid">
      <div
        v-for="method in cartPaymentMethods"
        :key="method.id"
        class="cart-payment__item"
      >
        <span class="cart-payment__label">{{ method.label }}</span>
        <button
          type="button"
          class="cart-payment__option"
          :class="{
            'cart-payment__option--active': selectedPayment === method.id,
          }"
          :aria-label="method.label"
          :aria-pressed="selectedPayment === method.id"
          @click="selectPayment(method.id)"
        >
          <img
            v-if="method.image"
            :src="method.image"
            :alt="''"
            class="cart-payment__logo"
          >
        </button>
      </div>
    </div>
  </section>
</template>

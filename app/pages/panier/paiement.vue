<script setup lang="ts">
import { CreditCard } from 'lucide-vue-next'

const { lines } = useCart()

useHead({
  title: 'Paiement — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Finalisez le paiement de votre commande sur Afric-Educ.',
    },
  ],
})

watchEffect(() => {
  if (lines.value.length === 0)
    navigateTo('/panier')
})
</script>

<template>
  <div v-if="lines.length > 0">
    <div class="cart-page__layout">
      <div class="cart-page__main-stack">
        <header class="cart-page__header">
          <div
            class="cart-page__header-icon"
            aria-hidden="true"
          >
            <CreditCard class="cart-page__header-icon-svg" />
          </div>
          <div>
            <h1 class="cart-page__title">
              Paiement
            </h1>
            <p class="cart-page__subtitle">
              Finalisez votre transaction en toute sécurité.
            </p>
          </div>
        </header>

        <CartCheckoutMain>
          <section class="cart-panel">
            <h2 class="cart-panel__title">
              Paiement en cours de configuration
            </h2>
            <p class="cart-panel__lead">
              Cette étape accueillera prochainement le formulaire de paiement sécurisé.
            </p>
          </section>
        </CartCheckoutMain>
      </div>

      <CartOrderSummary
        checkout-label="Payer maintenant"
        :checkout-disabled="true"
      />
    </div>
  </div>
</template>

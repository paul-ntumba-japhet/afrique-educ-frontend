<script setup lang="ts">
const { lines } = useCart()

useHead({
  title: 'Mon panier — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Vérifiez vos livres et finalisez votre commande sur Afric-Educ.',
    },
  ],
})
</script>

<template>
  <div>
    <div
      v-if="lines.length === 0"
      class="cart-page__empty"
    >
      <CartPageHeader />
      <p>Votre panier est vide.</p>
      <UButton
        to="/livres"
        color="primary"
      >
        Explorer la bibliothèque
      </UButton>
    </div>

    <template v-else>
      <div class="cart-page__layout">
        <div class="cart-page__main-stack">
          <CartPageHeader />

          <CartCheckoutMain>
            <CartItemsTable :lines="lines" />
            <CartPromoCode />
            <CartPaymentMethods />
            <CartShippingAddress />
          </CartCheckoutMain>
        </div>

        <CartOrderSummary
          checkout-to="/panier/confirmation"
          require-payment
        />
      </div>

      <CartRecommendations />
    </template>
  </div>
</template>

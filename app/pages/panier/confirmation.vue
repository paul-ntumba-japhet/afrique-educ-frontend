<script setup lang="ts">
const { lines, selectedPayment, paymentError } = useCart()

useHead({
  title: 'Confirmation — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Confirmez votre commande avant le paiement sur Afric-Educ.',
    },
  ],
})

watchEffect(() => {
  if (lines.value.length === 0) {
    navigateTo('/panier')
    return
  }

  if (!selectedPayment.value) {
    paymentError.value = true
    navigateTo('/panier')
  }
})
</script>

<template>
  <div
    v-if="lines.length > 0"
    class="cart-confirmation"
  >
    <CartConfirmationHero />

    <div class="cart-confirmation__layout">
      <CartConfirmationSummary />
      <CartConfirmationAside />
    </div>

    <CartConfirmationActions />
  </div>
</template>

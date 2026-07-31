<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <header class="cart-confirmation__hero">
    <div
      class="cart-confirmation__hero-icon"
      aria-hidden="true"
    >
      <ShieldCheck class="cart-confirmation__hero-icon-svg" />
    </div>
    <h1 class="cart-confirmation__title">
      Confirmer votre commande
    </h1>
    <p class="cart-confirmation__lead">
      Vérifiez les informations ci-dessous avant de procéder au paiement.
    </p>
  </header>
</template>

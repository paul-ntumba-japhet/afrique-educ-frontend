<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <section
    class="cart-panel"
    aria-labelledby="cart-shipping-heading"
  >
    <h2
      id="cart-shipping-heading"
      class="cart-panel__title"
    >
      Adresse de livraison
    </h2>
    <p class="cart-panel__lead">
      Pour les livres papier uniquement
    </p>

    <button
      type="button"
      class="cart-shipping__add"
    >
      <Plus
        class="size-4"
        aria-hidden="true"
      />
      Ajouter une adresse
    </button>
  </section>
</template>

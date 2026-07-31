<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'Mon panier',
  subtitle: 'Vérifiez vos livres avant de finaliser votre commande.',
})
</script>

<template>
  <header class="cart-page__header">
    <div
      class="cart-page__header-icon"
      aria-hidden="true"
    >
      <ShoppingCart class="cart-page__header-icon-svg" />
    </div>
    <div>
      <h1 class="cart-page__title">
        {{ title }}
      </h1>
      <p class="cart-page__subtitle">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

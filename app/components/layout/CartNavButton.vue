<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'

const { itemCount } = useCart()
</script>

<template>
  <NuxtLink
    to="/panier"
    class="cart-nav-btn"
    :aria-label="itemCount > 0 ? `Panier, ${itemCount} article${itemCount > 1 ? 's' : ''}` : 'Panier'"
  >
    <ShoppingCart
      class="cart-nav-btn__icon"
      aria-hidden="true"
    />
    <span
      v-if="itemCount > 0"
      class="cart-nav-btn__badge"
      aria-hidden="true"
    >
      {{ itemCount > 99 ? '99+' : itemCount }}
    </span>
  </NuxtLink>
</template>

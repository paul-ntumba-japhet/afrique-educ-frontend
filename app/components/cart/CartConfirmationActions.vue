<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <footer class="cart-confirmation-actions">
    <NuxtLink
      to="/panier"
      class="cart-confirmation-actions__back"
    >
      <ArrowLeft
        class="cart-confirmation-actions__back-icon"
        aria-hidden="true"
      />
      Retour au panier
    </NuxtLink>
  </footer>
</template>

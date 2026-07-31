<script setup lang="ts">
const { isDark } = useAppTheme()
</script>

<template>
  <div
    class="cart-page"
    :class="{ 'cart-page--dark': isDark }"
  >
    <div class="page-container cart-page__container">
      <div class="cart-page__steps-row">
        <CartCheckoutSteps />
        <div
          class="cart-page__steps-spacer"
          aria-hidden="true"
        />
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

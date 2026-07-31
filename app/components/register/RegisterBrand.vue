<script setup lang="ts">
interface Props {
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  compact: false,
})
</script>

<template>
  <NuxtLink
    to="/"
    class="register-brand"
    :class="{ 'register-brand--compact': compact }"
    aria-label="Afric-Educ — Accueil"
  >
    <span class="register-brand__logo">
      <span class="text-gradient-gold">Afric</span><span class="register-brand__logo-suffix">-Educ</span>
    </span>
  </NuxtLink>
</template>

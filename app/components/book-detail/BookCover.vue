<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="book-cover">
    <img
      :src="src"
      :alt="alt"
      class="book-cover__image"
      decoding="async"
      fetchpriority="high"
    >
  </div>
</template>

<script setup lang="ts">
import type { PopularCategory } from '@/data/categories-page'
import { Flame } from 'lucide-vue-next'

defineProps<{
  category: PopularCategory
}>()
</script>

<template>
  <NuxtLink
    :to="category.href"
    class="popular-category-chip category-card"
  >
    <Flame
      class="popular-category-chip__icon"
      aria-hidden="true"
    />
    <span class="popular-category-chip__label">{{ category.title }}</span>
  </NuxtLink>
</template>

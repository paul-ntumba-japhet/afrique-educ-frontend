<script setup lang="ts">
import type { HeritageCategory } from '@/data/categories-page'

defineProps<{
  category: HeritageCategory
}>()
</script>

<template>
  <article class="heritage-card category-card">
    <NuxtLink
      :to="category.href"
      class="heritage-card__link"
    >
      <img
        :src="category.image"
        :alt="category.title"
        class="heritage-card__image"
        loading="lazy"
        decoding="async"
      >
      <div
        class="heritage-card__overlay"
        aria-hidden="true"
      />
      <h3 class="heritage-card__title">
        {{ category.title }}
      </h3>
    </NuxtLink>
  </article>
</template>

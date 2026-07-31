<script setup lang="ts">
import type { ReadingFormat } from '@/data/categories-page'

defineProps<{
  format: ReadingFormat
}>()
</script>

<template>
  <article class="format-card category-card">
    <NuxtLink
      :to="format.href"
      class="format-card__link"
    >
      <div class="format-card__visual">
        <img
          :src="format.image"
          alt=""
          class="format-card__image"
          loading="lazy"
          decoding="async"
        >
      </div>
      <h3 class="format-card__title">
        {{ format.title }}
      </h3>
      <p class="format-card__description">
        {{ format.description }}
      </p>
    </NuxtLink>
  </article>
</template>

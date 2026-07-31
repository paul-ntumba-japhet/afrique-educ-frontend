<script setup lang="ts">
import type { AuthorProfile } from '@/data/categories-page'

defineProps<{
  author: AuthorProfile
}>()
</script>

<template>
  <article class="author-card category-card">
    <NuxtLink
      :to="author.href"
      class="author-card__link"
    >
      <img
        :src="author.avatar"
        :alt="author.name"
        class="author-card__avatar"
        loading="lazy"
        decoding="async"
      >

      <div class="author-card__info">
        <h3 class="author-card__name">
          {{ author.name }}
        </h3>
        <p class="author-card__role">
          {{ author.role }}
        </p>
      </div>

      <div class="author-card__book-wrap">
        <img
          :src="author.book"
          :alt="author.bookAlt"
          class="author-card__book"
          loading="lazy"
          decoding="async"
        >
      </div>
    </NuxtLink>
  </article>
</template>

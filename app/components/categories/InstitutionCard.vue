<script setup lang="ts">
import type { InstitutionCategory } from '@/data/categories-page'

defineProps<{
  institution: InstitutionCategory
}>()
</script>

<template>
  <article class="institution-card category-card">
    <NuxtLink
      :to="institution.href"
      class="institution-card__link"
    >
      <div class="institution-card__media">
        <img
          :src="institution.image"
          :alt="institution.title"
          class="institution-card__image"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="institution-card__body">
        <h3 class="institution-card__title">
          {{ institution.title }}
        </h3>
        <p class="institution-card__description">
          {{ institution.description }}
        </p>
        <span class="institution-card__cta">
          Voir plus
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

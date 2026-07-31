<script setup lang="ts">
import { popularCollections } from '@/composables/useBooksMock'
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="books-collections"
    aria-labelledby="books-collections-heading"
  >
    <div class="page-container books-collections__inner">
      <div class="books-collections__header">
        <h2
          id="books-collections-heading"
          class="books-collections__title"
        >
          Collections populaires
        </h2>
        <NuxtLink
          to="/livres"
          class="books-collections__action"
        >
          Voir toutes
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <div class="books-collections__grid">
        <NuxtLink
          v-for="collection in popularCollections"
          :key="collection.slug"
          :to="collection.href"
          class="books-collection-card"
        >
          <h3 class="books-collection-card__title">
            {{ collection.title }}
          </h3>
          <p class="books-collection-card__count">
            {{ collection.count }} livres
          </p>
          <ChevronRight
            class="books-collection-card__icon"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { popularCategories } from '@/data/categories-page'
</script>

<template>
  <section
    class="popular-categories-section"
    aria-labelledby="popular-categories-heading"
  >
    <div class="page-container popular-categories-section__inner">
      <SectionTitle
        heading-id="popular-categories-heading"
        index="05"
        title="Catégories populaires"
        action-label="Voir toutes"
        action-href="/catalogue"
      />

      <div class="popular-categories-section__grid categories-animate-section">
        <PopularCategoryChip
          v-for="category in popularCategories"
          :key="category.slug"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

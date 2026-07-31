<script setup lang="ts">
import { mainCategories } from '@/data/categories-page'
</script>

<template>
  <section
    class="main-categories-section"
    aria-labelledby="main-categories-heading"
  >
    <div class="page-container main-categories-section__inner categories-animate-section">
      <SectionTitle
        heading-id="main-categories-heading"
        index="01"
        title="Catégories principales"
        action-label="Voir toutes"
        action-href="/catalogue"
      />

      <CategoriesSlider
        :items="mainCategories"
        :cards-per-view="5"
      />
    </div>
  </section>
</template>

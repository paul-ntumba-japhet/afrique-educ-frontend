<script setup lang="ts">
import { readingFormats, themeCategories } from '@/data/categories-page'
</script>

<template>
  <section
    class="themes-formats-section"
    aria-labelledby="themes-section-heading"
  >
    <div class="page-container themes-formats-section__inner">
      <div class="themes-formats-section__themes">
        <SectionTitle
          heading-id="themes-section-heading"
          index="02"
          title="Explorer par thème"
          action-label="Tous les thèmes"
          action-href="/catalogue"
        />

        <div class="themes-formats-section__themes-grid categories-animate-section">
          <ThemeCategoryCard
            v-for="theme in themeCategories"
            :key="theme.slug"
            :theme="theme"
          />
        </div>
      </div>

      <div
        class="themes-formats-section__formats"
        aria-labelledby="formats-section-heading"
      >
        <SectionTitle
          heading-id="formats-section-heading"
          index="03"
          title="Explorer par format"
          action-label="Voir toutes"
          action-href="/catalogue"
        />

        <div class="themes-formats-section__formats-grid categories-animate-section">
          <FormatCard
            v-for="format in readingFormats"
            :key="format.slug"
            :format="format"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { institutionCategories } from '@/data/categories-page'
</script>

<template>
  <section
    class="institutions-section"
    aria-labelledby="institutions-section-heading"
  >
    <div class="page-container institutions-section__inner">
      <SectionTitle
        heading-id="institutions-section-heading"
        index="06"
        title="Catégories pour les établissements"
        action-label="En savoir plus"
        action-href="/catalogue?theme=etablissements"
      />

      <div class="institutions-section__grid categories-animate-section">
        <InstitutionCard
          v-for="institution in institutionCategories"
          :key="institution.slug"
          :institution="institution"
        />
      </div>
    </div>
  </section>
</template>

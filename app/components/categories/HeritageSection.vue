<script setup lang="ts">
import { heritageCategories } from '@/data/categories-page'
</script>

<template>
  <section
    class="heritage-section"
    aria-labelledby="heritage-section-heading"
  >
    <div class="page-container heritage-section__inner">
      <SectionTitle
        heading-id="heritage-section-heading"
        index="04"
        title="Trésors du patrimoine africain"
        action-label="Découvrir"
        action-href="/catalogue?theme=patrimoine"
      />

      <div class="heritage-section__slider categories-animate-section">
        <HeritageSlider
          :items="heritageCategories"
          :cards-per-view="4"
        />
      </div>
    </div>
  </section>
</template>

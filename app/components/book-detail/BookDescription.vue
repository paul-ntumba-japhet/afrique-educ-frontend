<script setup lang="ts">
import type { BookDetailDescription } from '@/data/book-detail-page'

defineProps<{
  description: BookDetailDescription
}>()

const isExpanded = ref(false)
</script>

<template>
  <article
    class="book-detail-info-card book-detail-info-card--about"
    aria-labelledby="book-about-heading"
  >
    <h2
      id="book-about-heading"
      class="book-detail-info-card__title"
    >
      {{ description.sectionTitle }}
    </h2>

    <div
      class="book-detail-info-card__content book-detail-info-card__content--about"
      :class="{ 'book-detail-info-card__content--collapsed': !isExpanded }"
    >
      <p
        v-for="(paragraph, index) in description.paragraphs"
        :key="index"
        class="book-detail-info-card__paragraph"
      >
        {{ paragraph }}
      </p>
    </div>

    <button
      type="button"
      class="book-detail-info-card__toggle"
      :aria-expanded="isExpanded"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? 'Afficher moins' : 'Afficher plus' }}
    </button>
  </article>
</template>

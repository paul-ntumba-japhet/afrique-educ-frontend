<script setup lang="ts">
import type { BookDetailDescription } from '@/data/book-detail-page'
import { Check } from 'lucide-vue-next'

defineProps<{
  description: BookDetailDescription
}>()
</script>

<template>
  <article
    class="book-detail-info-card book-detail-info-card--key-points"
    aria-labelledby="book-key-points-heading"
  >
    <h2
      id="book-key-points-heading"
      class="book-detail-info-card__title"
    >
      {{ description.keyPointsTitle }}
    </h2>

    <ul class="book-detail-info-card__key-points">
      <li
        v-for="(point, index) in description.keyPoints"
        :key="index"
        class="book-detail-info-card__key-point"
      >
        <Check
          class="book-detail-info-card__key-point-icon"
          aria-hidden="true"
        />
        <span>{{ point }}</span>
      </li>
    </ul>
  </article>
</template>

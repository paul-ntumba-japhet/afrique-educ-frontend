<script setup lang="ts">
import type { BookDetailInsights } from '@/data/book-detail-page'

defineProps<{
  insights: BookDetailInsights
}>()
</script>

<template>
  <section
    class="book-detail-insights book-detail-scroll-reveal"
    aria-label="Objectifs, avis et citations"
  >
    <div class="book-detail-insights__grid">
      <BookLearningOutcomes :learning-outcomes="insights.learningOutcomes" />
      <BookReviews :reviews="insights.reviews" />
      <BookQuotes :quotes="insights.quotes" />
    </div>
  </section>
</template>

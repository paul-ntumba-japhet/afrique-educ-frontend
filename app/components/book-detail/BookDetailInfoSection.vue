<script setup lang="ts">
import type { BookDetailBibliography, BookDetailDescription } from '@/data/book-detail-page'

defineProps<{
  description: BookDetailDescription
  bibliography: BookDetailBibliography
}>()
</script>

<template>
  <section
    class="book-detail-info book-detail-scroll-reveal"
    aria-label="Informations sur le livre"
  >
    <div class="book-detail-info__grid">
      <BookDescription :description="description" />
      <BookKeyPointsCard :description="description" />
      <BookMetadata :bibliography="bibliography" />
    </div>
  </section>
</template>

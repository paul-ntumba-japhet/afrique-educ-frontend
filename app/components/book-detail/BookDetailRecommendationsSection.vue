<script setup lang="ts">
import type { BookDetailFormats, BookDetailRelatedBooks } from '@/data/book-detail-page'

defineProps<{
  relatedBooks: BookDetailRelatedBooks
  formats: BookDetailFormats
}>()
</script>

<template>
  <section
    class="book-detail-recommendations"
    aria-label="Recommandations et formats"
  >
    <div class="book-detail-recommendations__layout">
      <div class="book-detail-recommendations__related-header">
        <h2
          id="book-related-heading"
          class="book-detail-recommendations__related-title"
        >
          {{ relatedBooks.sectionTitle }}
        </h2>
        <NuxtLink
          :to="relatedBooks.viewAllHref"
          class="book-detail-recommendations__related-action"
        >
          {{ relatedBooks.viewAllLabel }}
        </NuxtLink>
      </div>

      <h2
        id="book-formats-heading"
        class="book-detail-recommendations__formats-title"
      >
        {{ formats.sectionTitle }}
      </h2>

      <div class="book-detail-recommendations__carousel-col">
        <BookRelatedBooksCarousel :books="relatedBooks.books" />
      </div>

      <aside
        class="book-detail-recommendations__formats-panel"
        aria-labelledby="book-formats-heading"
      >
        <div class="book-detail-recommendations__formats-grid">
          <BookFormatCard
            v-for="format in formats.formats"
            :key="format.id"
            :format="format"
          />
        </div>
      </aside>
    </div>
  </section>
</template>

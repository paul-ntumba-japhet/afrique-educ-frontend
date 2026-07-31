<script setup lang="ts">
import type { BookDetailRelatedBook } from '@/data/book-detail-page'
import { Star } from 'lucide-vue-next'

const props = defineProps<{
  book: BookDetailRelatedBook
}>()

function formatPrice(price: number | null, isFree: boolean) {
  if (isFree || price == null)
    return 'Gratuit'

  return `${price.toFixed(2).replace('.', ',')} $`
}

function formatRating(value: number) {
  return value.toFixed(1).replace('.', ',')
}

function isStarFilled(starIndex: number) {
  return props.book.rating >= starIndex - 0.25
}
</script>

<template>
  <article class="book-related-card">
    <NuxtLink
      :to="`/livres/${book.slug}`"
      class="book-related-card__link"
    >
      <div class="book-related-card__cover-wrap">
        <img
          :src="book.cover"
          :alt="`Couverture du livre ${book.title}`"
          class="book-related-card__cover"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="book-related-card__body">
        <h3 class="book-related-card__title">
          {{ book.title }}
        </h3>
        <p class="book-related-card__author">
          {{ book.author }}
        </p>

        <div
          class="book-related-card__rating"
          :aria-label="`Note ${formatRating(book.rating)} sur 5`"
        >
          <div
            class="book-related-card__stars"
            aria-hidden="true"
          >
            <Star
              v-for="star in 5"
              :key="star"
              class="book-related-card__star"
              :class="{ 'book-related-card__star--filled': isStarFilled(star) }"
            />
          </div>
          <span class="book-related-card__rating-value">{{ formatRating(book.rating) }}</span>
        </div>

        <p class="book-related-card__price">
          {{ formatPrice(book.price, book.isFree) }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

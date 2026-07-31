<script setup lang="ts">
import type { BookDetailReviewsSummary } from '@/data/book-detail-page'
import { Star } from 'lucide-vue-next'

const props = defineProps<{
  reviews: BookDetailReviewsSummary
}>()

function formatRating(value: number) {
  return value.toFixed(1).replace('.', ',')
}

function isStarFilled(starIndex: number) {
  return props.reviews.rating >= starIndex - 0.25
}
</script>

<template>
  <article
    class="book-detail-insights-card book-detail-insights-card--reviews"
    aria-labelledby="book-reviews-heading"
  >
    <h2
      id="book-reviews-heading"
      class="book-detail-insights-card__title"
    >
      {{ reviews.sectionTitle }}
    </h2>

    <div class="book-detail-reviews__summary">
      <p class="book-detail-reviews__score">
        {{ formatRating(reviews.rating) }} / 5
      </p>

      <div
        class="book-detail-reviews__stars"
        :aria-label="`Note ${formatRating(reviews.rating)} sur 5`"
      >
        <Star
          v-for="star in 5"
          :key="star"
          class="book-detail-reviews__star"
          :class="{ 'book-detail-reviews__star--filled': isStarFilled(star) }"
          aria-hidden="true"
        />
      </div>

      <p class="book-detail-reviews__count">
        {{ reviews.basedOnLabel }}
      </p>
    </div>

    <ul class="book-detail-reviews__distribution">
      <li
        v-for="item in reviews.distribution"
        :key="item.stars"
        class="book-detail-reviews__bar-row"
      >
        <span class="book-detail-reviews__bar-label">
          {{ item.stars }}
          <Star
            class="book-detail-reviews__bar-star"
            aria-hidden="true"
          />
        </span>
        <div class="book-detail-reviews__bar-track">
          <span
            class="book-detail-reviews__bar-fill"
            :style="{ width: `${item.percentage}%` }"
          />
        </div>
        <span class="book-detail-reviews__bar-value">{{ item.percentage }}%</span>
      </li>
    </ul>

    <button
      type="button"
      class="book-detail-insights-card__cta"
    >
      {{ reviews.viewAllLabel }}
    </button>
  </article>
</template>

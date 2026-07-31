<script setup lang="ts">
import { getBookCover, getBookDetailPath } from '@/composables/useBooksMock'
import type { BookItem } from '@/composables/useBooksMock'
import { ChevronRight, Heart, Star } from 'lucide-vue-next'

const props = defineProps<{
  book: BookItem
  layout?: 'grid' | 'list'
}>()

const { isFavorite, toggleFavorite } = useBooksCatalog()

const coverSrc = computed(() => getBookCover(props.book.coverSlug))

const isLiked = computed(() => isFavorite(props.book.id))

const ctaLabel = computed(() =>
  props.book.isFree ? 'Lire maintenant' : 'Découvrir',
)

const categoryClass = computed(() =>
  `book-card__category--${props.book.categorySlug}`,
)

const detailPath = computed(() => getBookDetailPath(props.book))

function formatPrice(price: number | null) {
  if (price == null)
    return 'Gratuit'
  return `${price.toFixed(2).replace('.', ',')} $`
}

function formatRating(rating: number) {
  return rating.toFixed(1).replace('.', ',')
}

function isStarFilled(starIndex: number) {
  return props.book.rating >= starIndex - 0.25
}
</script>

<template>
  <article
    class="book-card"
    :class="layout === 'list' ? 'book-card--list' : 'book-card--grid'"
  >
    <div class="book-card__cover-wrap">
      <img
        :src="coverSrc"
        :alt="`Couverture du livre ${book.title}`"
        class="book-card__cover"
        loading="lazy"
        decoding="async"
      >
      <span
        v-if="book.badge"
        class="book-card__badge"
        :class="`book-card__badge--${book.badge.toLowerCase()}`"
      >
        {{ book.badge }}
      </span>
      <button
        type="button"
        class="book-card__favorite"
        :class="{ 'book-card__favorite--active': isLiked }"
        :aria-label="isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'"
        @click="toggleFavorite(book.id)"
      >
        <Heart
          class="size-4"
          :fill="isLiked ? 'currentColor' : 'none'"
          aria-hidden="true"
        />
      </button>
    </div>

    <div class="book-card__body">
      <p
        class="book-card__category"
        :class="categoryClass"
      >
        {{ book.category }}
      </p>
      <h3 class="book-card__title">
        {{ book.title }}
      </h3>
      <p class="book-card__author">
        {{ book.author }}
      </p>

      <div
        class="book-card__rating"
        :aria-label="`Note ${formatRating(book.rating)} sur 5`"
      >
        <div
          class="book-card__stars"
          aria-hidden="true"
        >
          <Star
            v-for="star in 5"
            :key="star"
            class="book-card__star"
            :class="{ 'book-card__star--filled': isStarFilled(star) }"
          />
        </div>
        <span class="book-card__rating-value">{{ formatRating(book.rating) }}</span>
        <span class="book-card__reviews">({{ book.reviews }})</span>
      </div>

      <p class="book-card__formats">
        {{ book.formats.join(' • ') }}
      </p>

      <div class="book-card__footer">
        <span
          class="book-card__price"
          :class="{ 'book-card__price--free': book.isFree }"
        >{{ formatPrice(book.price) }}</span>
        <NuxtLink
          :to="detailPath"
          class="book-card__cta"
        >
          {{ ctaLabel }}
          <ChevronRight
            class="size-3.5"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

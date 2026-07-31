<script setup lang="ts">
import { ChevronLeft, ChevronRight, Star } from 'lucide-vue-next'
import { authorProfile } from '@/data/author-profile'

const activeFilter = ref('all')
const page = ref(0)
const cardsPerView = 5

const filteredBooks = computed(() => {
  if (activeFilter.value === 'all')
    return authorProfile.books
  return authorProfile.books.filter(book => book.genre === activeFilter.value)
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredBooks.value.length / cardsPerView)),
)

const visibleBooks = computed(() => {
  const start = page.value * cardsPerView
  return filteredBooks.value.slice(start, start + cardsPerView)
})

watch(activeFilter, () => {
  page.value = 0
})

function goPrev() {
  if (page.value > 0)
    page.value -= 1
}

function goNext() {
  if (page.value < totalPages.value - 1)
    page.value += 1
}
</script>

<template>
  <section
    id="livres"
    class="author-profile-books"
    aria-labelledby="author-books-heading"
  >
    <div class="author-profile-books__header">
      <h2
        id="author-books-heading"
        class="author-profile-books__title"
      >
        Tous les livres
      </h2>

      <div
        class="author-profile-books__filters"
        role="tablist"
        aria-label="Filtrer par genre"
      >
        <button
          v-for="filter in authorProfile.bookFilters"
          :key="filter.id"
          type="button"
          class="author-profile-books__filter"
          :class="{ 'author-profile-books__filter--active': activeFilter === filter.id }"
          role="tab"
          :aria-selected="activeFilter === filter.id"
          @click="activeFilter = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>

    <div class="author-profile-books__layout">
      <div class="author-profile-books__slider-wrap">
        <button
          type="button"
          class="author-profile-books__arrow author-profile-books__arrow--prev"
          :disabled="page <= 0"
          aria-label="Livres précédents"
          @click="goPrev"
        >
          <ChevronLeft class="size-5" aria-hidden="true" />
        </button>

        <ul class="author-profile-books__track">
          <li
            v-for="book in visibleBooks"
            :key="book.id"
            class="author-profile-books__card"
          >
            <NuxtLink
              :to="`/livres/${book.slug}`"
              class="author-profile-books__card-link"
            >
              <span
                v-if="book.badge"
                class="author-profile-books__badge"
              >{{ book.badge }}</span>
              <img
                :src="book.cover"
                :alt="`Couverture — ${book.title}`"
                class="author-profile-books__cover"
                width="180"
                height="260"
                loading="lazy"
              >
              <h3 class="author-profile-books__book-title">
                {{ book.title }}
              </h3>
              <p class="author-profile-books__meta">
                {{ book.year }}
              </p>
              <p class="author-profile-books__rating">
                <Star
                  class="author-profile-books__star"
                  aria-hidden="true"
                />
                {{ book.rating }}
                <span>({{ book.reviews }})</span>
              </p>
              <p class="author-profile-books__price">
                {{ book.price }}
              </p>
            </NuxtLink>
          </li>
        </ul>

        <button
          type="button"
          class="author-profile-books__arrow author-profile-books__arrow--next"
          :disabled="page >= totalPages - 1"
          aria-label="Livres suivants"
          @click="goNext"
        >
          <ChevronRight class="size-5" aria-hidden="true" />
        </button>
      </div>

      <article class="author-profile-books__upcoming">
        <h3 class="author-profile-books__upcoming-title">
          Livre en préparation
        </h3>
        <img
          :src="authorProfile.upcomingBook.cover"
          :alt="`Couverture — ${authorProfile.upcomingBook.title}`"
          class="author-profile-books__upcoming-cover"
          width="200"
          height="280"
          loading="lazy"
        >
        <p class="author-profile-books__upcoming-name">
          {{ authorProfile.upcomingBook.title }}
        </p>
        <p class="author-profile-books__upcoming-date">
          Sortie : {{ authorProfile.upcomingBook.release }}
        </p>
        <NuxtLink
          :to="authorProfile.upcomingBook.href"
          class="author-profile-books__upcoming-btn"
        >
          Précommander
        </NuxtLink>
      </article>
    </div>
  </section>
</template>

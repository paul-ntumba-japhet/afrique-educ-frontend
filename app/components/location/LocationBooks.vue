<script setup lang="ts">
import { ArrowRight, BookOpen, ChevronRight, FileText } from 'lucide-vue-next'
import { locationBooks } from '@/data/location-page'

const scroller = ref<HTMLElement | null>(null)

function scrollNext() {
  if (!scroller.value)
    return
  scroller.value.scrollBy({ left: 280, behavior: 'smooth' })
}
</script>

<template>
  <section
    id="livres"
    class="location-books"
    aria-labelledby="location-books-heading"
  >
    <div class="page-container">
      <header class="location-books__head">
        <h2 id="location-books-heading">
          Livres disponibles
        </h2>
        <NuxtLink
          to="/livres"
          class="location-books__all"
        >
          Voir tout
          <ArrowRight
            class="size-4"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </NuxtLink>
      </header>

      <div class="location-books__track-wrap">
        <ul
          ref="scroller"
          class="location-books__track"
        >
          <li
            v-for="book in locationBooks"
            :key="book.id"
            class="location-book-card"
          >
            <article>
              <div
                class="location-book-card__cover"
                role="link"
                tabindex="0"
                @click="navigateTo(`/partenaires/bibliotheques/location/${book.id}`)"
                @keydown.enter="navigateTo(`/partenaires/bibliotheques/location/${book.id}`)"
              >
                <img
                  :src="book.cover"
                  :alt="`Couverture de ${book.title}`"
                  width="220"
                  height="300"
                  loading="lazy"
                  decoding="async"
                >
              </div>
              <h3>
                <NuxtLink :to="`/partenaires/bibliotheques/location/${book.id}`">
                  {{ book.title }}
                </NuxtLink>
              </h3>
              <p class="location-book-card__author">
                {{ book.author }}
              </p>
              <div class="location-book-card__meta">
                <span class="location-book-card__format">
                  <FileText
                    v-if="book.format === 'Numérique'"
                    class="size-3.5"
                    :stroke-width="1.75"
                    aria-hidden="true"
                  />
                  <BookOpen
                    v-else
                    class="size-3.5"
                    :stroke-width="1.75"
                    aria-hidden="true"
                  />
                  {{ book.format }}
                </span>
                <span
                  v-if="book.available"
                  class="location-book-card__badge"
                >
                  Disponible
                </span>
              </div>
              <p class="location-book-card__price">
                {{ book.priceLabel }}
                <span>/ {{ book.durationLabel }}</span>
              </p>
              <button
                type="button"
                class="location-book-card__cta"
                @click="navigateTo(`/partenaires/bibliotheques/location/${book.id}`)"
              >
                {{ book.action }}
              </button>
            </article>
          </li>
        </ul>

        <button
          type="button"
          class="location-books__next"
          aria-label="Voir les livres suivants"
          @click="scrollNext"
        >
          <ChevronRight
            class="size-5"
            :stroke-width="2"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </section>
</template>

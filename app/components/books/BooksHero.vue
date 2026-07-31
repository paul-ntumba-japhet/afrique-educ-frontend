<script setup lang="ts">
import { booksHeroBackground } from '@/composables/useBooksMock'
import { BookOpen } from 'lucide-vue-next'

const { totalCount } = useBooksCatalog()
</script>

<template>
  <section
    class="books-hero"
    aria-labelledby="books-hero-heading"
  >
    <div
      class="books-hero__backdrop"
      :style="{ backgroundImage: `url(${booksHeroBackground})` }"
      aria-hidden="true"
    />

    <div class="page-container books-hero__inner">
      <div class="books-hero__content">
        <h1
          id="books-hero-heading"
          class="books-hero__title"
        >
          Tous les livres
        </h1>
        <p class="books-hero__subtitle">
          Explorez l'ensemble des ouvrages disponibles sur la plateforme.
        </p>
        <p class="books-hero__count">
          <BookOpen
            class="books-hero__count-icon"
            aria-hidden="true"
          />
          <span>{{ totalCount }} livres trouvés</span>
        </p>
      </div>
    </div>
  </section>
</template>

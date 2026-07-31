<script setup lang="ts">
const {
  paginatedBooks,
  viewMode,
  isLoading,
  hasError,
  totalCount,
  resetFilters,
  clearError,
} = useBooksCatalog()
</script>

<template>
  <div class="books-grid-wrap">
    <div
      v-if="isLoading"
      class="books-grid books-grid--loading"
      aria-busy="true"
      aria-label="Chargement des livres"
    >
      <div
        v-for="index in 8"
        :key="index"
        class="book-card-skeleton"
      />
    </div>

    <div
      v-else-if="hasError"
      class="books-empty"
    >
      <h3 class="books-empty__title">
        Une erreur est survenue
      </h3>
      <p class="books-empty__text">
        Impossible de charger le catalogue pour le moment.
      </p>
      <button
        type="button"
        class="books-empty__btn"
        @click="clearError()"
      >
        Réessayer
      </button>
    </div>

    <div
      v-else-if="!totalCount"
      class="books-empty"
    >
      <h3 class="books-empty__title">
        Aucun livre trouvé
      </h3>
      <p class="books-empty__text">
        Ajustez vos filtres ou lancez une nouvelle recherche.
      </p>
      <div class="books-empty__actions">
        <NuxtLink
          to="/categories"
          class="books-empty__btn books-empty__btn--outline"
        >
          Voir les catégories
        </NuxtLink>
        <NuxtLink
          to="/contact?objet=demande-livre"
          class="books-empty__btn"
        >
          Demander ce livre
        </NuxtLink>
      </div>
    </div>

    <div
      v-else
      class="books-grid books-animate-grid"
      :class="viewMode === 'list' ? 'books-grid--list' : 'books-grid--grid'"
    >
      <BookCard
        v-for="book in paginatedBooks"
        :key="book.id"
        :book="book"
        :layout="viewMode"
      />
    </div>
  </div>
</template>

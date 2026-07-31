<script setup lang="ts">
useHead({
  title: 'Tous les livres — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Explorez l\'ensemble des ouvrages disponibles sur Afric-Educ : romans, essais, scolaire, jeunesse et livres gratuits.',
    },
  ],
})

const { isDark } = useBooksTheme()
const { mobileFiltersOpen } = useBooksCatalog()
</script>

<template>
  <div
    class="books-page"
    :class="{ 'books-page--dark': isDark }"
  >
    <BooksHero />
    <BooksSearchBar />

    <div class="page-container books-page__layout">
      <BooksFilters variant="sidebar" />

      <div class="books-page__content">
        <button
          type="button"
          class="books-page__filters-mobile"
          @click="mobileFiltersOpen = true"
        >
          Filtres
        </button>

        <BooksToolbar />
        <BooksGrid />
        <BooksPagination />
      </div>
    </div>

    <BookRequestBanner />
    <PopularCollections />

    <div
      v-if="mobileFiltersOpen"
      class="books-page__drawer-backdrop"
      @click="mobileFiltersOpen = false"
    />
    <div
      class="books-page__drawer"
      :class="{ 'books-page__drawer--open': mobileFiltersOpen }"
    >
      <BooksFilters
        variant="drawer"
        @close="mobileFiltersOpen = false"
      />
    </div>
  </div>
</template>

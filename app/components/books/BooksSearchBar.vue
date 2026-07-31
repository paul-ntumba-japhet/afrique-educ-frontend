<script setup lang="ts">
import { quickFilterChips } from '@/composables/useBooksMock'
import { ChevronDown, Search } from 'lucide-vue-next'

const {
  searchQuery,
  activeQuickFilter,
  setSearch,
  setQuickFilter,
} = useBooksCatalog()

const localSearch = ref(searchQuery.value)

watch(searchQuery, (value) => {
  localSearch.value = value
})

function submitSearch() {
  setSearch(localSearch.value)
}

function isChipActive(chip: typeof quickFilterChips[number]) {
  if (chip.param === 'type')
    return activeQuickFilter.value === chip.value
  return activeQuickFilter.value === chip.value
}
</script>

<template>
  <section
    class="books-search-bar"
    aria-label="Recherche et filtres rapides"
  >
    <div class="page-container books-search-bar__inner">
      <form
        class="books-search-bar__form"
        role="search"
        @submit.prevent="submitSearch"
      >
        <label
          for="books-search-input"
          class="sr-only"
        >
          Rechercher un livre
        </label>
        <input
          id="books-search-input"
          v-model="localSearch"
          type="search"
          class="books-search-bar__input"
          placeholder="Rechercher un titre, un auteur, un ISBN..."
          autocomplete="off"
        >
        <button
          type="submit"
          class="books-search-bar__submit"
        >
          <Search
            class="size-4"
            aria-hidden="true"
          />
          Rechercher
        </button>
      </form>

      <div class="books-search-bar__chips">
        <button
          v-for="chip in quickFilterChips"
          :key="chip.label"
          type="button"
          class="books-search-bar__chip"
          :class="{ 'books-search-bar__chip--active': isChipActive(chip) }"
          @click="setQuickFilter(chip.param, chip.value)"
        >
          {{ chip.label }}
        </button>
        <button
          type="button"
          class="books-search-bar__chip books-search-bar__chip--more"
        >
          Plus
          <ChevronDown
            class="size-3.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </section>
</template>

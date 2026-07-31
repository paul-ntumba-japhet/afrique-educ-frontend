<script setup lang="ts">
import { sortOptions } from '@/composables/useBooksMock'
import type { SortValue } from '@/composables/useBooksMock'
import { Grid3x3, LayoutList } from 'lucide-vue-next'

const {
  totalCount,
  sortBy,
  viewMode,
  setSort,
  setViewMode,
} = useBooksCatalog()
</script>

<template>
  <div class="books-toolbar">
    <p class="books-toolbar__count">
      {{ totalCount }} livres trouvés
    </p>

    <div class="books-toolbar__actions">
      <label class="books-toolbar__sort">
        <span class="books-toolbar__sort-label">Trier par :</span>
        <select
          class="books-toolbar__sort-select"
          :value="sortBy"
          @change="setSort(($event.target as HTMLSelectElement).value as SortValue)"
        >
          <option
            v-for="option in sortOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </label>

      <div
        class="books-toolbar__views"
        role="group"
        aria-label="Mode d'affichage"
      >
        <button
          type="button"
          class="books-toolbar__view-btn"
          :class="{ 'books-toolbar__view-btn--active': viewMode === 'grid' }"
          aria-label="Vue grille"
          @click="setViewMode('grid')"
        >
          <Grid3x3
            class="size-4"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          class="books-toolbar__view-btn"
          :class="{ 'books-toolbar__view-btn--active': viewMode === 'list' }"
          aria-label="Vue liste"
          @click="setViewMode('list')"
        >
          <LayoutList
            class="size-4"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>

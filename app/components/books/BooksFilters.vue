<script setup lang="ts">
import {
  availabilityFilters,
  categoryFilters,
  formatFilters,
} from '@/composables/useBooksMock'
import { RotateCcw } from 'lucide-vue-next'

defineProps<{
  variant?: 'sidebar' | 'drawer'
}>()

const emit = defineEmits<{
  close: []
}>()

const {
  filters,
  toggleFilterGroup,
  setPriceMax,
  resetFilters,
  mobileFiltersOpen,
} = useBooksCatalog()

function isChecked(group: 'categories' | 'formats' | 'availability', value: string) {
  return filters.value[group].includes(value)
}

function handleReset() {
  resetFilters()
  emit('close')
}
</script>

<template>
  <aside
    class="books-filters"
    :class="variant === 'drawer' ? 'books-filters--drawer' : 'books-filters--sidebar'"
    aria-label="Filtres de recherche"
  >
    <div class="books-filters__header">
      <h2 class="books-filters__title">
        Filtres
      </h2>
      <button
        type="button"
        class="books-filters__reset"
        @click="handleReset"
      >
        <RotateCcw
          class="size-3.5"
          aria-hidden="true"
        />
        Réinitialiser
      </button>
    </div>

    <div class="books-filters__group">
      <h3 class="books-filters__group-title">
        Catégorie
      </h3>
      <ul class="books-filters__list">
        <li
          v-for="option in categoryFilters"
          :key="option.value"
        >
          <label class="books-filters__option">
            <input
              type="checkbox"
              class="books-filters__checkbox"
              :checked="isChecked('categories', option.value)"
              @change="toggleFilterGroup('categories', option.value)"
            >
            <span class="books-filters__option-label">{{ option.label }}</span>
            <span class="books-filters__option-count">({{ option.count }})</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="books-filters__group">
      <h3 class="books-filters__group-title">
        Format
      </h3>
      <ul class="books-filters__list">
        <li
          v-for="option in formatFilters"
          :key="option.value"
        >
          <label class="books-filters__option">
            <input
              type="checkbox"
              class="books-filters__checkbox"
              :checked="isChecked('formats', option.value)"
              @change="toggleFilterGroup('formats', option.value)"
            >
            <span class="books-filters__option-label">{{ option.label }}</span>
            <span class="books-filters__option-count">({{ option.count }})</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="books-filters__group">
      <h3 class="books-filters__group-title">
        Disponibilité
      </h3>
      <ul class="books-filters__list">
        <li
          v-for="option in availabilityFilters"
          :key="option.value"
        >
          <label class="books-filters__option">
            <input
              type="checkbox"
              class="books-filters__checkbox"
              :checked="isChecked('availability', option.value)"
              @change="toggleFilterGroup('availability', option.value)"
            >
            <span class="books-filters__option-label">{{ option.label }}</span>
            <span class="books-filters__option-count">({{ option.count }})</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="books-filters__group">
      <div class="books-filters__group-head">
        <h3 class="books-filters__group-title">
          Prix
        </h3>
        <span class="books-filters__price-value">0 $ – {{ filters.priceMax }} $</span>
      </div>
      <input
        type="range"
        class="books-filters__range"
        min="0"
        max="50"
        step="1"
        :value="filters.priceMax"
        aria-label="Prix maximum"
        @input="setPriceMax(Number(($event.target as HTMLInputElement).value))"
      >
    </div>

    <button
      v-if="variant === 'drawer'"
      type="button"
      class="books-filters__apply"
      @click="mobileFiltersOpen = false; emit('close')"
    >
      Appliquer les filtres
    </button>
  </aside>
</template>

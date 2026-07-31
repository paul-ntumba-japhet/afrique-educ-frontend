<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const { currentPage, totalPages, setPage, totalCount } = useBooksCatalog()

const visiblePages = computed(() => {
  const pages: number[] = []
  const max = Math.min(totalPages.value, 5)
  for (let i = 1; i <= max; i++)
    pages.push(i)
  return pages
})
</script>

<template>
  <nav
    v-if="totalCount > 0 && totalPages > 1"
    class="books-pagination"
    aria-label="Pagination du catalogue"
  >
    <button
      type="button"
      class="books-pagination__arrow"
      :disabled="currentPage <= 1"
      aria-label="Page précédente"
      @click="setPage(currentPage - 1)"
    >
      <ChevronLeft
        class="size-4"
        aria-hidden="true"
      />
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      type="button"
      class="books-pagination__page"
      :class="{ 'books-pagination__page--active': page === currentPage }"
      :aria-current="page === currentPage ? 'page' : undefined"
      @click="setPage(page)"
    >
      {{ page }}
    </button>

    <span
      v-if="totalPages > 5"
      class="books-pagination__ellipsis"
      aria-hidden="true"
    >
      …
    </span>

    <button
      type="button"
      class="books-pagination__arrow"
      :disabled="currentPage >= totalPages"
      aria-label="Page suivante"
      @click="setPage(currentPage + 1)"
    >
      <ChevronRight
        class="size-4"
        aria-hidden="true"
      />
    </button>
  </nav>
</template>

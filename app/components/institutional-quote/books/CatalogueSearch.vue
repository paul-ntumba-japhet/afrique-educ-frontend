<script setup lang="ts">
import { Check, ChevronLeft, ChevronRight, Filter, Plus, Search } from 'lucide-vue-next'
import {
  catalogueBooksMock,
  catalogueFilterOptions,
} from '@/data/institutional-quote'
import type { QuoteBookSelection, QuoteCatalogueBook } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteBookSelection
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteBookSelection]
}>()

const page = ref(1)
const pageSize = ref(5)

const filters = computed(() => props.modelValue.catalogueFilters)

const filteredBooks = computed(() => {
  const query = props.modelValue.catalogueQuery.trim().toLowerCase()
  return catalogueBooksMock.filter((book) => {
    const matchesQuery = !query
      || book.title.toLowerCase().includes(query)
      || book.author.toLowerCase().includes(query)
      || book.isbn.toLowerCase().includes(query)

    const matchesFilters = (Object.keys(filters.value) as Array<keyof typeof filters.value>)
      .every((key) => {
        const value = filters.value[key]
        return !value || book[key] === value
      })

    return matchesQuery && matchesFilters
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredBooks.value.length / pageSize.value)))

const pagedBooks = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return filteredBooks.value.slice(start, start + pageSize.value)
})

watch([() => props.modelValue.catalogueQuery, filters], () => {
  page.value = 1
})

function patch(partial: Partial<QuoteBookSelection>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function setFilter(key: keyof QuoteBookSelection['catalogueFilters'], value: string) {
  patch({
    catalogueFilters: {
      ...props.modelValue.catalogueFilters,
      [key]: value,
    },
  })
}

function isSelected(bookId: string) {
  return props.modelValue.selectedBooks.some(item => item.bookId === bookId)
}

function toggleBook(book: QuoteCatalogueBook) {
  const exists = props.modelValue.selectedBooks.find(item => item.bookId === book.id)
  const selectedBooks = exists
    ? props.modelValue.selectedBooks.filter(item => item.bookId !== book.id)
    : [...props.modelValue.selectedBooks, { bookId: book.id, quantity: 1 }]
  patch({ selectedBooks })
}

function availabilityLabel(value: QuoteCatalogueBook['availability']) {
  if (value === 'in_stock')
    return 'En stock'
  if (value === 'on_order')
    return 'Sur commande'
  return 'Stock limité'
}
</script>

<template>
  <section class="inst-quote-books-panel">
    <div class="inst-quote-books-search">
      <label class="inst-quote-books-search__field">
        <Search
          class="inst-quote-books-search__icon"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <input
          :value="modelValue.catalogueQuery"
          type="search"
          class="inst-quote-field__input inst-quote-field__input--icon"
          placeholder="Rechercher un livre, un auteur ou un ISBN"
          aria-label="Rechercher un livre"
          @input="patch({ catalogueQuery: ($event.target as HTMLInputElement).value })"
        >
      </label>
    </div>

    <div class="inst-quote-books-filters">
      <label
        v-for="(options, key) in catalogueFilterOptions"
        :key="key"
        class="inst-quote-field"
      >
        <span class="sr-only">{{ key }}</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="filters[key]"
            @change="setFilter(key, ($event.target as HTMLSelectElement).value)"
          >
            <option value="">
              {{
                key === 'subject' ? 'Matière'
                : key === 'category' ? 'Catégorie'
                  : key === 'level' ? 'Niveau scolaire'
                    : key === 'language' ? 'Langue'
                      : key === 'country' ? 'Pays'
                        : 'Format'
              }}
            </option>
            <option
              v-for="option in options"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <svg
            class="inst-quote-field__chevron"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </label>

      <button
        type="button"
        class="inst-quote-books-filters__more"
      >
        <Filter
          class="size-4"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        Plus de filtres
      </button>
    </div>

    <div class="inst-quote-books-results">
      <p class="inst-quote-books-results__count">
        <strong>{{ filteredBooks.length }}</strong> ouvrage{{ filteredBooks.length > 1 ? 's' : '' }} trouvé{{ filteredBooks.length > 1 ? 's' : '' }}
      </p>

      <div class="inst-quote-books-table-wrap">
        <table class="inst-quote-books-table">
          <thead>
            <tr>
              <th scope="col">
                <span class="sr-only">Sélection</span>
              </th>
              <th scope="col">Livre</th>
              <th scope="col">Auteur</th>
              <th scope="col">ISBN</th>
              <th scope="col">Format</th>
              <th scope="col">Prix indicatif</th>
              <th scope="col">Disponibilité</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="book in pagedBooks"
              :key="book.id"
            >
              <td>
                <button
                  type="button"
                  class="inst-quote-books-table__check"
                  :class="{ 'inst-quote-books-table__check--on': isSelected(book.id) }"
                  :aria-pressed="isSelected(book.id)"
                  :aria-label="`Sélectionner ${book.title}`"
                  @click="toggleBook(book)"
                >
                  <Check
                    v-if="isSelected(book.id)"
                    class="size-3.5"
                    :stroke-width="2.5"
                  />
                </button>
              </td>
              <td>
                <div class="inst-quote-books-table__book">
                  <span
                    class="inst-quote-books-table__cover"
                    :style="{ background: book.coverTone }"
                    aria-hidden="true"
                  />
                  <span>{{ book.title }}</span>
                </div>
              </td>
              <td>{{ book.author }}</td>
              <td>{{ book.isbn }}</td>
              <td>{{ book.format }}</td>
              <td>{{ book.priceLabel }}</td>
              <td>
                <span
                  class="inst-quote-books-table__stock"
                  :class="`inst-quote-books-table__stock--${book.availability}`"
                >
                  {{ availabilityLabel(book.availability) }}
                </span>
              </td>
              <td>
                <button
                  type="button"
                  class="inst-quote-btn inst-quote-btn--add"
                  @click="toggleBook(book)"
                >
                  <Plus
                    v-if="!isSelected(book.id)"
                    class="size-4"
                    :stroke-width="2"
                    aria-hidden="true"
                  />
                  {{ isSelected(book.id) ? 'Ajouté' : 'Ajouter' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="inst-quote-books-pagination">
        <label class="inst-quote-books-pagination__size">
          Par page
          <select
            v-model.number="pageSize"
            class="inst-quote-field__input inst-quote-field__select"
          >
            <option :value="5">
              5
            </option>
            <option :value="10">
              10
            </option>
          </select>
        </label>

        <div class="inst-quote-books-pagination__nav">
          <button
            type="button"
            class="inst-quote-books-pagination__btn"
            :disabled="page <= 1"
            aria-label="Page précédente"
            @click="page -= 1"
          >
            <ChevronLeft class="size-4" />
          </button>
          <span>{{ page }} / {{ totalPages }}</span>
          <button
            type="button"
            class="inst-quote-books-pagination__btn"
            :disabled="page >= totalPages"
            aria-label="Page suivante"
            @click="page += 1"
          >
            <ChevronRight class="size-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

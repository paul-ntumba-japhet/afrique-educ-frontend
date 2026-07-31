<script setup lang="ts">
import { ChevronDown, Search } from 'lucide-vue-next'
import type { AuthorsQuickFilterId } from '@/data/authors-page'
import {
  authorsQuickFilters,
  authorsSearchCountries,
  authorsSearchGenres,
  authorsSearchIndependence,
  authorsSearchLanguages,
  authorsSearchPublishers,
  authorsSearchSortOptions,
} from '@/data/authors-page'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(String(route.query.q ?? ''))
const country = ref(String(route.query.pays ?? ''))
const language = ref(String(route.query.langue ?? ''))
const genre = ref(String(route.query.genre ?? ''))
const publisher = ref(String(route.query.maison ?? ''))
const independence = ref(String(route.query.independant ?? ''))
const sortBy = ref(String(route.query.tri ?? 'popularite'))

const activeQuickFilters = ref<AuthorsQuickFilterId[]>(
  String(route.query.tags ?? '')
    .split(',')
    .filter((tag): tag is AuthorsQuickFilterId =>
      ['verified', 'popular', 'new'].includes(tag),
    ),
)

function toggleQuickFilter(id: AuthorsQuickFilterId) {
  if (activeQuickFilters.value.includes(id)) {
    activeQuickFilters.value = activeQuickFilters.value.filter(item => item !== id)
  }
  else {
    activeQuickFilters.value = [...activeQuickFilters.value, id]
  }
  syncQuery()
}

function syncQuery() {
  const query: Record<string, string> = {}

  if (searchQuery.value.trim())
    query.q = searchQuery.value.trim()
  if (country.value)
    query.pays = country.value
  if (language.value)
    query.langue = language.value
  if (genre.value)
    query.genre = genre.value
  if (publisher.value)
    query.maison = publisher.value
  if (independence.value)
    query.independant = independence.value
  if (sortBy.value && sortBy.value !== 'popularite')
    query.tri = sortBy.value
  if (activeQuickFilters.value.length)
    query.tags = activeQuickFilters.value.join(',')

  const nextKeys = Object.keys(query)
  const currentKeys = Object.keys(route.query)
  const unchanged = nextKeys.length === currentKeys.length
    && nextKeys.every(key => String(route.query[key] ?? '') === query[key])

  if (!unchanged)
    router.replace({ query })
}

function onSubmit() {
  syncQuery()
  document.getElementById('auteurs-contenu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section
    class="authors-search"
    aria-label="Rechercher et filtrer les auteurs"
  >
    <div class="page-container">
      <form
        class="authors-search__card"
        @submit.prevent="onSubmit"
      >
        <div class="authors-search__grid">
        <!-- Ligne 1 -->
        <label class="authors-search__cell authors-search__cell--query">
          <span class="sr-only">Rechercher un auteur</span>
          <input
            v-model="searchQuery"
            type="search"
            class="authors-search__input"
            placeholder="Rechercher un auteur..."
            autocomplete="off"
            @change="syncQuery"
          >
          <button
            type="submit"
            class="authors-search__query-btn"
            aria-label="Lancer la recherche"
          >
            <Search
              class="size-4"
              aria-hidden="true"
            />
          </button>
        </label>

        <label class="authors-search__cell">
          <span class="sr-only">Pays</span>
          <select
            v-model="country"
            class="authors-search__select"
            @change="syncQuery"
          >
            <option
              v-for="option in authorsSearchCountries"
              :key="`country-${option.value || 'all'}`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="authors-search__chevron"
            aria-hidden="true"
          />
        </label>

        <label class="authors-search__cell">
          <span class="sr-only">Langue</span>
          <select
            v-model="language"
            class="authors-search__select"
            @change="syncQuery"
          >
            <option
              v-for="option in authorsSearchLanguages"
              :key="`lang-${option.value || 'all'}`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="authors-search__chevron"
            aria-hidden="true"
          />
        </label>

        <label class="authors-search__cell">
          <span class="sr-only">Genre littéraire</span>
          <select
            v-model="genre"
            class="authors-search__select"
            @change="syncQuery"
          >
            <option
              v-for="option in authorsSearchGenres"
              :key="`genre-${option.value || 'all'}`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="authors-search__chevron"
            aria-hidden="true"
          />
        </label>

        <!-- Ligne 2 -->
        <label class="authors-search__cell">
          <span class="sr-only">Maison d'édition</span>
          <select
            v-model="publisher"
            class="authors-search__select"
            @change="syncQuery"
          >
            <option
              v-for="option in authorsSearchPublishers"
              :key="`pub-${option.value || 'all'}`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="authors-search__chevron"
            aria-hidden="true"
          />
        </label>

        <label class="authors-search__cell">
          <span class="sr-only">Indépendant</span>
          <select
            v-model="independence"
            class="authors-search__select"
            @change="syncQuery"
          >
            <option
              v-for="option in authorsSearchIndependence"
              :key="`ind-${option.value || 'all'}`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="authors-search__chevron"
            aria-hidden="true"
          />
        </label>

        <button
          v-for="filter in authorsQuickFilters"
          :key="filter.id"
          type="button"
          class="authors-search__cell authors-search__chip"
          :class="{
            'authors-search__chip--active': activeQuickFilters.includes(filter.id),
            [`authors-search__chip--${filter.id}`]: true,
          }"
          @click="toggleQuickFilter(filter.id)"
        >
          <span
            v-if="filter.id === 'new'"
            class="authors-search__chip-badge"
            aria-hidden="true"
          >N</span>
          <component
            :is="filter.icon"
            v-else
            class="authors-search__chip-icon"
            aria-hidden="true"
          />
          <span>{{ filter.label }}</span>
          <ChevronDown
            v-if="filter.id === 'popular'"
            class="authors-search__chevron authors-search__chevron--inline"
            aria-hidden="true"
          />
        </button>

        <label class="authors-search__cell authors-search__cell--sort">
          <span class="authors-search__sort-label">Trier par :</span>
          <select
            v-model="sortBy"
            class="authors-search__sort-select"
            @change="syncQuery"
          >
            <option
              v-for="option in authorsSearchSortOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="authors-search__chevron"
            aria-hidden="true"
          />
        </label>
        </div>
      </form>
    </div>
  </section>
</template>

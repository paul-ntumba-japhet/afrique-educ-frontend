<script setup lang="ts">
import { ChevronDown, Search } from 'lucide-vue-next'
import {
  institutionalAdvancedFilters,
  institutionalDiscountTiers,
  institutionalSearchCategories,
  institutionalSearchHighlights,
} from '@/data/institutional-orders'

const query = ref('')
const activeCategory = ref('primary')
</script>

<template>
  <section
    id="devis"
    class="inst-orders-search-row"
    aria-label="Recherche de livres et tarifs dégressifs"
  >
    <div class="page-container inst-orders-search-row__inner">
      <article
        class="inst-orders-search"
        aria-labelledby="inst-orders-search-heading"
      >
        <header class="inst-orders-card-head">
          <h2
            id="inst-orders-search-heading"
            class="inst-orders-card-head__title"
          >
            Recherche de livres
          </h2>
          <p class="inst-orders-card-head__lead">
            Trouvez rapidement les ouvrages adaptés à vos programmes.
          </p>
        </header>

        <form
          class="inst-orders-search__bar"
          @submit.prevent
        >
          <div class="inst-orders-search__field">
            <label
              class="sr-only"
              for="inst-orders-search-input"
            >Rechercher un livre</label>
            <input
              id="inst-orders-search-input"
              v-model="query"
              type="search"
              class="inst-orders-search__input"
              placeholder="Titre, auteur, ISBN, éditeur…"
              autocomplete="off"
            >
            <button
              type="submit"
              class="inst-orders-search__submit"
              aria-label="Lancer la recherche"
            >
              <Search
                class="size-4"
                :stroke-width="1.75"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>

        <div
          class="inst-orders-search__categories"
          role="group"
          aria-label="Niveaux scolaires"
        >
          <button
            v-for="category in institutionalSearchCategories"
            :key="category.id"
            type="button"
            class="inst-orders-search__category"
            :class="{ 'inst-orders-search__category--active': activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.label }}
          </button>
        </div>

        <div class="inst-orders-search__filters-block">
          <h3 class="inst-orders-search__filters-heading">
            Filtres avancés
          </h3>
          <div class="inst-orders-search__filters">
            <label
              v-for="filter in institutionalAdvancedFilters"
              :key="filter.id"
              class="inst-orders-search__filter"
            >
              <component
                :is="filter.icon"
                class="inst-orders-search__filter-icon"
                :stroke-width="1.5"
                aria-hidden="true"
              />
              <span class="inst-orders-search__filter-copy">
                <span class="inst-orders-search__filter-label">{{ filter.label }}</span>
                <select
                  class="inst-orders-search__select"
                  :aria-label="filter.label"
                >
                  <option
                    v-for="option in filter.options"
                    :key="`${filter.id}-${option}`"
                    :value="option"
                    :selected="option === filter.defaultValue"
                  >
                    {{ option }}
                  </option>
                </select>
              </span>
              <ChevronDown
                class="inst-orders-search__chevron"
                :stroke-width="1.5"
                aria-hidden="true"
              />
            </label>
          </div>
        </div>

        <ul class="inst-orders-search__highlights">
          <li
            v-for="item in institutionalSearchHighlights"
            :key="item.id"
          >
            <component
              :is="item.icon"
              class="inst-orders-search__highlight-icon"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </article>

      <article
        class="inst-orders-tiers"
        aria-labelledby="inst-orders-tiers-heading"
      >
        <header class="inst-orders-card-head">
          <h2
            id="inst-orders-tiers-heading"
            class="inst-orders-card-head__title"
          >
            Tarifs dégressifs
          </h2>
          <p class="inst-orders-card-head__lead">
            Plus vous commandez, plus vous économisez.
          </p>
        </header>

        <ul class="inst-orders-tiers__list">
          <li
            v-for="tier in institutionalDiscountTiers"
            :key="tier.qty"
            class="inst-orders-tiers__row"
          >
            <span class="inst-orders-tiers__qty">{{ tier.qty }}</span>
            <span class="inst-orders-tiers__discount">{{ tier.discount }}</span>
            <span class="inst-orders-tiers__segment">{{ tier.segment }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

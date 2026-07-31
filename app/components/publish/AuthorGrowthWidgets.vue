<script setup lang="ts">
import type { AuthorRankingTabId } from '@/data/publish-page'
import { publishGrowthWidgetsSection } from '@/data/publish-page'
import africaMapImage from '~/assets/images/publier/carte-afrique.webp'
import schoolsImage from '~/assets/images/publier/programme-ecoles-universites.webp'
import libraryImage from '~/assets/images/publier/open-book.webp'
import marcAvatar from '~/assets/images/publier/marc.webp'
import alissatouAvatar from '~/assets/images/publier/alissatou.webp'
import jeanineAvatar from '~/assets/images/publier/jeanine.webp'

const section = publishGrowthWidgetsSection

const bookPrice = ref(section.calculator.defaultPrice)
const salesCount = ref(section.calculator.defaultSales)
const activeRankingTab = ref<AuthorRankingTabId>('sales')

const avatarMap: Record<string, string> = {
  'marc.webp': marcAvatar,
  'alissatou.webp': alissatouAvatar,
  'jeanine.webp': jeanineAvatar,
}

const estimatedRevenue = computed(() => {
  const total = bookPrice.value * salesCount.value * section.calculator.royaltyRate
  return `${section.calculator.currency}${total.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
})

const activeRankingList = computed(() => section.ranking.lists[activeRankingTab.value])

function getAvatar(filename: string) {
  return avatarMap[filename] ?? marcAvatar
}
</script>

<template>
  <section
    class="publish-growth-widgets publish-section"
    aria-label="Outils et ressources pour auteurs"
  >
    <div class="page-container publish-growth-widgets__inner">
      <ul class="publish-growth-widgets__grid">
        <li class="publish-growth-widgets__item">
          <article
            class="publish-growth-widget publish-growth-widget--calculator"
            aria-labelledby="publish-widget-calculator-heading"
          >
            <h3
              id="publish-widget-calculator-heading"
              class="publish-growth-widget__title"
            >
              {{ section.calculator.title }}
            </h3>

            <div class="publish-growth-widget__fields">
              <label class="publish-growth-widget__field">
                <span class="publish-growth-widget__field-label">
                  {{ section.calculator.priceLabel }}
                </span>
                <input
                  v-model.number="bookPrice"
                  type="number"
                  min="0"
                  step="1"
                  class="publish-growth-widget__input"
                >
              </label>

              <label class="publish-growth-widget__field">
                <span class="publish-growth-widget__field-label">
                  {{ section.calculator.salesLabel }}
                </span>
                <input
                  v-model.number="salesCount"
                  type="number"
                  min="0"
                  step="1"
                  class="publish-growth-widget__input"
                >
              </label>
            </div>

            <div class="publish-growth-widget__result-block">
              <p class="publish-growth-widget__result-label">
                {{ section.calculator.resultLabel }}
              </p>
              <p class="publish-growth-widget__result">
                {{ estimatedRevenue }}
              </p>
            </div>

            <p class="publish-growth-widget__footnote">
              {{ section.calculator.footnote }}
            </p>
          </article>
        </li>

        <li class="publish-growth-widgets__item">
          <article
            class="publish-growth-widget publish-growth-widget--map"
            aria-labelledby="publish-widget-map-heading"
          >
            <h3
              id="publish-widget-map-heading"
              class="publish-growth-widget__title"
            >
              {{ section.africaMap.title }}
            </h3>

            <div class="publish-growth-widget__map-layout">
              <img
                :src="africaMapImage"
                :alt="section.africaMap.imageAlt"
                class="publish-growth-widget__map-image"
                width="120"
                height="120"
                loading="lazy"
                decoding="async"
              >

              <ul class="publish-growth-widget__countries">
                <li
                  v-for="country in section.africaMap.countries"
                  :key="country.name"
                  class="publish-growth-widget__country"
                >
                  <span class="publish-growth-widget__country-name">{{ country.name }}</span>
                  <span class="publish-growth-widget__country-value">{{ country.readers }}</span>
                </li>
              </ul>
            </div>

            <NuxtLink
              :to="section.africaMap.cta.href"
              class="publish-growth-widget__link"
            >
              {{ section.africaMap.cta.label }}
            </NuxtLink>
          </article>
        </li>

        <li class="publish-growth-widgets__item">
          <article
            class="publish-growth-widget publish-growth-widget--ranking"
            aria-labelledby="publish-widget-ranking-heading"
          >
            <h3
              id="publish-widget-ranking-heading"
              class="publish-growth-widget__title"
            >
              {{ section.ranking.title }}
            </h3>

            <div
              class="publish-growth-widget__tabs"
              role="tablist"
              aria-label="Filtres du classement"
            >
              <button
                v-for="tab in section.ranking.tabs"
                :key="tab.id"
                type="button"
                role="tab"
                class="publish-growth-widget__tab"
                :class="{ 'publish-growth-widget__tab--active': activeRankingTab === tab.id }"
                :aria-selected="activeRankingTab === tab.id"
                @click="activeRankingTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>

            <ol class="publish-growth-widget__ranking">
              <li
                v-for="author in activeRankingList"
                :key="`${activeRankingTab}-${author.rank}`"
                class="publish-growth-widget__ranking-item"
              >
                <img
                  :src="getAvatar(author.avatar)"
                  :alt="author.name"
                  class="publish-growth-widget__ranking-avatar"
                  width="28"
                  height="28"
                  loading="lazy"
                  decoding="async"
                >

                <div class="publish-growth-widget__ranking-copy">
                  <span class="publish-growth-widget__ranking-name">{{ author.name }}</span>
                  <span class="publish-growth-widget__ranking-metric">{{ author.metric }}</span>
                </div>
              </li>
            </ol>

            <NuxtLink
              :to="section.ranking.cta.href"
              class="publish-growth-widget__link"
            >
              {{ section.ranking.cta.label }}
            </NuxtLink>
          </article>
        </li>

        <li class="publish-growth-widgets__item">
          <article
            class="publish-growth-widget publish-growth-widget--schools"
            aria-labelledby="publish-widget-schools-heading"
          >
            <h3
              id="publish-widget-schools-heading"
              class="publish-growth-widget__title"
            >
              {{ section.schools.title }}
            </h3>

            <div class="publish-growth-widget__split">
              <div class="publish-growth-widget__split-copy">
                <p class="publish-growth-widget__description">
                  {{ section.schools.description }}
                </p>

                <NuxtLink
                  :to="section.schools.cta.href"
                  class="publish-growth-widget__link"
                >
                  {{ section.schools.cta.label }}
                </NuxtLink>
              </div>

              <img
                :src="schoolsImage"
                :alt="section.schools.imageAlt"
                class="publish-growth-widget__thumb-image"
                width="96"
                height="72"
                loading="lazy"
                decoding="async"
              >
            </div>
          </article>
        </li>

        <li class="publish-growth-widgets__item">
          <article
            class="publish-growth-widget publish-growth-widget--library"
            aria-labelledby="publish-widget-library-heading"
          >
            <h3
              id="publish-widget-library-heading"
              class="publish-growth-widget__title"
            >
              {{ section.library.title }}
            </h3>

            <p class="publish-growth-widget__description">
              {{ section.library.description }}
            </p>

            <div class="publish-growth-widget__library-visual">
              <img
                :src="libraryImage"
                :alt="section.library.imageAlt"
                class="publish-growth-widget__library-image"
                width="120"
                height="80"
                loading="lazy"
                decoding="async"
              >
            </div>

            <NuxtLink
              :to="section.library.cta.href"
              class="publish-growth-widget__link"
            >
              {{ section.library.cta.label }}
            </NuxtLink>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

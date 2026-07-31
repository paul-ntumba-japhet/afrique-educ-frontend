<script setup lang="ts">
import africaMapImage from '~/assets/images/auteurs/afrique.png'
import { authorsTopCountries } from '@/data/authors-page'

const activeCountry = computed(() =>
  authorsTopCountries.find(country => country.active) ?? authorsTopCountries[0]!,
)

/** Images de drapeaux (les emoji Windows s’affichent souvent en codes pays) */
function flagSrc(code: string) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`
}
</script>

<template>
  <article
    class="authors-countries-panel"
    aria-labelledby="authors-countries-heading"
  >
    <h2
      id="authors-countries-heading"
      class="authors-countries-panel__title"
    >
      Explorer par pays
    </h2>

    <div class="authors-countries-panel__body">
      <div class="authors-countries-panel__map-wrap">
        <img
          :src="africaMapImage"
          alt="Carte du continent africain"
          class="authors-countries-panel__map"
          width="480"
          height="520"
          loading="lazy"
        >

        <div
          class="authors-countries-panel__tooltip"
          role="status"
        >
          <img
            :src="flagSrc(activeCountry.id)"
            :alt="`Drapeau ${activeCountry.name}`"
            class="authors-countries-panel__tooltip-flag"
            width="20"
            height="15"
            loading="lazy"
          >
          <div class="authors-countries-panel__tooltip-text">
            <p class="authors-countries-panel__tooltip-name">
              {{ activeCountry.name }}
            </p>
            <p class="authors-countries-panel__tooltip-count">
              {{ activeCountry.authorsCount }} auteurs
            </p>
          </div>
        </div>
      </div>

      <div class="authors-countries-panel__list-wrap">
        <h3 class="authors-countries-panel__list-title">
          Top pays
        </h3>

        <ul class="authors-countries-panel__list">
          <li
            v-for="country in authorsTopCountries"
            :key="country.id"
            class="authors-countries-panel__list-item"
            :class="{ 'authors-countries-panel__list-item--active': country.active }"
          >
            <img
              :src="flagSrc(country.id)"
              :alt="`Drapeau ${country.name}`"
              class="authors-countries-panel__list-flag"
              width="20"
              height="15"
              loading="lazy"
            >
            <span class="authors-countries-panel__list-name">{{ country.name }}</span>
            <span class="authors-countries-panel__list-count">{{ country.authorsCount }}</span>
          </li>
        </ul>
      </div>
    </div>

    <NuxtLink
      to="/auteurs?vue=pays"
      class="authors-countries-panel__footer-link"
    >
      Voir tous les pays →
    </NuxtLink>
  </article>
</template>

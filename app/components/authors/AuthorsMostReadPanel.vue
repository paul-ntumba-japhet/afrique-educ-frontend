<script setup lang="ts">
import { BookOpen, Eye, TrendingDown, TrendingUp } from 'lucide-vue-next'
import { authorsMostReadList } from '@/data/authors-page'

function formatVariation(value: number) {
  if (value > 0)
    return `+${value}`
  return String(value)
}
</script>

<template>
  <article
    class="authors-ranking-panel"
    aria-labelledby="authors-most-read-heading"
  >
    <h2
      id="authors-most-read-heading"
      class="authors-ranking-panel__title"
    >
      Les auteurs les plus lus
    </h2>

    <div
      class="authors-ranking-panel__table"
      role="table"
      aria-label="Classement des auteurs les plus lus"
    >
      <div
        class="authors-ranking-panel__head"
        role="row"
      >
        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--rank"
          role="columnheader"
        >#</span>
        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--author"
          role="columnheader"
        >Auteur</span>
        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--variation"
          role="columnheader"
        >Variation</span>
        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--reads"
          role="columnheader"
        >Lectures</span>
        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--books"
          role="columnheader"
        >Livres</span>
      </div>

      <div
        v-for="item in authorsMostReadList"
        :key="item.rank"
        class="authors-ranking-panel__row"
        role="row"
      >
        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--rank"
          role="cell"
        >{{ item.rank }}</span>

        <div
          class="authors-ranking-panel__col authors-ranking-panel__col--author"
          role="cell"
        >
          <NuxtLink
            :to="`/auteurs/${item.slug}`"
            class="authors-ranking-panel__author-link"
          >
            <img
              :src="item.avatar"
              alt=""
              class="authors-ranking-panel__avatar"
              width="36"
              height="36"
              loading="lazy"
            >
            <span>{{ item.name }}</span>
          </NuxtLink>
        </div>

        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--variation"
          role="cell"
          :class="{
            'authors-ranking-panel__variation--up': item.variation > 0,
            'authors-ranking-panel__variation--down': item.variation < 0,
            'authors-ranking-panel__variation--flat': item.variation === 0,
          }"
        >
          <template v-if="item.variation > 0">
            <TrendingUp
              class="authors-ranking-panel__trend-icon"
              aria-hidden="true"
            />
            {{ formatVariation(item.variation) }}
          </template>
          <template v-else-if="item.variation < 0">
            <TrendingDown
              class="authors-ranking-panel__trend-icon"
              aria-hidden="true"
            />
            {{ formatVariation(item.variation) }}
          </template>
          <template v-else>
            —
          </template>
        </span>

        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--reads"
          role="cell"
        >
          {{ item.reads }}
          <Eye
            class="authors-ranking-panel__metric-icon"
            aria-hidden="true"
          />
        </span>

        <span
          class="authors-ranking-panel__col authors-ranking-panel__col--books"
          role="cell"
        >
          {{ item.books }}
          <BookOpen
            class="authors-ranking-panel__metric-icon"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>

    <NuxtLink
      to="/auteurs?tri=lectures"
      class="authors-ranking-panel__footer-link"
    >
      Voir le classement complet →
    </NuxtLink>
  </article>
</template>

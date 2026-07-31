<script setup lang="ts">
import { BookOpen, Plus, Star, Tag } from 'lucide-vue-next'
import couronneLaurier from '~/assets/images/couronne_laurier.svg'

const props = defineProps<{
  title: string
  author: string
  cover: string
  href: string
  statusBadge?: string
  statusBadgeVariant?: 'hot' | 'new' | 'top'
  rankBadge?: string
  category: string
  pages: number
  rating: number
}>()

const rankLines = computed(() => {
  if (!props.rankBadge)
    return null

  const badge = props.rankBadge.trim()

  if (badge.includes('TENDANCE')) {
    const [first, ...rest] = badge.split(' ')
    return { line1: first, line2: rest.join(' ') }
  }

  if (badge.startsWith('TOP '))
    return { line1: 'TOP', line2: badge.replace('TOP ', '') }

  const parts = badge.split(' ')
  if (parts.length >= 2)
    return { line1: parts[0], line2: parts.slice(1).join(' ') }

  return { line1: badge, line2: undefined }
})
</script>

<template>
  <article class="discovery-trend-card">
    <div class="discovery-trend-card__media">
      <img
        :src="cover"
        :alt="title"
        class="discovery-trend-card__image"
        loading="lazy"
        decoding="async"
      >

      <span
        v-if="statusBadge"
        class="discovery-trend-card__status"
        :class="`discovery-trend-card__status--${statusBadgeVariant ?? 'top'}`"
      >
        {{ statusBadge }}
      </span>

      <div
        class="discovery-trend-card__rank"
        aria-hidden="true"
      >
        <img
          :src="couronneLaurier"
          alt=""
          class="discovery-trend-card__rank-wreath"
        >
        <div
          v-if="rankLines"
          class="discovery-trend-card__rank-text"
        >
          <span class="discovery-trend-card__rank-line discovery-trend-card__rank-line--primary">
            {{ rankLines.line1 }}
          </span>
          <span
            v-if="rankLines.line2"
            class="discovery-trend-card__rank-line discovery-trend-card__rank-line--secondary"
          >
            {{ rankLines.line2 }}
          </span>
        </div>
      </div>
    </div>

    <div class="discovery-trend-card__footer">
      <NuxtLink
        :to="href"
        class="discovery-trend-card__details"
      >
        <h3 class="discovery-trend-card__title">
          {{ title }}
        </h3>
        <p class="discovery-trend-card__author">
          {{ author }}
        </p>

        <div class="discovery-trend-card__meta">
          <span class="discovery-trend-card__meta-item">
            <Tag
              class="discovery-trend-card__meta-icon"
              aria-hidden="true"
            />
            {{ category }}
          </span>
          <span class="discovery-trend-card__meta-item">
            <BookOpen
              class="discovery-trend-card__meta-icon"
              aria-hidden="true"
            />
            {{ pages }} pages
          </span>
          <span class="discovery-trend-card__meta-item discovery-trend-card__meta-item--rating">
            <Star
              class="discovery-trend-card__meta-icon discovery-trend-card__meta-icon--star"
              aria-hidden="true"
            />
            {{ rating.toFixed(1) }}
          </span>
        </div>
      </NuxtLink>

      <button
        type="button"
        class="discovery-trend-card__add"
        aria-label="Ajouter à ma liste"
      >
        <Plus
          class="size-4"
          aria-hidden="true"
        />
      </button>
    </div>
  </article>
</template>

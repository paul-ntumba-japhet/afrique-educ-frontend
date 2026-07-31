<script setup lang="ts">
import type { BookDetailBibliography } from '@/data/book-detail-page'
import {
  Barcode,
  BookOpen,
  Building2,
  Calendar,
  Files,
  Globe,
  Library,
  User,
} from 'lucide-vue-next'

defineProps<{
  bibliography: BookDetailBibliography
}>()

const iconMap = {
  user: User,
  building: Building2,
  library: Library,
  globe: Globe,
  barcode: Barcode,
  calendar: Calendar,
  files: Files,
  book: BookOpen,
} as const
</script>

<template>
  <article
    class="book-detail-info-card book-detail-info-card--metadata"
    aria-labelledby="book-metadata-heading"
  >
    <h2
      id="book-metadata-heading"
      class="book-detail-info-card__title"
    >
      {{ bibliography.sectionTitle }}
    </h2>

    <dl class="book-detail-info-card__metadata">
      <div
        v-for="item in bibliography.items"
        :key="item.id"
        class="book-detail-info-card__metadata-row"
      >
        <dt class="book-detail-info-card__metadata-term">
          <component
            :is="iconMap[item.icon]"
            class="book-detail-info-card__metadata-icon"
            aria-hidden="true"
          />
          <span>{{ item.label }}</span>
        </dt>
        <dd class="book-detail-info-card__metadata-value">
          {{ item.value }}
        </dd>
      </div>
    </dl>
  </article>
</template>

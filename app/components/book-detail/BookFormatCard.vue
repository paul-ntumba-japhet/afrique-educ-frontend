<script setup lang="ts">
import type { BookDetailFormat } from '@/data/book-detail-page'
import iconEpub from '~/assets/images/details-livre/epub-svgrepo-com.svg'
import iconPdf from '~/assets/images/details-livre/pdf-file-svgrepo-com.svg'

const props = defineProps<{
  format: BookDetailFormat
}>()

const formatIcons: Partial<Record<BookDetailFormat['id'], string>> = {
  epub: iconEpub,
  pdf: iconPdf,
}

const iconSrc = computed(() => formatIcons[props.format.id] ?? props.format.icon)
</script>

<template>
  <article
    class="book-format-card"
    :class="`book-format-card--${format.id}`"
  >
    <div class="book-format-card__icon-wrap">
      <img
        :src="iconSrc"
        :alt="''"
        class="book-format-card__icon"
        aria-hidden="true"
      >
    </div>
    <div class="book-format-card__content">
      <h3 class="book-format-card__title">
        {{ format.title }}
      </h3>
      <p class="book-format-card__description">
        {{ format.description }}
      </p>
    </div>
  </article>
</template>

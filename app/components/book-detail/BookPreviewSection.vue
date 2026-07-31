<script setup lang="ts">
import type { BookDetailPreview } from '@/data/book-detail-page'
import { BookOpen } from 'lucide-vue-next'

const props = defineProps<{
  preview: BookDetailPreview
}>()

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}
</script>

<template>
  <section
    class="book-preview-section book-detail-scroll-reveal"
    aria-labelledby="book-preview-heading"
  >
    <h2
      id="book-preview-heading"
      class="book-preview-section__title"
    >
      {{ preview.sectionTitle }}
    </h2>

    <div class="book-preview-section__layout">
      <BookPreviewCarousel
        :pages="preview.pages"
        @open-page="openLightbox"
      />

      <aside class="book-preview-promo">
        <img
          :src="preview.promo.icon"
          alt=""
          class="book-preview-promo__icon"
          aria-hidden="true"
        >
        <h3 class="book-preview-promo__title">
          {{ preview.promo.title }}
        </h3>
        <p class="book-preview-promo__text">
          {{ preview.promo.description }}
        </p>
        <button
          type="button"
          class="book-preview-promo__cta"
        >
          <BookOpen
            class="size-4"
            aria-hidden="true"
          />
          {{ preview.promo.ctaLabel }}
        </button>
      </aside>
    </div>

    <BookPreviewLightbox
      v-if="lightboxOpen"
      :pages="preview.pages"
      :start-index="lightboxIndex"
      @close="closeLightbox"
    />
  </section>
</template>

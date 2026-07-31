<script setup lang="ts">
import type { BookDetailRelatedBook } from '@/data/book-detail-page'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps<{
  books: BookDetailRelatedBook[]
}>()

const viewportRef = ref<HTMLElement | null>(null)
const canGoPrev = ref(false)
const canGoNext = ref(false)

function getScrollStep() {
  const viewport = viewportRef.value
  if (!viewport)
    return 0

  const slide = viewport.querySelector<HTMLElement>('.book-related-carousel__slide')
  if (!slide)
    return viewport.clientWidth

  const gap = Number.parseFloat(
    getComputedStyle(viewport).getPropertyValue('--related-gap'),
  ) || 20

  return slide.offsetWidth + gap
}

function updateArrowState() {
  const viewport = viewportRef.value
  if (!viewport) {
    canGoPrev.value = false
    canGoNext.value = false
    return
  }

  const maxScroll = viewport.scrollWidth - viewport.clientWidth
  canGoPrev.value = viewport.scrollLeft > 4
  canGoNext.value = viewport.scrollLeft < maxScroll - 4
}

function scrollByStep(direction: -1 | 1) {
  const viewport = viewportRef.value
  if (!viewport)
    return

  viewport.scrollBy({
    left: direction * getScrollStep(),
    behavior: 'auto',
  })
}

function goPrev() {
  scrollByStep(-1)
}

function goNext() {
  scrollByStep(1)
}

let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  await nextTick()

  const viewport = viewportRef.value
  if (!viewport)
    return

  viewport.addEventListener('scroll', updateArrowState, { passive: true })
  updateArrowState()

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      updateArrowState()
    })
    resizeObserver.observe(viewport)
  }

  window.addEventListener('resize', updateArrowState, { passive: true })
})

onUnmounted(() => {
  viewportRef.value?.removeEventListener('scroll', updateArrowState)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', updateArrowState)
})
</script>

<template>
  <div class="book-related-carousel">
    <div
      ref="viewportRef"
      class="book-related-carousel__viewport"
    >
      <div class="book-related-carousel__track">
        <BookRelatedBookCard
          v-for="book in books"
          :key="book.slug"
          :book="book"
          class="book-related-carousel__slide"
        />
      </div>
    </div>

    <button
      type="button"
      class="book-related-carousel__arrow book-related-carousel__arrow--prev"
      :disabled="!canGoPrev"
      aria-label="Livres précédents"
      @click="goPrev"
    >
      <ChevronLeft
        class="size-5"
        aria-hidden="true"
      />
    </button>

    <button
      type="button"
      class="book-related-carousel__arrow book-related-carousel__arrow--next"
      :disabled="!canGoNext"
      aria-label="Livres suivants"
      @click="goNext"
    >
      <ChevronRight
        class="size-5"
        aria-hidden="true"
      />
    </button>
  </div>
</template>

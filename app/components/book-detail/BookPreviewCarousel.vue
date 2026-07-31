<script setup lang="ts">
import type { BookPreviewPage } from '@/data/book-detail-page'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  pages: BookPreviewPage[]
}>()

const emit = defineEmits<{
  openPage: [index: number]
}>()

const CARD_GAP = 18
const pagesPerView = ref(3)

const currentIndex = ref(0)
const viewportRef = ref<HTMLElement | null>(null)
const viewportWidth = ref(0)

function updatePagesPerView() {
  if (typeof window === 'undefined')
    return

  if (window.innerWidth < 640)
    pagesPerView.value = 1
  else if (window.innerWidth < 1024)
    pagesPerView.value = 2
  else
    pagesPerView.value = 3
}

const slideWidth = computed(() => {
  if (!viewportWidth.value)
    return 0

  return (viewportWidth.value - CARD_GAP * (pagesPerView.value - 1)) / pagesPerView.value
})

const maxIndex = computed(() =>
  Math.max(0, props.pages.length - pagesPerView.value),
)

const trackOffset = computed(() => {
  if (!slideWidth.value)
    return 0

  return currentIndex.value * (slideWidth.value + CARD_GAP)
})

const viewportStyle = computed(() => ({
  '--preview-gap': `${CARD_GAP}px`,
  '--preview-slide-width': slideWidth.value ? `${slideWidth.value}px` : undefined,
}))

const trackStyle = computed(() => ({
  transform: `translateX(-${trackOffset.value}px)`,
}))

const canGoPrev = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value < maxIndex.value)

function clampIndex() {
  if (currentIndex.value > maxIndex.value)
    currentIndex.value = maxIndex.value
}

function measureViewport() {
  viewportWidth.value = viewportRef.value?.clientWidth ?? 0
}

function handleResize() {
  updatePagesPerView()
  measureViewport()
  clampIndex()
}

let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  await nextTick()
  handleResize()

  if (typeof ResizeObserver !== 'undefined' && viewportRef.value) {
    resizeObserver = new ResizeObserver(() => {
      measureViewport()
      clampIndex()
    })
    resizeObserver.observe(viewportRef.value)
  }

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', handleResize)
})

watch(pagesPerView, () => {
  measureViewport()
  clampIndex()
})

watch(() => props.pages.length, clampIndex)

function goPrev() {
  if (canGoPrev.value)
    currentIndex.value -= 1
}

function goNext() {
  if (canGoNext.value)
    currentIndex.value += 1
}
</script>

<template>
  <div class="book-preview-carousel">
    <div
      ref="viewportRef"
      class="book-preview-carousel__viewport"
      :style="viewportStyle"
    >
      <div
        class="book-preview-carousel__track"
        :style="trackStyle"
      >
        <figure
          v-for="(page, index) in pages"
          :key="page.id"
          class="book-preview-carousel__slide"
        >
          <button
            type="button"
            class="book-preview-carousel__open"
            :aria-label="`Agrandir : ${page.alt}`"
            @click="emit('openPage', index)"
          >
            <img
              :src="page.image"
              :alt="page.alt"
              class="book-preview-carousel__image"
              loading="lazy"
              decoding="async"
            >
          </button>
        </figure>
      </div>
    </div>

    <button
      type="button"
      class="book-preview-carousel__arrow book-preview-carousel__arrow--prev"
      :disabled="!canGoPrev"
      aria-label="Pages précédentes"
      @click="goPrev"
    >
      <ChevronLeft
        class="size-5"
        aria-hidden="true"
      />
    </button>

    <button
      type="button"
      class="book-preview-carousel__arrow book-preview-carousel__arrow--next"
      :disabled="!canGoNext"
      aria-label="Pages suivantes"
      @click="goNext"
    >
      <ChevronRight
        class="size-5"
        aria-hidden="true"
      />
    </button>
  </div>
</template>

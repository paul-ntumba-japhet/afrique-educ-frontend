<script setup lang="ts">
import type { HeritageCategory } from '@/data/categories-page'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  items: HeritageCategory[]
  cardsPerView?: number
}>(), {
  cardsPerView: 4,
})

const CARD_GAP = 20

const currentIndex = ref(0)
const viewportCards = ref(props.cardsPerView)
const viewportRef = ref<HTMLElement | null>(null)
const viewportWidth = ref(0)

function updateViewportCards() {
  if (typeof window === 'undefined')
    return

  if (window.innerWidth < 640)
    viewportCards.value = 1
  else if (window.innerWidth < 1024)
    viewportCards.value = 2
  else if (window.innerWidth < 1280)
    viewportCards.value = 3
  else
    viewportCards.value = props.cardsPerView
}

const slideWidth = computed(() => {
  if (!viewportWidth.value)
    return 0

  return (viewportWidth.value - CARD_GAP * (viewportCards.value - 1)) / viewportCards.value
})

const maxIndex = computed(() =>
  Math.max(0, props.items.length - viewportCards.value),
)

const totalDots = computed(() => maxIndex.value + 1)

const trackOffset = computed(() => {
  if (!slideWidth.value)
    return 0

  return currentIndex.value * (slideWidth.value + CARD_GAP)
})

const viewportStyle = computed(() => ({
  '--heritage-slider-gap': `${CARD_GAP}px`,
  '--heritage-slide-width': slideWidth.value ? `${slideWidth.value}px` : undefined,
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
  updateViewportCards()
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

watch(viewportCards, () => {
  measureViewport()
  clampIndex()
})

watch(() => props.items.length, clampIndex)

function goPrev() {
  if (canGoPrev.value)
    currentIndex.value -= 1
}

function goNext() {
  if (canGoNext.value)
    currentIndex.value += 1
}

function goToIndex(index: number) {
  currentIndex.value = Math.min(Math.max(index, 0), maxIndex.value)
}
</script>

<template>
  <div class="heritage-slider">
    <div
      ref="viewportRef"
      class="heritage-slider__viewport"
      :style="viewportStyle"
    >
      <div
        class="heritage-slider__track"
        :style="trackStyle"
      >
        <div
          v-for="category in items"
          :key="category.slug"
          class="heritage-slider__slide"
        >
          <HeritageCard :category="category" />
        </div>
      </div>
    </div>

    <button
      type="button"
      class="heritage-slider__arrow heritage-slider__arrow--prev"
      :disabled="!canGoPrev"
      aria-label="Patrimoine précédent"
      @click="goPrev"
    >
      <ChevronLeft
        class="size-5"
        aria-hidden="true"
      />
    </button>

    <button
      type="button"
      class="heritage-slider__arrow heritage-slider__arrow--next"
      :disabled="!canGoNext"
      aria-label="Patrimoine suivant"
      @click="goNext"
    >
      <ChevronRight
        class="size-5"
        aria-hidden="true"
      />
    </button>

    <div
      v-if="totalDots > 1"
      class="heritage-slider__dots"
      role="tablist"
      aria-label="Pagination du patrimoine africain"
    >
      <button
        v-for="index in totalDots"
        :key="index"
        type="button"
        class="heritage-slider__dot"
        :class="{ 'heritage-slider__dot--active': currentIndex === index - 1 }"
        :aria-label="`Position ${index}`"
        :aria-selected="currentIndex === index - 1"
        role="tab"
        @click="goToIndex(index - 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

export interface DiscoveryTrendItem {
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
}

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  viewAllHref?: string
  items: DiscoveryTrendItem[]
  cardsPerView?: number
}>(), {
  viewAllHref: '/tendances',
  cardsPerView: 3,
})

const currentPage = ref(0)
const viewportCards = ref(props.cardsPerView)

function updateViewportCards() {
  if (typeof window === 'undefined')
    return

  if (window.innerWidth < 640)
    viewportCards.value = 1
  else if (window.innerWidth < 1200)
    viewportCards.value = 2
  else
    viewportCards.value = props.cardsPerView
}

watch(viewportCards, () => {
  const maxPage = Math.max(0, Math.ceil(props.items.length / viewportCards.value) - 1)
  if (currentPage.value > maxPage)
    currentPage.value = maxPage
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.items.length / viewportCards.value)),
)

const viewportRef = ref<HTMLElement | null>(null)
const viewportWidth = ref(0)

const CARD_GAP = 16

const slideWidth = computed(() => {
  if (!viewportWidth.value)
    return 0

  return (viewportWidth.value - CARD_GAP * (viewportCards.value - 1)) / viewportCards.value
})

const pageStep = computed(() => viewportWidth.value)

function measureViewport() {
  viewportWidth.value = viewportRef.value?.clientWidth ?? 0
}

function handleResize() {
  updateViewportCards()
  measureViewport()
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

watch(viewportCards, measureViewport)

const viewportStyle = computed(() => ({
  '--cards-per-view': String(viewportCards.value),
  '--slide-width': slideWidth.value ? `${slideWidth.value}px` : undefined,
}))

const trackStyle = computed(() => ({
  transform: `translateX(-${currentPage.value * pageStep.value}px)`,
}))

const canGoPrev = computed(() => currentPage.value > 0)
const canGoNext = computed(() => currentPage.value < totalPages.value - 1)

function goPrev() {
  if (canGoPrev.value)
    currentPage.value -= 1
}

function goNext() {
  if (canGoNext.value)
    currentPage.value += 1
}

function goToPage(index: number) {
  currentPage.value = index
}
</script>

<template>
  <section class="discovery-shelf-row">
    <header
      v-if="title || subtitle || viewAllHref"
      class="discovery-shelf-row__header"
      :class="{ 'discovery-shelf-row__header--end': !title && !subtitle }"
    >
      <div
        v-if="title || subtitle"
        class="discovery-shelf-row__heading"
      >
        <h2
          v-if="title"
          class="discovery-shelf-row__title"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="discovery-shelf-row__subtitle"
        >
          {{ subtitle }}
        </p>
      </div>
      <NuxtLink
        v-if="viewAllHref"
        :to="viewAllHref"
        class="discovery-shelf-row__view-all"
      >
        Voir tout →
      </NuxtLink>
    </header>

    <div class="discovery-slider">
      <div
        ref="viewportRef"
        class="discovery-slider__viewport"
        :style="viewportStyle"
      >
        <div
          class="discovery-slider__track"
          :style="trackStyle"
        >
          <div
            v-for="item in items"
            :key="item.title"
            class="discovery-slider__slide"
          >
            <DiscoveryBookCard v-bind="item" />
          </div>
        </div>
      </div>

      <button
        type="button"
        class="discovery-slider__arrow discovery-slider__arrow--prev"
        :disabled="!canGoPrev"
        aria-label="Voir les livres précédents"
        @click="goPrev"
      >
        <ChevronLeft
          class="size-5"
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        class="discovery-slider__arrow discovery-slider__arrow--next"
        :disabled="!canGoNext"
        aria-label="Voir les livres suivants"
        @click="goNext"
      >
        <ChevronRight
          class="size-5"
          aria-hidden="true"
        />
      </button>
    </div>

    <div
      class="discovery-slider__dots"
      role="tablist"
      aria-label="Pagination du carrousel"
    >
      <button
        v-for="page in totalPages"
        :key="page"
        type="button"
        class="discovery-slider__dot"
        :class="{ 'discovery-slider__dot--active': currentPage === page - 1 }"
        :aria-label="`Page ${page}`"
        :aria-selected="currentPage === page - 1"
        role="tab"
        @click="goToPage(page - 1)"
      />
    </div>
  </section>
</template>

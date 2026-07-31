<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { authorsDiscoverList } from '@/data/authors-page'

const CARD_GAP = 16
const cardsPerViewDesired = 4

const currentPage = ref(0)
const viewportCards = ref(cardsPerViewDesired)
const viewportRef = ref<HTMLElement | null>(null)
const viewportWidth = ref(0)

function updateViewportCards() {
  if (typeof window === 'undefined')
    return

  if (window.innerWidth < 640)
    viewportCards.value = 1
  else if (window.innerWidth < 900)
    viewportCards.value = 2
  else if (window.innerWidth < 1200)
    viewportCards.value = 3
  else
    viewportCards.value = cardsPerViewDesired
}

const totalPages = computed(() =>
  Math.max(1, Math.ceil(authorsDiscoverList.length / viewportCards.value)),
)

const slideWidth = computed(() => {
  if (!viewportWidth.value)
    return 0

  return (viewportWidth.value - CARD_GAP * (viewportCards.value - 1)) / viewportCards.value
})

const pageStep = computed(() => viewportWidth.value)

const trackStyle = computed(() => ({
  transform: `translateX(-${currentPage.value * pageStep.value}px)`,
  gap: `${CARD_GAP}px`,
}))

const viewportStyle = computed(() => {
  if (slideWidth.value > 0) {
    return {
      '--discover-slide-width': `${slideWidth.value}px`,
    }
  }

  const gaps = CARD_GAP * Math.max(0, viewportCards.value - 1)
  return {
    '--discover-slide-width': `calc((100% - ${gaps}px) / ${viewportCards.value})`,
  }
})

const canGoPrev = computed(() => currentPage.value > 0)
const canGoNext = computed(() => currentPage.value < totalPages.value - 1)

function measureViewport() {
  viewportWidth.value = viewportRef.value?.clientWidth ?? 0
}

function handleResize() {
  updateViewportCards()
  measureViewport()
  const maxPage = Math.max(0, totalPages.value - 1)
  if (currentPage.value > maxPage)
    currentPage.value = maxPage
}

function goPrev() {
  if (canGoPrev.value)
    currentPage.value -= 1
}

function goNext() {
  if (canGoNext.value)
    currentPage.value += 1
}

onMounted(async () => {
  await nextTick()
  handleResize()
  requestAnimationFrame(() => {
    handleResize()
  })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

watch(viewportCards, measureViewport)
</script>

<template>
  <section
    id="auteurs-contenu"
    class="authors-discover"
    aria-labelledby="authors-discover-heading"
  >
    <div class="page-container">
      <header class="authors-discover__header">
        <h2
          id="authors-discover-heading"
          class="authors-discover__title"
        >
          Les auteurs à découvrir
        </h2>
        <NuxtLink
          to="/auteurs"
          class="authors-discover__view-all"
        >
          Voir tous les auteurs
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </header>

      <div class="authors-discover__slider">
        <div
          ref="viewportRef"
          class="authors-discover__viewport"
          :style="viewportStyle"
        >
          <div
            class="authors-discover__track"
            :style="trackStyle"
          >
            <div
              v-for="author in authorsDiscoverList"
              :key="author.id"
              class="authors-discover__slide"
            >
              <AuthorsDiscoverCard :author="author" />
            </div>
          </div>
        </div>

        <button
          type="button"
          class="authors-discover__arrow"
          :disabled="!canGoNext"
          aria-label="Auteurs suivants"
          @click="goNext"
        >
          <ChevronRight
            class="size-5"
            aria-hidden="true"
          />
        </button>

        <button
          v-if="canGoPrev"
          type="button"
          class="authors-discover__arrow authors-discover__arrow--prev"
          aria-label="Auteurs précédents"
          @click="goPrev"
        >
          <ChevronRight
            class="size-5 rotate-180"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </section>
</template>

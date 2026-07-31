<script setup lang="ts">
import { authors } from '@/data/categories-page'

const authorsCardsRef = ref<HTMLElement | null>(null)
const cardsHeight = ref<number | undefined>(undefined)

let resizeObserver: ResizeObserver | null = null
let mediaQuery: MediaQueryList | null = null
let observedViewport: HTMLElement | null = null

function getCardsViewport() {
  return authorsCardsRef.value?.querySelector('.authors-slider__viewport') as HTMLElement | null
}

function syncFormHeight() {
  if (typeof window === 'undefined')
    return

  if (!mediaQuery?.matches) {
    cardsHeight.value = undefined
    return
  }

  const viewport = getCardsViewport()
  if (!viewport?.offsetHeight)
    return

  cardsHeight.value = viewport.offsetHeight
}

function observeCardsViewport() {
  const viewport = getCardsViewport()
  if (!viewport || viewport === observedViewport || !resizeObserver)
    return

  if (observedViewport)
    resizeObserver.unobserve(observedViewport)

  observedViewport = viewport
  resizeObserver.observe(viewport)
  syncFormHeight()
}

function handleMediaChange() {
  syncFormHeight()
}

onMounted(async () => {
  await nextTick()

  if (typeof window === 'undefined')
    return

  mediaQuery = window.matchMedia('(min-width: 1024px)')
  mediaQuery.addEventListener('change', handleMediaChange)

  if (authorsCardsRef.value && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      syncFormHeight()
    })
    observeCardsViewport()
  }

  window.addEventListener('resize', syncFormHeight)
  syncFormHeight()
})

onUnmounted(() => {
  if (observedViewport && resizeObserver)
    resizeObserver.unobserve(observedViewport)

  resizeObserver?.disconnect()
  mediaQuery?.removeEventListener('change', handleMediaChange)
  window.removeEventListener('resize', syncFormHeight)
})
</script>

<template>
  <section
    class="authors-search-section"
    aria-labelledby="authors-section-heading"
  >
    <div class="page-container authors-search-section__inner">
      <div class="authors-search-section__authors">
        <SectionTitle
          heading-id="authors-section-heading"
          index="07"
          title="Auteurs à découvrir"
          action-label="Voir tous les auteurs"
          action-href="/catalogue?theme=auteurs"
        />

        <div
          ref="authorsCardsRef"
          class="authors-search-section__cards categories-animate-section"
        >
          <AuthorsSlider
            :items="authors"
            :cards-per-view="3"
          />
        </div>
      </div>

      <AdvancedSearch :content-height="cardsHeight" />
    </div>
  </section>
</template>

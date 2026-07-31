<script setup lang="ts">
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import heroBackgroundBrand from '~/assets/images/home/home_slider_1.png'
import heroBackgroundPublication from '~/assets/images/home/home_slider_2.png'

const SLIDE_DURATION_MS = 12000

const slides = [
  {
    id: 'brand',
    background: heroBackgroundBrand,
    bgFit: 'contain',
    overlay: 'brand',
    labelledBy: 'hero-heading',
  },
  {
    id: 'publication',
    background: heroBackgroundPublication,
    bgFit: 'cover',
    overlay: 'publication',
    labelledBy: 'hero-publication-heading',
  },
] as const

const activeSlide = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const currentSlide = computed(() => slides[activeSlide.value]!)

const { pause: pauseSlides, resume: resumeSlides } = useIntervalFn(
  () => {
    activeSlide.value = (activeSlide.value + 1) % slides.length
  },
  SLIDE_DURATION_MS,
  { immediate: false },
)

onMounted(() => {
  if (prefersReducedMotion.value === 'reduce') {
    pauseSlides()
  }
  else {
    resumeSlides()
  }
})

watch(prefersReducedMotion, (value) => {
  if (value === 'reduce') {
    pauseSlides()
    activeSlide.value = 0
  }
  else {
    resumeSlides()
  }
})

function goToSlide(index: number) {
  activeSlide.value = index
}

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % slides.length
}

function prevSlide() {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <section
    class="hero-section relative overflow-hidden"
    :aria-labelledby="currentSlide.labelledBy"
  >
    <Transition
      name="hero-slide-bg"
      mode="out-in"
    >
      <img
        :key="currentSlide.id"
        :src="currentSlide.background"
        alt=""
        class="hero-section__bg"
        :class="{
          'hero-section__bg--contain': currentSlide.bgFit === 'contain',
          'hero-section__bg--cover': currentSlide.bgFit === 'cover',
        }"
        aria-hidden="true"
      >
    </Transition>

    <div
      class="hero-section__overlay"
      :class="`hero-section__overlay--${currentSlide.overlay}`"
      aria-hidden="true"
    />

    <button
      type="button"
      class="hero-section__nav hero-section__nav--prev"
      aria-label="Slide précédent"
      @click="prevSlide"
    >
      <ChevronLeft
        class="size-5"
        aria-hidden="true"
      />
    </button>

    <button
      type="button"
      class="hero-section__nav hero-section__nav--next"
      aria-label="Slide suivant"
      @click="nextSlide"
    >
      <ChevronRight
        class="size-5"
        aria-hidden="true"
      />
    </button>

    <div class="page-container relative z-[1]">
      <Transition
        name="hero-slide-content"
        mode="out-in"
      >
        <HeroSlideBrand
          v-if="activeSlide === 0"
          key="brand"
        />
        <HeroSlidePublication
          v-else
          key="publication"
          :slide-index="activeSlide"
          :total-slides="slides.length"
        />
      </Transition>
    </div>

    <div
      class="hero-section__pagination"
      role="tablist"
      aria-label="Slides du hero"
    >
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        type="button"
        role="tab"
        class="hero-section__pagination-dot"
        :class="{ 'hero-section__pagination-dot--active': index === activeSlide }"
        :aria-label="`Aller au slide ${index + 1}`"
        :aria-selected="index === activeSlide"
        @click="goToSlide(index)"
      />
    </div>
  </section>
</template>

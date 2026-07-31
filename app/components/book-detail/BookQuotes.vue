<script setup lang="ts">
import type { BookDetailQuotes } from '@/data/book-detail-page'
import { Quote } from 'lucide-vue-next'

const props = defineProps<{
  quotes: BookDetailQuotes
}>()

const activeIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

const activeQuote = computed(() => props.quotes.quotes[activeIndex.value])

function goToQuote(index: number) {
  activeIndex.value = index
}

function startAutoplay() {
  stopAutoplay()

  if (props.quotes.quotes.length <= 1)
    return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return

  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.quotes.quotes.length
  }, 6000)
}

function stopAutoplay() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <article
    class="book-detail-insights-card book-detail-insights-card--quotes"
    aria-labelledby="book-quotes-heading"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <h2
      id="book-quotes-heading"
      class="book-detail-insights-card__title"
    >
      {{ quotes.sectionTitle }}
    </h2>

    <div class="book-detail-quotes__content">
      <Quote
        class="book-detail-quotes__mark"
        aria-hidden="true"
      />

      <blockquote class="book-detail-quotes__quote">
        <p class="book-detail-quotes__text">
          « {{ activeQuote?.text }} »
        </p>
      </blockquote>
    </div>

    <div
      class="book-detail-quotes__dots"
      role="tablist"
      aria-label="Citations"
    >
      <button
        v-for="(quote, index) in quotes.quotes"
        :key="quote.id"
        type="button"
        class="book-detail-quotes__dot"
        :class="{ 'book-detail-quotes__dot--active': index === activeIndex }"
        role="tab"
        :aria-selected="index === activeIndex"
        :aria-label="`Citation ${index + 1}`"
        @click="goToQuote(index)"
      />
    </div>
  </article>
</template>

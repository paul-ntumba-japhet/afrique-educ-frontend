<script setup lang="ts">
import type { BookDetailLearningOutcomes, BookLearningOutcomeIcon } from '@/data/book-detail-page'
import {
  Globe,
  Landmark,
  Map,
  ScrollText,
  Sparkles,
  Users,
} from 'lucide-vue-next'

const props = defineProps<{
  learningOutcomes: BookDetailLearningOutcomes
}>()

const isExpanded = ref(false)

const iconMap: Record<BookLearningOutcomeIcon, typeof Landmark> = {
  landmark: Landmark,
  globe: Globe,
  users: Users,
  scroll: ScrollText,
  map: Map,
  sparkles: Sparkles,
}

const visibleOutcomes = computed(() => {
  if (isExpanded.value)
    return props.learningOutcomes.outcomes

  return props.learningOutcomes.outcomes.slice(0, props.learningOutcomes.maxVisibleItems)
})

const hasMoreOutcomes = computed(
  () => props.learningOutcomes.outcomes.length > props.learningOutcomes.maxVisibleItems,
)
</script>

<template>
  <article
    class="book-detail-insights-card book-detail-insights-card--learning"
    aria-labelledby="book-learning-heading"
  >
    <h2
      id="book-learning-heading"
      class="book-detail-insights-card__title"
    >
      {{ learningOutcomes.sectionTitle }}
    </h2>

    <ul class="book-detail-learning__list">
      <li
        v-for="outcome in visibleOutcomes"
        :key="outcome.id"
        class="book-detail-learning__item"
      >
        <div
          class="book-detail-learning__icon-wrap"
          aria-hidden="true"
        >
          <component
            :is="iconMap[outcome.icon]"
            class="book-detail-learning__icon"
            :stroke-width="2.25"
          />
        </div>
        <p class="book-detail-learning__label">
          {{ outcome.title }}
        </p>
      </li>
    </ul>

    <button
      v-if="hasMoreOutcomes"
      type="button"
      class="book-detail-insights-card__cta"
      :aria-expanded="isExpanded"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? learningOutcomes.viewLessLabel : learningOutcomes.viewMoreLabel }}
    </button>
  </article>
</template>

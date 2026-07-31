<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { podExamples, podTestimonial } from '@/data/print-on-demand'

const index = ref(0)
const visible = computed(() => {
  const start = index.value
  return [
    podExamples[start % podExamples.length],
    podExamples[(start + 1) % podExamples.length],
    podExamples[(start + 2) % podExamples.length],
  ]
})

function prev() {
  index.value = (index.value - 1 + podExamples.length) % podExamples.length
}

function next() {
  index.value = (index.value + 1) % podExamples.length
}
</script>

<template>
  <section
    class="pod-social"
    aria-labelledby="pod-social-heading"
  >
    <div class="page-container pod-social__grid">
      <div>
        <div class="pod-section-head pod-section-head--row">
          <h2 id="pod-social-heading">
            Exemples de réalisations
          </h2>
          <div class="pod-social__nav">
            <button
              type="button"
              class="pod-social__nav-btn"
              aria-label="Précédent"
              @click="prev"
            >
              <ChevronLeft class="size-4" :stroke-width="1.5" />
            </button>
            <button
              type="button"
              class="pod-social__nav-btn"
              aria-label="Suivant"
              @click="next"
            >
              <ChevronRight class="size-4" :stroke-width="1.5" />
            </button>
          </div>
        </div>

        <div class="pod-social__examples">
          <article
            v-for="item in visible"
            :key="`${item.id}-${index}`"
            class="pod-social__example"
          >
            <div class="pod-social__example-media">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
              >
            </div>
            <h3>{{ item.title }}</h3>
            <p>Format : {{ item.format }}</p>
            <p>Couverture : {{ item.cover }}</p>
          </article>
        </div>
      </div>

      <aside class="pod-social__quote">
        <p class="pod-social__quote-text">
          « {{ podTestimonial.quote }} »
        </p>
        <div class="pod-social__author">
          <img
            :src="podTestimonial.avatar"
            :alt="podTestimonial.name"
            loading="lazy"
          >
          <div>
            <strong>{{ podTestimonial.name }}</strong>
            <span>{{ podTestimonial.role }}</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

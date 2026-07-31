<script setup lang="ts">
import { publishFaqSection } from '@/data/publish-page'
import { Plus } from 'lucide-vue-next'

const section = publishFaqSection
const openItemId = ref<string | null>(null)

function toggleItem(id: string) {
  openItemId.value = openItemId.value === id ? null : id
}

function onKeydown(event: KeyboardEvent, id: string) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleItem(id)
  }
}
</script>

<template>
  <article
    class="publish-testimonials-faq__panel publish-faq"
    aria-labelledby="publish-faq-heading"
  >
    <h2
      id="publish-faq-heading"
      class="publish-testimonials-faq__title"
    >
      {{ section.title }}
    </h2>

    <div class="publish-faq__list">
      <div
        v-for="item in section.items"
        :key="item.id"
        class="publish-faq__item"
        :class="{ 'publish-faq__item--open': openItemId === item.id }"
      >
        <h3 class="publish-faq__question-wrap">
          <button
            type="button"
            class="publish-faq__trigger"
            :aria-expanded="openItemId === item.id"
            :aria-controls="`publish-faq-panel-${item.id}`"
            @click="toggleItem(item.id)"
            @keydown="onKeydown($event, item.id)"
          >
            <span class="publish-faq__question">{{ item.question }}</span>
            <Plus
              class="publish-faq__icon"
              aria-hidden="true"
            />
          </button>
        </h3>

        <div
          :id="`publish-faq-panel-${item.id}`"
          class="publish-faq__panel"
          role="region"
          :aria-hidden="openItemId !== item.id"
        >
          <div class="publish-faq__panel-inner">
            <p class="publish-faq__answer">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

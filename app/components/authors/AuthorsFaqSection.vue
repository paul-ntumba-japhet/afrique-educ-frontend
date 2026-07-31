<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { authorsFaqItems } from '@/data/authors-page'

const openItemId = ref<string | null>(null)

const columns = [
  authorsFaqItems.slice(0, 3),
  authorsFaqItems.slice(3, 6),
]

function toggleItem(id: string) {
  openItemId.value = openItemId.value === id ? null : id
}
</script>

<template>
  <section
    class="authors-faq"
    aria-labelledby="authors-faq-heading"
  >
    <div class="page-container">
      <h2
        id="authors-faq-heading"
        class="authors-faq__title"
      >
        Questions fréquentes
      </h2>

      <div class="authors-faq__grid">
        <div
          v-for="(column, columnIndex) in columns"
          :key="`faq-col-${columnIndex}`"
          class="authors-faq__column"
        >
          <div
            v-for="item in column"
            :key="item.id"
            class="authors-faq__item"
            :class="{ 'authors-faq__item--open': openItemId === item.id }"
          >
            <h3 class="authors-faq__question-wrap">
              <button
                type="button"
                class="authors-faq__trigger"
                :aria-expanded="openItemId === item.id"
                :aria-controls="`authors-faq-panel-${item.id}`"
                @click="toggleItem(item.id)"
              >
                <span class="authors-faq__question">{{ item.question }}</span>
                <ChevronDown
                  class="authors-faq__icon"
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              :id="`authors-faq-panel-${item.id}`"
              class="authors-faq__panel"
              role="region"
              :aria-hidden="openItemId !== item.id"
            >
              <div class="authors-faq__panel-inner">
                <p class="authors-faq__answer">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="authors-faq__footer">
        <NuxtLink
          to="/publier"
          class="authors-faq__all-link"
        >
          Voir toutes les questions →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

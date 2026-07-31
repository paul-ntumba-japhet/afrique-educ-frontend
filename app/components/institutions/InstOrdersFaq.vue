<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { institutionalFaqItems } from '@/data/institutional-orders'

const openItemId = ref<string | null>(institutionalFaqItems[0]?.id ?? null)

function toggleItem(id: string) {
  openItemId.value = openItemId.value === id ? null : id
}
</script>

<template>
  <section
    class="inst-orders-faq"
    aria-labelledby="inst-orders-faq-heading"
  >
    <div class="page-container inst-orders-faq__inner">
      <h2
        id="inst-orders-faq-heading"
        class="inst-orders-section-title inst-orders-section-title--left"
      >
        FAQ
      </h2>

      <div class="inst-orders-faq__list">
        <div
          v-for="item in institutionalFaqItems"
          :key="item.id"
          class="inst-orders-faq__item"
          :class="{ 'inst-orders-faq__item--open': openItemId === item.id }"
        >
          <h3 class="inst-orders-faq__question-wrap">
            <button
              type="button"
              class="inst-orders-faq__trigger"
              :aria-expanded="openItemId === item.id"
              :aria-controls="`inst-orders-faq-panel-${item.id}`"
              @click="toggleItem(item.id)"
            >
              <span>{{ item.question }}</span>
              <Plus
                class="inst-orders-faq__icon"
                aria-hidden="true"
              />
            </button>
          </h3>
          <div
            :id="`inst-orders-faq-panel-${item.id}`"
            class="inst-orders-faq__panel"
            role="region"
            :aria-hidden="openItemId !== item.id"
          >
            <div class="inst-orders-faq__panel-inner">
              <p class="inst-orders-faq__answer">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

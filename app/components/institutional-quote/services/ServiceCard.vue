<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import type { Component } from 'vue'
import type { QuoteServiceId } from '@/types/institutional-quote'

defineProps<{
  id: QuoteServiceId
  title: string
  description: string
  icon: Component
  selected: boolean
  active: boolean
}>()

const emit = defineEmits<{
  toggle: [id: QuoteServiceId]
}>()
</script>

<template>
  <button
    type="button"
    class="inst-quote-svc-card"
    :class="{
      'inst-quote-svc-card--selected': selected,
      'inst-quote-svc-card--active': active,
    }"
    :aria-pressed="selected"
    @click="emit('toggle', id)"
  >
    <span
      v-if="selected"
      class="inst-quote-svc-card__badge"
      aria-hidden="true"
    >
      <Check
        class="size-3"
        :stroke-width="3"
      />
    </span>

    <span class="inst-quote-svc-card__top">
      <span
        class="inst-quote-svc-card__icon"
        aria-hidden="true"
      >
        <component
          :is="icon"
          class="size-6"
          :stroke-width="1.5"
        />
      </span>
      <span class="inst-quote-svc-card__title">{{ title }}</span>
    </span>

    <span class="inst-quote-svc-card__desc">{{ description }}</span>

    <span
      class="inst-quote-svc-card__check"
      :class="{ 'inst-quote-svc-card__check--on': selected }"
      aria-hidden="true"
    >
      <Check
        v-if="selected"
        class="size-3"
        :stroke-width="3"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { bookSelectionMethods } from '@/data/institutional-quote'
import type { BookSelectionMethodId } from '@/types/institutional-quote'

defineProps<{
  modelValue: BookSelectionMethodId | null
}>()

defineEmits<{
  'update:modelValue': [value: BookSelectionMethodId]
}>()
</script>

<template>
  <div
    class="inst-quote-books-methods"
    role="radiogroup"
    aria-label="Méthode de sélection des livres"
  >
    <button
      v-for="method in bookSelectionMethods"
      :key="method.id"
      type="button"
      class="inst-quote-books-methods__card"
      :class="{ 'inst-quote-books-methods__card--selected': modelValue === method.id }"
      role="radio"
      :aria-checked="modelValue === method.id"
      @click="$emit('update:modelValue', method.id)"
    >
      <span
        v-if="modelValue === method.id"
        class="inst-quote-books-methods__check"
        aria-hidden="true"
      >
        <Check
          class="size-3.5"
          :stroke-width="2.5"
        />
      </span>
      <span
        class="inst-quote-books-methods__icon"
        aria-hidden="true"
      >
        <component
          :is="method.icon"
          :stroke-width="1.5"
        />
      </span>
      <span class="inst-quote-books-methods__copy">
        <span class="inst-quote-books-methods__title">
          {{ method.letter }}. {{ method.title }}
        </span>
        <span class="inst-quote-books-methods__desc">{{ method.description }}</span>
      </span>
    </button>
  </div>
</template>

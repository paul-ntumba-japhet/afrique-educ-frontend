<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { deliveryModes } from '@/data/institutional-quote'
import type { DeliveryModeId } from '@/types/institutional-quote'

defineProps<{
  modelValue: DeliveryModeId | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: DeliveryModeId]
}>()
</script>

<template>
  <fieldset class="inst-quote-deliv-modes">
    <legend class="inst-quote-form__legend">
      Mode de réception
    </legend>
    <p class="inst-quote-deliv-modes__hint">
      Choisissez l’option qui correspond le mieux à vos besoins.
    </p>

    <div
      class="inst-quote-deliv-modes__grid"
      role="radiogroup"
      aria-label="Mode de réception"
    >
      <button
        v-for="mode in deliveryModes"
        :key="mode.id"
        type="button"
        class="inst-quote-deliv-modes__card"
        :class="{ 'inst-quote-deliv-modes__card--selected': modelValue === mode.id }"
        role="radio"
        :aria-checked="modelValue === mode.id"
        @click="emit('update:modelValue', mode.id)"
      >
        <span
          v-if="modelValue === mode.id"
          class="inst-quote-deliv-modes__badge"
          aria-hidden="true"
        >
          <Check
            class="size-3"
            :stroke-width="3"
          />
        </span>
        <span class="inst-quote-deliv-modes__top">
          <span
            class="inst-quote-deliv-modes__icon"
            aria-hidden="true"
          >
            <component
              :is="mode.icon"
              class="size-6"
              :stroke-width="1.5"
            />
          </span>
          <span class="inst-quote-deliv-modes__copy">
            <span class="inst-quote-deliv-modes__title">{{ mode.title }}</span>
            <span class="inst-quote-deliv-modes__desc">{{ mode.description }}</span>
          </span>
        </span>
      </button>
    </div>
  </fieldset>
</template>

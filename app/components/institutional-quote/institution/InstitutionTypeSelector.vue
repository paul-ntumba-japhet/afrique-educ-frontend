<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { institutionTypeOptions } from '@/data/institutional-quote'
import type { InstitutionTypeId } from '@/types/institutional-quote'

defineProps<{
  modelValue: InstitutionTypeId | null
}>()

defineEmits<{
  'update:modelValue': [value: InstitutionTypeId]
}>()
</script>

<template>
  <fieldset class="inst-quote-types">
    <legend class="inst-quote-types__legend">
      Type d’institution
    </legend>

    <div
      class="inst-quote-types__grid"
      role="radiogroup"
      aria-label="Type d’institution"
    >
      <button
        v-for="option in institutionTypeOptions"
        :key="option.id"
        type="button"
        class="inst-quote-types__card"
        :class="{ 'inst-quote-types__card--selected': modelValue === option.id }"
        role="radio"
        :aria-checked="modelValue === option.id"
        @click="$emit('update:modelValue', option.id)"
      >
        <span
          v-if="modelValue === option.id"
          class="inst-quote-types__check"
          aria-hidden="true"
        >
          <Check
            class="size-3.5"
            :stroke-width="2.5"
          />
        </span>
        <span
          class="inst-quote-types__icon"
          aria-hidden="true"
        >
          <component
            :is="option.icon"
            class="size-9"
            :stroke-width="1.15"
          />
        </span>
        <span class="inst-quote-types__label">{{ option.label }}</span>
      </button>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { Check } from 'lucide-vue-next'

interface Props {
  title: string
  description?: string
  subtitle?: string
  icon: Component
  selected?: boolean
}

withDefaults(defineProps<Props>(), {
  selected: false,
})

defineEmits<{
  select: []
}>()
</script>

<template>
  <button
    type="button"
    class="register-card"
    :class="{ 'register-card--selected': selected }"
    :aria-pressed="selected"
    @click="$emit('select')"
  >
    <span
      v-if="selected"
      class="register-card__check"
      aria-hidden="true"
    >
      <Check class="register-card__check-icon" />
    </span>

    <span class="register-card__icon-wrap">
      <component
        :is="icon"
        class="register-card__icon"
        aria-hidden="true"
      />
    </span>

    <span class="register-card__copy">
      <span class="register-card__title">{{ title }}</span>
      <span
        v-if="subtitle"
        class="register-card__subtitle"
      >{{ subtitle }}</span>
      <span
        v-if="description"
        class="register-card__description"
      >{{ description }}</span>
    </span>
  </button>
</template>

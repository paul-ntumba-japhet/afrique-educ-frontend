<script setup lang="ts">
import type { ThemeCategory } from '@/data/categories-page'
import type { Component } from 'vue'
import {
  ChartNoAxesCombined,
  Cpu,
  Landmark,
  Languages,
  Microscope,
  Palette,
} from 'lucide-vue-next'

const props = defineProps<{
  theme: ThemeCategory
}>()

const iconMap: Record<ThemeCategory['icon'], Component> = {
  Cpu,
  ChartNoAxesCombined,
  Microscope,
  Palette,
  Languages,
  Landmark,
}

const iconComponent = computed(() => iconMap[props.theme.icon])
</script>

<template>
  <article class="theme-category-card category-card">
    <NuxtLink
      :to="theme.href"
      class="theme-category-card__link"
    >
      <div class="theme-category-card__header">
        <span
          class="theme-category-card__icon"
          aria-hidden="true"
        >
          <component
            :is="iconComponent"
            class="theme-category-card__icon-svg"
          />
        </span>
        <h3 class="theme-category-card__title">
          {{ theme.title }}
        </h3>
      </div>

      <ul class="theme-category-card__items">
        <li
          v-for="item in theme.items"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </NuxtLink>
  </article>
</template>

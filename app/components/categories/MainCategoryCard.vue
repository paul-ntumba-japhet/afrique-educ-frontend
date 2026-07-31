<script setup lang="ts">
import type { MainCategory } from '@/data/categories-page'
import type { Component } from 'vue'
import {
  Baby,
  BookMarked,
  BookOpenCheck,
  Feather,
  GraduationCap,
  ShieldCheck,
} from 'lucide-vue-next'

const props = defineProps<{
  category: MainCategory
}>()

const iconMap: Record<MainCategory['icon'], Component> = {
  GraduationCap,
  BookOpenCheck,
  Feather,
  Baby,
  ShieldCheck,
  BookMarked,
}

const iconComponent = computed(() => iconMap[props.category.icon])
</script>

<template>
  <article class="main-category-card category-card">
    <NuxtLink
      :to="category.href"
      class="main-category-card__link"
    >
      <div class="main-category-card__media">
        <div class="main-category-card__media-inner">
          <img
            :src="category.image"
            :alt="category.title"
            class="main-category-card__image"
            loading="lazy"
            decoding="async"
          >
          <div
            class="main-category-card__overlay"
            aria-hidden="true"
          />
        </div>
        <span
          class="main-category-card__icon"
          :class="`main-category-card__icon--${category.iconTone}`"
          aria-hidden="true"
        >
          <component
            :is="iconComponent"
            class="main-category-card__icon-svg"
          />
        </span>
      </div>

      <div class="main-category-card__body">
        <h3 class="main-category-card__title">
          {{ category.title }}
        </h3>

        <ul class="main-category-card__items">
          <li
            v-for="item in category.items"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>

        <span class="main-category-card__cta">
          Voir plus
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { FinalCtaActionIcon, TrustBarIcon } from '@/data/categories-page'
import { finalCtaContent, trustBarItems } from '@/data/categories-page'
import {
  FilePlus,
  Headphones,
  LibraryBig,
  PenLine,
  Search,
  ShieldCheck,
  Truck,
} from 'lucide-vue-next'

const actionIconMap: Record<FinalCtaActionIcon, typeof Search> = {
  Search,
  FilePlus,
  PenLine,
}

const trustIconMap: Record<TrustBarIcon, typeof Truck> = {
  Truck,
  ShieldCheck,
  Headphones,
  LibraryBig,
}
</script>

<template>
  <section
    class="categories-final-cta"
    aria-labelledby="categories-final-cta-heading"
  >
    <div class="page-container categories-final-cta__inner">
      <div class="categories-final-cta__panel categories-scroll-reveal">
        <div class="categories-final-cta__media">
          <img
            :src="finalCtaContent.image"
            :alt="finalCtaContent.imageAlt"
            class="categories-final-cta__image"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div class="categories-final-cta__main">
          <div class="categories-final-cta__content">
            <h2
              id="categories-final-cta-heading"
              class="categories-final-cta__title"
            >
              {{ finalCtaContent.title }}
            </h2>
            <p class="categories-final-cta__description">
              {{ finalCtaContent.description }}
            </p>
          </div>

          <div class="categories-final-cta__actions">
            <NuxtLink
              v-for="action in finalCtaContent.actions"
              :key="action.label"
              :to="action.href"
              class="categories-final-cta__button"
              :class="action.variant === 'primary'
                ? 'categories-final-cta__button--primary'
                : 'categories-final-cta__button--outline'"
            >
              <component
                :is="actionIconMap[action.icon]"
                class="categories-final-cta__button-icon"
                aria-hidden="true"
              />
              <span class="categories-final-cta__button-label">{{ action.label }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <ul class="categories-trust-bar categories-scroll-reveal">
        <li
          v-for="item in trustBarItems"
          :key="item.title"
          class="categories-trust-bar__item"
        >
          <span
            class="categories-trust-bar__icon-wrap"
            aria-hidden="true"
          >
            <component
              :is="trustIconMap[item.icon]"
              class="categories-trust-bar__icon"
            />
          </span>
          <span class="categories-trust-bar__text">
            <span class="categories-trust-bar__title">{{ item.title }}</span>
            <span class="categories-trust-bar__subtitle">{{ item.subtitle }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

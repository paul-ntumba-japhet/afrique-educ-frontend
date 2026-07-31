<script setup lang="ts">
import { publishHeroContent } from '@/data/publish-page'
import heroImage from '~/assets/images/publier/hero.avif'
import {
  BookOpen,
  Eye,
  Globe,
  Play,
  Users,
} from 'lucide-vue-next'

const hero = publishHeroContent

const statIcons = {
  authors: Users,
  books: BookOpen,
  readers: Eye,
  countries: Globe,
} as const

function getStatIcon(id: string) {
  return statIcons[id as keyof typeof statIcons] ?? Users
}
</script>

<template>
  <section
    class="publish-hero publish-section"
    aria-labelledby="publish-hero-heading"
  >
    <div
      class="publish-hero__backdrop"
      aria-hidden="true"
    >
      <div
        class="publish-hero__photo"
        :style="{ backgroundImage: `url(${heroImage})` }"
      />
      <div class="publish-hero__overlay" />
      <div class="publish-hero__glow publish-hero__glow--primary" />
      <div class="publish-hero__grid" />
    </div>

    <div class="publish-hero__container">
      <div class="publish-hero__content">
        <p class="publish-hero__badge">
          {{ hero.badge }}
        </p>

        <h1
          id="publish-hero-heading"
          class="publish-hero__title"
        >
          {{ hero.titleBefore }}
          <span class="publish-hero__title-highlight">{{ hero.titleHighlight }}</span>
        </h1>

        <p class="publish-hero__subtitle">
          {{ hero.subtitle }}
        </p>

        <div class="publish-hero__actions">
          <NuxtLink
            :to="hero.primaryCta.href"
            class="publish-hero__cta publish-hero__cta--primary"
          >
            {{ hero.primaryCta.label }}
          </NuxtLink>

          <NuxtLink
            :to="hero.secondaryCta.href"
            class="publish-hero__cta publish-hero__cta--secondary"
          >
            <Play
              class="publish-hero__cta-icon"
              aria-hidden="true"
            />
            {{ hero.secondaryCta.label }}
          </NuxtLink>
        </div>

        <ul class="publish-hero__stats">
          <li
            v-for="stat in hero.stats"
            :key="stat.id"
            class="publish-hero__stat"
          >
            <component
              :is="getStatIcon(stat.id)"
              class="publish-hero__stat-icon"
              aria-hidden="true"
            />
            <div class="publish-hero__stat-copy">
              <span class="publish-hero__stat-value">{{ stat.value }}</span>
              <span class="publish-hero__stat-label">{{ stat.label }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

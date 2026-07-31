<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { partnershipGoals, partnershipHero } from '@/data/partenariat'
</script>

<template>
  <section
    class="partnership-hero"
    aria-labelledby="partnership-hero-heading"
  >
    <div class="page-container partnership-hero__shell">
      <div class="partnership-hero__top">
        <div class="partnership-hero__copy">
          <p class="partnership-hero__eyebrow">
            {{ partnershipHero.eyebrow }}
          </p>

          <h1 id="partnership-hero-heading">
            {{ partnershipHero.titleBefore }}
            <span class="partnership-hero__highlight">{{ partnershipHero.titleHighlight }}</span>
          </h1>

          <p class="partnership-hero__lead">
            {{ partnershipHero.lead }}
          </p>

          <div class="partnership-hero__actions">
            <NuxtLink
              :to="partnershipHero.primaryCta.href"
              class="partnership-hero__btn partnership-hero__btn--primary"
            >
              {{ partnershipHero.primaryCta.label }}
            </NuxtLink>

            <a
              :href="partnershipHero.secondaryCta.href"
              class="partnership-hero__btn partnership-hero__btn--ghost"
            >
              {{ partnershipHero.secondaryCta.label }}
              <ChevronDown
                class="size-4"
                :stroke-width="1.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div class="partnership-hero__media">
          <img
            :src="partnershipHero.image"
            :alt="partnershipHero.imageAlt"
            class="partnership-hero__image"
            width="960"
            height="720"
            fetchpriority="high"
          >
        </div>
      </div>

      <div class="partnership-hero__goals">
        <div class="partnership-hero__goals-grid">
          <div class="partnership-hero__goals-copy">
            <h2 id="partnership-goals-heading">
              {{ partnershipGoals.title }}
            </h2>
            <p>{{ partnershipGoals.intro }}</p>
          </div>

          <article
            v-for="item in partnershipGoals.items"
            :key="item.id"
            class="partnership-hero__goal"
          >
            <span class="partnership-hero__goal-icon">
              <component
                :is="item.icon"
                class="size-15"
                :stroke-width="1.25"
                aria-hidden="true"
              />
            </span>
            <strong>{{ item.title }}</strong>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

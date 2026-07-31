<script setup lang="ts">
import { publishFinalCtaSection } from '@/data/publish-page'
import ctaImage from '~/assets/images/publier/livres-et-stylos.avif'

const section = publishFinalCtaSection
</script>

<template>
  <section
    class="publish-final-cta publish-section"
    aria-labelledby="publish-final-cta-heading"
  >
    <div class="page-container publish-final-cta__inner">
      <div
        class="publish-final-cta__card"
        :style="{ '--publish-final-cta-bg': `url(${ctaImage})` }"
      >
        <div
          class="publish-final-cta__backdrop"
          aria-hidden="true"
        />
        <div
          class="publish-final-cta__overlay"
          aria-hidden="true"
        />

        <div class="publish-final-cta__body">
          <div class="publish-final-cta__copy">
            <h2
              id="publish-final-cta-heading"
              class="publish-final-cta__title"
            >
              {{ section.title }}
            </h2>

            <p class="publish-final-cta__subtitle">
              {{ section.subtitle }}
            </p>
          </div>

          <div class="publish-final-cta__actions">
            <NuxtLink
              :to="section.primaryCta.href"
              class="publish-final-cta__cta publish-final-cta__cta--primary"
            >
              {{ section.primaryCta.label }}
            </NuxtLink>

            <NuxtLink
              :to="section.secondaryCta.href"
              class="publish-final-cta__cta publish-final-cta__cta--secondary"
            >
              {{ section.secondaryCta.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

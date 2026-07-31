<script setup lang="ts">
import { Headphones } from 'lucide-vue-next'
import {
  contactAdvisorHeroHighlights,
  contactAdvisorImages,
} from '@/data/contact-advisor'
</script>

<template>
  <section
    class="contact-advisor-hero"
    aria-labelledby="contact-advisor-hero-heading"
  >
    <img
      :src="contactAdvisorImages.hero"
      alt=""
      class="contact-advisor-hero__bg"
      width="1600"
      height="900"
      aria-hidden="true"
    >
    <div
      class="contact-advisor-hero__veil"
      aria-hidden="true"
    />

    <div class="page-container contact-advisor-hero__inner">
      <div class="contact-advisor-hero__copy">
        <p class="contact-advisor-hero__badge">
          <Headphones
            class="size-3.5"
            :stroke-width="1.25"
            aria-hidden="true"
          />
          Contact
        </p>
        <h1 id="contact-advisor-hero-heading">
          Contactez un conseiller institutions
        </h1>
        <p class="contact-advisor-hero__lead">
          Échangez avec un spécialiste pour obtenir des conseils, préparer votre commande ou demander un devis personnalisé.
        </p>
        <ul class="contact-advisor-hero__highlights">
          <li
            v-for="item in contactAdvisorHeroHighlights"
            :key="item.id"
          >
            <component
              :is="item.icon"
              class="contact-advisor-hero__highlight-icon"
              :stroke-width="1.25"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

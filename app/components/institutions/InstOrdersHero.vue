<script setup lang="ts">
import { institutionalOrdersImages } from '@/data/institutional-orders'

const heroStyle = {
  '--inst-orders-hero-bg': `url(${institutionalOrdersImages.hero})`,
}
</script>

<template>
  <section
    class="inst-orders-hero"
    :style="heroStyle"
    aria-labelledby="inst-orders-hero-heading"
  >
    <div
      class="inst-orders-hero__backdrop"
      aria-hidden="true"
    />
    <div
      class="inst-orders-hero__overlay"
      aria-hidden="true"
    />

    <div class="page-container inst-orders-hero__inner">
      <div class="inst-orders-hero__copy">
        <p class="inst-orders-hero__brand">
          <span
            class="inst-orders-hero__brand-mark"
            aria-hidden="true"
          >A</span>
          Afric-Educ
        </p>
        <h1
          id="inst-orders-hero-heading"
          class="inst-orders-hero__title"
        >
          Commandes institutionnelles
        </h1>
        <p class="inst-orders-hero__lead">
          Équipez bibliothèques, écoles et organisations avec un catalogue africain riche, des remises volume et un accompagnement dédié — simple, rapide, adapté aux grands volumes.
        </p>
        <div class="inst-orders-hero__actions">
          <NuxtLink
            to="/partenaires/bibliotheques/devis"
            class="inst-orders-btn inst-orders-btn--primary"
          >
            Demander un devis
          </NuxtLink>
          <NuxtLink
            to="/partenaires/services/contact"
            class="inst-orders-btn inst-orders-btn--secondary"
          >
            Contacter un conseiller
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

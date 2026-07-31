<script setup lang="ts">
import { institutionalServices } from '@/data/institutional-orders'

/** Double the list for a seamless infinite marquee */
const marqueeItems = [...institutionalServices, ...institutionalServices]
</script>

<template>
  <div
    class="inst-orders-services"
    role="region"
    aria-label="Services supplémentaires"
  >
    <article
      class="inst-orders-services__spotlight"
      aria-label="Services institutionnels Afric-Educ"
    >
      <div
        class="inst-orders-services__spotlight-blur"
        aria-hidden="true"
      />
      <div class="inst-orders-services__spotlight-body">
        <p class="inst-orders-services__spotlight-eyebrow">
          Services institutionnels
        </p>
        <h3 class="inst-orders-services__spotlight-title">
          Votre partenaire de confiance
        </h3>
      </div>
    </article>

    <div class="inst-orders-services__viewport">
      <ul class="inst-orders-services__track">
        <li
          v-for="(service, index) in marqueeItems"
          :key="`${service.id}-${index}`"
          class="inst-orders-services__item"
        >
          <img
            :src="service.image"
            :alt="service.label"
            class="inst-orders-services__photo"
            width="300"
            height="250"
            loading="lazy"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

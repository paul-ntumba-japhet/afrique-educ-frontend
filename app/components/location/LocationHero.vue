<script setup lang="ts">
import { ArrowRight, Play } from 'lucide-vue-next'
import heroImage from '~/assets/images/location/hero.png'

const emit = defineEmits<{
  explore: []
  howItWorks: []
}>()

const heroStyle = {
  backgroundImage: `url(${heroImage})`,
}
</script>

<template>
  <section
    class="location-hero"
    :style="heroStyle"
    aria-labelledby="location-hero-heading"
  >
    <div
      class="location-hero__overlay"
      aria-hidden="true"
    />
    <div class="page-container location-hero__inner">
      <div class="location-hero__copy">
        <p class="location-hero__eyebrow">
          Prêt &amp; location
        </p>
        <h1 id="location-hero-heading">
          Empruntez, louez ou partagez vos livres en toute simplicité.
        </h1>
        <p class="location-hero__lead">
          Accédez à des milliers de livres numériques ou papier pour une durée adaptée à vos besoins.
        </p>
        <div class="location-hero__actions">
          <button
            type="button"
            class="location-btn location-btn--primary"
            @click="emit('explore')"
          >
            Explorer les livres
            <ArrowRight
              class="size-4"
              :stroke-width="2"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            class="location-btn location-btn--ghost"
            @click="emit('howItWorks')"
          >
            <span
              class="location-btn__play"
              aria-hidden="true"
            >
              <Play
                class="size-3.5"
                :stroke-width="2"
              />
            </span>
            Comment ça fonctionne ?
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

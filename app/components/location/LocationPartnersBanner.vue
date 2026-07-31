<script setup lang="ts">
import sectionCarteImage from '~/assets/images/location/section-carte.png'
</script>

<template>
  <section
    class="location-partners"
    aria-labelledby="location-partners-heading"
  >
    <div class="page-container">
      <h2
        id="location-partners-heading"
        class="sr-only"
      >
        Un réseau de bibliothèques partenaires à travers l’Afrique
      </h2>
      <figure class="location-partners__figure">
        <img
          :src="sectionCarteImage"
          alt="Carte de l’Afrique avec un réseau de bibliothèques partenaires : 120+ bibliothèques, 50 000+ livres accessibles, 5+ pays couverts"
          class="location-partners__image"
          width="1400"
          height="480"
          loading="lazy"
          decoding="async"
        >
      </figure>
    </div>
  </section>
</template>

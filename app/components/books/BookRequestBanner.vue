<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="books-request-banner"
    aria-labelledby="books-request-heading"
  >
    <div class="page-container books-request-banner__inner">
      <div class="books-request-banner__content">
        <h2
          id="books-request-heading"
          class="books-request-banner__title"
        >
          Vous ne trouvez pas votre livre ?
        </h2>
        <p class="books-request-banner__text">
          Demandez-le à notre équipe ou proposez une référence à ajouter à notre catalogue.
        </p>
      </div>
      <NuxtLink
        to="/contact?objet=demande-livre"
        class="books-request-banner__cta"
      >
        Demander un livre
        <ChevronRight
          class="size-4"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </section>
</template>

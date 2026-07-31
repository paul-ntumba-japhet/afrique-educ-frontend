<script setup lang="ts">
import { Headphones } from 'lucide-vue-next'
</script>

<template>
  <section
    class="library-subscriptions-closing"
    aria-labelledby="library-subscriptions-closing-heading"
  >
    <div class="page-container">
      <div class="library-subscriptions-closing__panel">
        <h2 id="library-subscriptions-closing-heading">
          Choisissez la formule qui accompagnera votre prochaine réussite.
        </h2>

        <div class="library-subscriptions-closing__actions">
          <NuxtLink
            to="/inscription"
            class="library-subscriptions-closing__cta library-subscriptions-closing__cta--light"
          >
            Commencer gratuitement
          </NuxtLink>
          <NuxtLink
            to="/partenaires/services/contact"
            class="library-subscriptions-closing__cta"
          >
            <Headphones class="size-4" :stroke-width="1.5" aria-hidden="true" />
            Contacter un conseiller
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

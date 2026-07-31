<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import InstOrdersAudience from '~/components/institutions/InstOrdersAudience.vue'
import InstOrdersClosing from '~/components/institutions/InstOrdersClosing.vue'
import InstOrdersFaq from '~/components/institutions/InstOrdersFaq.vue'
import InstOrdersHero from '~/components/institutions/InstOrdersHero.vue'
import InstOrdersReasons from '~/components/institutions/InstOrdersReasons.vue'
import InstOrdersSearch from '~/components/institutions/InstOrdersSearch.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Commandes institutionnelles — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Commandez des livres africains en volume pour bibliothèques, écoles, universités et organisations. Devis, remises dégressives et accompagnement dédié.',
    },
  ],
})
</script>

<template>
  <div class="inst-orders-page">
    <AppHeader />
    <main class="inst-orders-page__main">
      <InstOrdersHero />
      <InstOrdersAudience />
      <InstOrdersReasons />
      <InstOrdersSearch />
      <InstOrdersFaq />
      <InstOrdersClosing />
    </main>
    <AppFooter />
  </div>
</template>

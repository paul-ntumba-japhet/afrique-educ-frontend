<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import PodFlow from '~/components/print-on-demand/PodFlow.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Impression à la demande — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Configurez l’impression de votre livre à la demande : catalogue ou projet personnel, devis personnalisé Afric-Educ.',
    },
  ],
})
</script>

<template>
  <div class="pod-page">
    <AppHeader />
    <main class="pod-page__main">
      <PodFlow />
    </main>
    <AppFooter />
  </div>
</template>

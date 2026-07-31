<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import PodSpecifications from '~/components/print-on-demand/PodSpecifications.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Spécifications techniques — Impression à la demande — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Préparez vos fichiers d’impression à la demande : formats, papier, reliure, fonds perdus, résolution CMJN et fichier PDF.',
    },
  ],
})
</script>

<template>
  <div class="pod-page pod-page--specs">
    <AppHeader />
    <main class="pod-page__main">
      <PodSpecifications />
    </main>
    <AppFooter />
  </div>
</template>

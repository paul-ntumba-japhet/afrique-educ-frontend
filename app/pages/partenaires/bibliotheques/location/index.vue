<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import LocationHero from '~/components/location/LocationHero.vue'
import LocationSearchBar from '~/components/location/LocationSearchBar.vue'
import LocationHowItWorks from '~/components/location/LocationHowItWorks.vue'
import LocationBooks from '~/components/location/LocationBooks.vue'
import LocationAccessModes from '~/components/location/LocationAccessModes.vue'
import LocationPartnersBanner from '~/components/location/LocationPartnersBanner.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Prêt & location — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Empruntez, louez ou partagez vos livres numériques et papier. Accédez à un catalogue africain via bibliothèques partenaires.',
    },
  ],
})

function scrollToBooks() {
  document.getElementById('livres')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToHowItWorks() {
  document.getElementById('comment-ca-fonctionne')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onSearch() {
  scrollToBooks()
}
</script>

<template>
  <div class="location-page">
    <AppHeader />
    <main class="location-page__main">
      <LocationHero
        @explore="scrollToBooks"
        @how-it-works="scrollToHowItWorks"
      />
      <LocationSearchBar @search="onSearch" />
      <LocationHowItWorks />
      <LocationBooks />
      <LocationAccessModes />
      <LocationPartnersBanner />
    </main>
    <AppFooter />
  </div>
</template>

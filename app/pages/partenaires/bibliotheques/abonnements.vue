<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import LibrarySubscriptionsHero from '~/components/library-subscriptions/LibrarySubscriptionsHero.vue'
import LibrarySubscriptionsPlans from '~/components/library-subscriptions/LibrarySubscriptionsPlans.vue'
import LibrarySubscriptionsOffers from '~/components/library-subscriptions/LibrarySubscriptionsOffers.vue'
import LibrarySubscriptionsClosing from '~/components/library-subscriptions/LibrarySubscriptionsClosing.vue'
import type { SubscriptionAudience } from '@/data/library-subscriptions'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Packs & abonnements — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez les packs et abonnements Afric-Educ pour lecteurs, auteurs, bibliothèques, écoles et institutions.',
    },
  ],
})

const audience = ref<SubscriptionAudience>('individuals')
</script>

<template>
  <div class="library-subscriptions-page">
    <AppHeader />
    <main class="library-subscriptions-page__main">
      <LibrarySubscriptionsHero v-model:audience="audience" />
      <LibrarySubscriptionsPlans :audience="audience" />
      <LibrarySubscriptionsOffers />
      <LibrarySubscriptionsClosing />
    </main>
    <AppFooter />
  </div>
</template>

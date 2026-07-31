<script setup lang="ts">
import AuthorsAside from '~/components/authors/AuthorsAside.vue'
import AuthorsDiscoverSection from '~/components/authors/AuthorsDiscoverSection.vue'
import AuthorsFaqSection from '~/components/authors/AuthorsFaqSection.vue'
import AuthorsHero from '~/components/authors/AuthorsHero.vue'
import AuthorsInsightsSection from '~/components/authors/AuthorsInsightsSection.vue'
import AuthorsPublishCtaSection from '~/components/authors/AuthorsPublishCtaSection.vue'
import AppHeader from '~/components/layout/AppHeader.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Auteurs — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les auteurs qui façonnent la littérature africaine de demain. Explorez parcours, bibliographies et univers d’écrivains de toute l’Afrique et de la diaspora.',
    },
  ],
})

const mobileAsideOpen = ref(false)
</script>

<template>
  <div class="authors-page">
    <AppHeader />

    <div class="authors-page__body">
      <button
        type="button"
        class="authors-page__aside-toggle"
        :aria-expanded="mobileAsideOpen"
        aria-controls="authors-aside-panel"
        @click="mobileAsideOpen = !mobileAsideOpen"
      >
        Menu auteurs
      </button>

      <div
        v-if="mobileAsideOpen"
        class="authors-page__aside-backdrop"
        aria-hidden="true"
        @click="mobileAsideOpen = false"
      />

      <aside
        id="authors-aside-panel"
        class="authors-page__aside"
        :class="{ 'authors-page__aside--open': mobileAsideOpen }"
      >
        <AuthorsAside />
      </aside>

      <main class="authors-page__main">
        <AuthorsHero />
        <AuthorsDiscoverSection />
        <AuthorsInsightsSection />
        <AuthorsPublishCtaSection />
        <AuthorsFaqSection />
      </main>
    </div>
  </div>
</template>

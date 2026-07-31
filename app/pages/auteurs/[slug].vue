<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AuthorProfileAbout from '~/components/authors/profile/AuthorProfileAbout.vue'
import AuthorProfileAside from '~/components/authors/profile/AuthorProfileAside.vue'
import AuthorProfileBooks from '~/components/authors/profile/AuthorProfileBooks.vue'
import AuthorProfileHero from '~/components/authors/profile/AuthorProfileHero.vue'
import AuthorProfileMedia from '~/components/authors/profile/AuthorProfileMedia.vue'
import AuthorProfileMetrics from '~/components/authors/profile/AuthorProfileMetrics.vue'
import AuthorProfileNewsletter from '~/components/authors/profile/AuthorProfileNewsletter.vue'
import AuthorProfileReviews from '~/components/authors/profile/AuthorProfileReviews.vue'
import { getAuthorProfile } from '@/data/author-profile'

definePageMeta({
  layout: false,
})

const route = useRoute()
const profile = getAuthorProfile(String(route.params.slug ?? ''))

if (!profile) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Auteur introuvable',
  })
}

useHead({
  title: `${profile.name} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: profile.bio,
    },
  ],
})

const mobileAsideOpen = ref(false)
const activeNavId = ref('apercu')

function onNavigate(id: string) {
  activeNavId.value = id
  mobileAsideOpen.value = false
}
</script>

<template>
  <div class="author-profile-page">
    <AppHeader />

    <div class="author-profile-page__body">
      <button
        type="button"
        class="author-profile-page__aside-toggle"
        :aria-expanded="mobileAsideOpen"
        aria-controls="author-profile-aside"
        @click="mobileAsideOpen = !mobileAsideOpen"
      >
        Menu profil
      </button>

      <div
        v-if="mobileAsideOpen"
        class="author-profile-page__aside-backdrop"
        aria-hidden="true"
        @click="mobileAsideOpen = false"
      />

      <div
        id="author-profile-aside"
        class="author-profile-page__aside"
        :class="{ 'author-profile-page__aside--open': mobileAsideOpen }"
      >
        <AuthorProfileAside
          :active-id="activeNavId"
          @navigate="onNavigate"
        />
      </div>

      <main class="author-profile-page__main">
        <div class="page-container author-profile-page__container">
          <AuthorProfileHero />
          <AuthorProfileMetrics />
          <AuthorProfileAbout />
          <AuthorProfileBooks />
          <AuthorProfileMedia />
          <AuthorProfileReviews />
          <AuthorProfileNewsletter />
        </div>
      </main>
    </div>
  </div>
</template>

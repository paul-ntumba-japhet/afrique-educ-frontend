<script setup lang="ts">
import { Mail, Plus, BookOpen } from 'lucide-vue-next'
import { authorProfile } from '@/data/author-profile'

const following = ref(false)

function toggleFollow() {
  following.value = !following.value
}
</script>

<template>
  <section
    id="apercu"
    class="author-profile-hero"
    aria-labelledby="author-profile-name"
  >
    <nav
      class="author-profile-hero__breadcrumbs"
      aria-label="Fil d'Ariane"
    >
      <ol class="author-profile-hero__crumb-list">
        <li>
          <NuxtLink to="/">
            Accueil
          </NuxtLink>
        </li>
        <li aria-hidden="true">
          ›
        </li>
        <li>
          <NuxtLink to="/auteurs">
            Auteurs
          </NuxtLink>
        </li>
        <li aria-hidden="true">
          ›
        </li>
        <li aria-current="page">
          {{ authorProfile.name }}
        </li>
      </ol>
    </nav>

    <div class="author-profile-hero__main">
      <div class="author-profile-hero__identity">
        <div class="author-profile-hero__avatar-wrap">
          <img
            :src="authorProfile.portrait"
            :alt="`Portrait de ${authorProfile.name}`"
            class="author-profile-hero__avatar"
            width="160"
            height="160"
          >
          <span
            v-if="authorProfile.verified"
            class="author-profile-hero__badge"
          >Vérifié</span>
        </div>

        <div class="author-profile-hero__copy">
          <h1
            id="author-profile-name"
            class="author-profile-hero__name"
          >
            {{ authorProfile.name }}
          </h1>
          <p class="author-profile-hero__roles">
            <img
              :src="authorProfile.flagSrc"
              alt=""
              class="author-profile-hero__flag"
              width="20"
              height="15"
            >
            {{ authorProfile.roles }}
          </p>
          <blockquote class="author-profile-hero__quote">
            « {{ authorProfile.quote }} »
          </blockquote>
        </div>
      </div>

      <ul
        class="author-profile-hero__stats"
        aria-label="Indicateurs clés"
      >
        <li
          v-for="stat in authorProfile.heroStats"
          :key="stat.id"
          class="author-profile-hero__stat"
        >
          <component
            :is="stat.icon"
            class="author-profile-hero__stat-icon"
            aria-hidden="true"
          />
          <span class="author-profile-hero__stat-value">{{ stat.value }}</span>
          <span class="author-profile-hero__stat-label">{{ stat.label }}</span>
        </li>
      </ul>

      <div class="author-profile-hero__actions">
        <button
          type="button"
          class="author-profile-hero__btn author-profile-hero__btn--primary"
          :aria-pressed="following"
          @click="toggleFollow"
        >
          <Plus
            class="size-4"
            aria-hidden="true"
          />
          {{ following ? 'Suivi' : 'Suivre' }}
        </button>
        <a
          href="mailto:contact@afric-educ.com"
          class="author-profile-hero__btn author-profile-hero__btn--ghost"
        >
          <Mail
            class="size-4"
            aria-hidden="true"
          />
          Contacter
        </a>
        <a
          href="#livres"
          class="author-profile-hero__btn author-profile-hero__btn--ghost"
        >
          <BookOpen
            class="size-4"
            aria-hidden="true"
          />
          Tous les livres
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Feather, Users } from 'lucide-vue-next'
import heroBackground from '~/assets/images/auteurs/hero-page-auteurs-min.png'
import { authorsHeroStats } from '@/data/authors-page'

function scrollToAuthors() {
  const target = document.getElementById('auteurs-contenu')
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section
    class="authors-hero"
    aria-labelledby="authors-hero-heading"
  >
    <div class="authors-hero__stage">
      <img
        :src="heroBackground"
        alt=""
        class="authors-hero__bg"
        width="1600"
        height="900"
        aria-hidden="true"
      >

      <div
        class="authors-hero__overlay"
        aria-hidden="true"
      />

      <div class="page-container authors-hero__inner">
        <div class="authors-hero__copy">
          <h1
            id="authors-hero-heading"
            class="authors-hero__title"
          >
            Découvrez les auteurs qui façonnent la
            <em class="authors-hero__title-accent">littérature africaine</em>
            de demain.
          </h1>

          <p class="authors-hero__lead">
            Explorez les parcours, les bibliographies et les univers d’écrivains venus de toute l’Afrique et de la diaspora.
          </p>

          <div class="authors-hero__actions">
            <button
              type="button"
              class="authors-hero__btn authors-hero__btn--primary"
              @click="scrollToAuthors"
            >
              <Users
                class="authors-hero__btn-icon"
                aria-hidden="true"
              />
              Explorer les auteurs
            </button>
            <NuxtLink
              to="/publier"
              class="authors-hero__btn authors-hero__btn--secondary"
            >
              <Feather
                class="authors-hero__btn-icon"
                aria-hidden="true"
              />
              Devenir auteur
            </NuxtLink>
          </div>
        </div>

        <div class="authors-hero__stats-card">
          <ul
            class="authors-hero__stats"
            aria-label="Chiffres clés"
          >
            <li
              v-for="stat in authorsHeroStats"
              :key="stat.id"
              class="authors-hero__stat"
            >
              <span class="authors-hero__stat-icon">
                <component
                  :is="stat.icon"
                  class="size-4"
                  aria-hidden="true"
                />
              </span>
              <div class="authors-hero__stat-body">
                <p class="authors-hero__stat-value">
                  {{ stat.value }}
                </p>
                <p class="authors-hero__stat-label">
                  {{ stat.label }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <AuthorsSearchBar />
  </section>
</template>

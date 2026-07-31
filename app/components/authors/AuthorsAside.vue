<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import asideIllustration from '~/assets/images/auteurs/auteur-aside-min.png'
import {
  authorsAsideActionLinks,
  authorsAsidePrimaryLinks,
  authorsAsideQuote,
  authorsAsideTaxonomyLinks,
} from '@/data/authors-page'

const route = useRoute()

function isActive(href: string) {
  if (href === '/auteurs')
    return route.path === '/auteurs' && !route.query.filtre && !route.query.vue

  const [path, queryString] = href.split('?')
  if (route.path !== path)
    return false

  if (!queryString)
    return Object.keys(route.query).length === 0

  const params = new URLSearchParams(queryString)
  return [...params.entries()].every(([key, value]) => route.query[key] === value)
}
</script>

<template>
  <aside
    class="authors-aside"
    aria-label="Navigation auteurs"
  >
    <div class="authors-aside__brand">
      <NuxtLink
        to="/"
        class="authors-aside__logo"
        aria-label="Afric-Educ — Accueil"
      >
        <span class="authors-aside__logo-mark" aria-hidden="true">A</span>
        <span class="authors-aside__logo-text">
          <span class="text-gradient-gold">Afric</span><span>-Educ</span>
        </span>
      </NuxtLink>
      <p class="authors-aside__tagline">
        La littérature africaine à portée de tous
      </p>
    </div>

    <nav class="authors-aside__nav">
      <ul class="authors-aside__list">
        <li
          v-for="link in authorsAsidePrimaryLinks"
          :key="link.id"
        >
          <NuxtLink
            :to="link.href"
            class="authors-aside__link"
            :class="{ 'authors-aside__link--active': isActive(link.href) }"
          >
            <component
              :is="link.icon"
              class="authors-aside__link-icon"
              aria-hidden="true"
            />
            <span>{{ link.label }}</span>
            <ChevronRight
              v-if="isActive(link.href)"
              class="authors-aside__link-chevron"
              aria-hidden="true"
            />
          </NuxtLink>
        </li>
      </ul>

      <div
        class="authors-aside__divider"
        aria-hidden="true"
      />

      <ul class="authors-aside__list">
        <li
          v-for="link in authorsAsideTaxonomyLinks"
          :key="link.id"
        >
          <NuxtLink
            :to="link.href"
            class="authors-aside__link"
            :class="{ 'authors-aside__link--active': isActive(link.href) }"
          >
            <component
              :is="link.icon"
              class="authors-aside__link-icon"
              aria-hidden="true"
            />
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>

      <div
        class="authors-aside__divider"
        aria-hidden="true"
      />

      <ul class="authors-aside__list">
        <li
          v-for="link in authorsAsideActionLinks"
          :key="link.id"
        >
          <NuxtLink
            :to="link.href"
            class="authors-aside__link"
            :class="{ 'authors-aside__link--active': isActive(link.href) }"
          >
            <component
              :is="link.icon"
              class="authors-aside__link-icon"
              aria-hidden="true"
            />
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="authors-aside__promo">
      <blockquote class="authors-aside__quote">
        <span
          class="authors-aside__quote-mark"
          aria-hidden="true"
        >“</span>
        <p class="authors-aside__quote-text">
          {{ authorsAsideQuote.text }}
        </p>
        <footer class="authors-aside__quote-author">
          — {{ authorsAsideQuote.author }}
        </footer>
      </blockquote>

      <div class="authors-aside__visual">
        <img
          :src="asideIllustration"
          alt=""
          class="authors-aside__illustration"
          width="280"
          height="280"
          loading="lazy"
          aria-hidden="true"
        >
      </div>

      <Button
        as-child
        class="authors-aside__cta shadow-glow-gold"
      >
        <NuxtLink to="/publier">
          Devenir auteur
        </NuxtLink>
      </Button>
    </div>
  </aside>
</template>

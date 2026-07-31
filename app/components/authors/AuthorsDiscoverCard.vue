<script setup lang="ts">
import { BadgeCheck, BookOpen, Eye, Star, Users } from 'lucide-vue-next'
import type { AuthorsDiscoverAuthor } from '@/data/authors-page'

const props = defineProps<{
  author: AuthorsDiscoverAuthor
}>()

const following = ref(false)

const badgeLabel = computed(() =>
  props.author.badge === 'verified' ? 'vérifié' : 'Auteur populaire',
)

const profileHref = computed(() => `/auteurs/${props.author.slug}`)

const stats = computed(() => [
  { icon: BookOpen, value: props.author.books, label: 'Livres' },
  { icon: Eye, value: props.author.readers, label: 'Lecteurs' },
  { icon: Users, value: props.author.followers, label: 'Abonnés' },
])

function toggleFollow() {
  following.value = !following.value
}
</script>

<template>
  <article class="authors-discover-card">
    <span
      class="authors-discover-card__badge"
      :class="`authors-discover-card__badge--${author.badge}`"
    >
      <BadgeCheck
        v-if="author.badge === 'verified'"
        class="authors-discover-card__badge-icon"
        aria-hidden="true"
      />
      {{ badgeLabel }}
    </span>

    <img
      :src="author.avatar"
      :alt="`Portrait de ${author.name}`"
      class="authors-discover-card__avatar"
      width="120"
      height="120"
      loading="lazy"
    >

    <h3 class="authors-discover-card__name">
      {{ author.name }}
    </h3>

    <p class="authors-discover-card__meta">
      <span aria-hidden="true">{{ author.flag }}</span>
      {{ author.country }} • {{ author.role }}
    </p>

    <ul
      class="authors-discover-card__stats"
      aria-label="Statistiques auteur"
    >
      <li
        v-for="stat in stats"
        :key="stat.label"
        class="authors-discover-card__stat"
      >
        <component
          :is="stat.icon"
          class="authors-discover-card__stat-icon"
          aria-hidden="true"
        />
        <span class="authors-discover-card__stat-value">{{ stat.value }}</span>
        <span class="authors-discover-card__stat-label">{{ stat.label }}</span>
      </li>
    </ul>

    <p class="authors-discover-card__rating">
      <Star
        class="authors-discover-card__rating-star"
        aria-hidden="true"
      />
      <span>{{ author.rating }}</span>
      <span class="authors-discover-card__rating-count">({{ author.reviews }})</span>
    </p>

    <p class="authors-discover-card__quote">
      « {{ author.quote }} »
    </p>

    <div class="authors-discover-card__actions">
      <NuxtLink
        :to="profileHref"
        class="authors-discover-card__btn authors-discover-card__btn--ghost"
      >
        Voir le profil
      </NuxtLink>
      <button
        type="button"
        class="authors-discover-card__btn authors-discover-card__btn--primary"
        :aria-pressed="following"
        @click="toggleFollow"
      >
        {{ following ? 'Suivi' : 'Suivre' }}
      </button>
    </div>
  </article>
</template>

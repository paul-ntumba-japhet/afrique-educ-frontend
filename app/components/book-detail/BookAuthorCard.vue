<script setup lang="ts">
import type { BookDetailAuthorProfile } from '@/data/book-detail-page'
import {
  BadgeCheck,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-vue-next'

defineProps<{
  author: BookDetailAuthorProfile
}>()

const isFollowing = ref(false)

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const
</script>

<template>
  <article
    class="book-detail-profile-card book-detail-profile-card--author"
    aria-label="Profil de l'auteur"
  >
    <div class="book-detail-author__prose">
      <img
        :src="author.avatar"
        :alt="`Portrait de ${author.name}`"
        class="book-detail-author__avatar"
        loading="lazy"
        decoding="async"
      >

      <div class="book-detail-author__header">
        <h2 class="book-detail-author__name">
          {{ author.name }}
        </h2>
        <BadgeCheck
          v-if="author.verified"
          class="book-detail-author__verified"
          aria-label="Auteur vérifié"
        />
      </div>

      <p class="book-detail-author__description">
        {{ author.description }}
      </p>
      <p class="book-detail-author__bio">
        {{ author.biography }}
      </p>
      <p class="book-detail-author__extended">
        {{ author.extendedDescription }}
      </p>
    </div>

    <dl class="book-detail-author__stats">
      <div
        v-for="stat in author.stats"
        :key="stat.id"
        class="book-detail-author__stat"
      >
        <dt class="sr-only">
          {{ stat.label }}
        </dt>
        <dd class="book-detail-author__stat-value">
          <span class="book-detail-author__stat-number">{{ stat.value }}</span>
          <span class="book-detail-author__stat-label">{{ stat.label }}</span>
        </dd>
      </div>
    </dl>

    <div class="book-detail-author__actions">
      <NuxtLink
        :to="`/auteurs/${author.slug}`"
        class="book-detail-author__btn book-detail-author__btn--outline"
      >
        {{ author.profileLabel }}
      </NuxtLink>
      <button
        type="button"
        class="book-detail-author__btn book-detail-author__btn--gold"
        :class="{ 'book-detail-author__btn--following': isFollowing }"
        :aria-pressed="isFollowing"
        @click="isFollowing = !isFollowing"
      >
        {{ isFollowing ? author.followingLabel : author.followLabel }}
      </button>
    </div>

    <div
      class="book-detail-author__social"
      aria-label="Réseaux sociaux de l'auteur"
    >
      <a
        v-for="link in author.socialLinks"
        :key="link.network"
        :href="link.href"
        class="book-detail-author__social-link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.label"
      >
        <component
          :is="socialIconMap[link.network as keyof typeof socialIconMap]"
          v-if="link.network !== 'x' && link.network !== 'pinterest'"
          class="book-detail-author__social-icon"
          aria-hidden="true"
        />
        <span
          v-else-if="link.network === 'x'"
          class="book-detail-author__social-x"
          aria-hidden="true"
        >X</span>
        <span
          v-else
          class="book-detail-author__social-pinterest"
          aria-hidden="true"
        >P</span>
      </a>
    </div>
  </article>
</template>

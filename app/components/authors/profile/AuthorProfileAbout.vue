<script setup lang="ts">
import { authorProfile } from '@/data/author-profile'

const expanded = ref(false)
</script>

<template>
  <section
    id="apropos"
    class="author-profile-about"
    aria-labelledby="author-about-heading"
  >
    <div class="author-profile-about__grid">
      <div class="author-profile-about__bio-col">
        <h2
          id="author-about-heading"
          class="author-profile-about__title"
        >
          À propos de l'auteur
        </h2>
        <p class="author-profile-about__bio">
          {{ authorProfile.bio }}
          <button
            type="button"
            class="author-profile-about__more"
            @click="expanded = !expanded"
          >
            {{ expanded ? 'Réduire' : 'Lire la suite' }}
          </button>
        </p>
        <p
          v-if="expanded"
          class="author-profile-about__bio author-profile-about__bio--extra"
        >
          Engageé dans la transmission culturelle, il collabore avec des écoles, universités et festivals littéraires pour faire rayonner les récits du continent.
        </p>

        <ul class="author-profile-about__facts">
          <li
            v-for="fact in authorProfile.facts"
            :key="fact.id"
            class="author-profile-about__fact"
          >
            <span
              class="author-profile-about__fact-icon"
              aria-hidden="true"
            >
              <component
                :is="fact.icon"
                class="size-5"
              />
            </span>
            <span class="author-profile-about__fact-text">
              <span class="author-profile-about__fact-label">{{ fact.label }}</span>
              <a
                v-if="fact.href"
                :href="fact.href"
                class="author-profile-about__fact-value author-profile-about__fact-value--link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ fact.value }}</a>
              <span
                v-else
                class="author-profile-about__fact-value"
              >{{ fact.value }}</span>
            </span>
          </li>
        </ul>
      </div>

      <figure class="author-profile-about__portrait">
        <img
          :src="authorProfile.portraitAbout"
          :alt="`${authorProfile.name} à son bureau`"
          class="author-profile-about__portrait-img"
          width="420"
          height="520"
          loading="lazy"
        >
        <figcaption class="author-profile-about__signature">
          M. Makengo
        </figcaption>
      </figure>

      <div
        id="parcours"
        class="author-profile-about__timeline-col"
      >
        <h2 class="author-profile-about__title">
          Parcours de l'auteur
        </h2>
        <ol class="author-profile-about__timeline">
          <li
            v-for="step in authorProfile.timeline"
            :key="step.year"
            class="author-profile-about__timeline-item"
          >
            <span class="author-profile-about__timeline-dot" aria-hidden="true" />
            <span class="author-profile-about__timeline-year">{{ step.year }}</span>
            <span class="author-profile-about__timeline-label">{{ step.label }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

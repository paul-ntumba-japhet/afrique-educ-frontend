<script setup lang="ts">
import { ShoppingCart, Sprout, UserPlus } from 'lucide-vue-next'
import ctaVisual from '~/assets/images/auteurs/publier_gratuitement-min.png'

const features = [
  { id: 'space', lines: ['Créez votre', 'espace auteur'], icon: UserPlus },
  { id: 'community', lines: ['Développez votre', 'communauté'], icon: Sprout },
  { id: 'sell', lines: ['Vendez dans', 'toute l\'Afrique'], icon: ShoppingCart },
] as const

const cardStyle = {
  '--authors-publish-cta-bg': `url(${ctaVisual})`,
}
</script>

<template>
  <section
    class="authors-publish-cta"
    aria-labelledby="authors-publish-cta-heading"
  >
    <div class="page-container">
      <div
        class="authors-publish-cta__card"
        :style="cardStyle"
      >
        <div
          class="authors-publish-cta__backdrop"
          aria-hidden="true"
        />
        <div
          class="authors-publish-cta__overlay"
          aria-hidden="true"
        />

        <div class="authors-publish-cta__body">
          <div class="authors-publish-cta__copy">
            <h2
              id="authors-publish-cta-heading"
              class="authors-publish-cta__title"
            >
              Publiez
              <em class="authors-publish-cta__title-accent">votre</em>
              premier livre gratuitement.
            </h2>

            <ul
              class="authors-publish-cta__features"
              aria-label="Avantages"
            >
              <li
                v-for="feature in features"
                :key="feature.id"
                class="authors-publish-cta__feature"
              >
                <span
                  class="authors-publish-cta__feature-icon"
                  aria-hidden="true"
                >
                  <component
                    :is="feature.icon"
                    class="size-6"
                  />
                </span>
                <span class="authors-publish-cta__feature-label">
                  <span
                    v-for="(line, index) in feature.lines"
                    :key="`${feature.id}-${index}`"
                  >{{ line }}</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="authors-publish-cta__actions">
            <NuxtLink
              to="/publier"
              class="authors-publish-cta__btn"
            >
              Créer mon espace auteur
            </NuxtLink>
            <NuxtLink
              to="/publier"
              class="authors-publish-cta__more"
            >
              En savoir plus →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Building2, Headphones, UserRound } from 'lucide-vue-next'
import type { SubscriptionAudience } from '@/data/library-subscriptions'
import {
  librarySubscriptionsHeroHighlights,
  librarySubscriptionsImages,
} from '@/data/library-subscriptions'

const audience = defineModel<SubscriptionAudience>('audience', {
  default: 'individuals',
})

const heroStyle = computed(() => ({
  backgroundImage: `url(${librarySubscriptionsImages.hero})`,
}))
</script>

<template>
  <section
    class="library-subscriptions-hero"
    :style="heroStyle"
    aria-labelledby="library-subscriptions-hero-heading"
  >
    <div class="page-container library-subscriptions-hero__inner">
      <div class="library-subscriptions-hero__copy">
        <p class="library-subscriptions-hero__badge">
          <Headphones
            class="size-3.5"
            :stroke-width="1.25"
            aria-hidden="true"
          />
          Packs & abonnements
        </p>
        <h1 id="library-subscriptions-hero-heading">
          Des offres adaptées à chaque ambition
        </h1>
        <p class="library-subscriptions-hero__lead">
          Que vous soyez lecteur passionné, auteur indépendant, bibliothèque, école ou institution, choisissez la formule qui correspond à vos besoins.
        </p>
        <ul class="library-subscriptions-hero__highlights">
          <li
            v-for="item in librarySubscriptionsHeroHighlights"
            :key="item.id"
          >
            <component
              :is="item.icon"
              class="library-subscriptions-hero__highlight-icon"
              :stroke-width="1.25"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="page-container library-subscriptions-hero__toggle-wrap">
      <div
        class="library-subscriptions-audience"
        role="tablist"
        aria-label="Type d’offre"
      >
        <button
          type="button"
          class="library-subscriptions-audience__btn"
          :class="{ 'library-subscriptions-audience__btn--active': audience === 'individuals' }"
          role="tab"
          :aria-selected="audience === 'individuals'"
          @click="audience = 'individuals'"
        >
          <UserRound
            class="size-4"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          Utilisateurs individuels
        </button>
        <button
          type="button"
          class="library-subscriptions-audience__btn"
          :class="{ 'library-subscriptions-audience__btn--active': audience === 'organizations' }"
          role="tab"
          :aria-selected="audience === 'organizations'"
          @click="audience = 'organizations'"
        >
          <Building2
            class="size-4"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          Organisations
        </button>
      </div>
    </div>
  </section>
</template>

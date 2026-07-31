<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next'
import { comparisonFeatures, thematicPacks } from '@/data/library-subscriptions'
</script>

<template>
  <section
    class="library-subscriptions-offers"
    aria-labelledby="library-subscriptions-offers-heading"
  >
    <div class="page-container library-subscriptions-offers__grid">
      <div>
        <div class="library-subscriptions-section-head">
          <p class="library-subscriptions-section-head__eyebrow">
            Packs thématiques
          </p>
          <h2 id="library-subscriptions-offers-heading">
            Des offres prêtes à déployer
          </h2>
        </div>

        <div class="library-subscriptions-packs__grid">
          <article
            v-for="pack in thematicPacks"
            :key="pack.id"
            class="library-subscriptions-pack"
            :class="`library-subscriptions-pack--${pack.id}`"
          >
            <span class="library-subscriptions-pack__icon">
              <component
                :is="pack.icon"
                class="size-5"
                :stroke-width="1.25"
                aria-hidden="true"
              />
            </span>
            <h3>{{ pack.title }}</h3>
            <p>{{ pack.description }}</p>
            <strong>{{ pack.price }}</strong>
            <NuxtLink
              :to="pack.href"
              class="library-subscriptions-pack__link"
            >
              Voir le détail
              <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
            </NuxtLink>
          </article>
        </div>
      </div>

      <div class="library-subscriptions-compare">
        <div class="library-subscriptions-section-head">
          <p class="library-subscriptions-section-head__eyebrow">
            Comparatif
          </p>
          <h2>
            Comparez les offres
          </h2>
        </div>

        <div class="library-subscriptions-compare__table-wrap">
          <table class="library-subscriptions-compare__table">
            <thead>
              <tr>
                <th>Fonctionnalités</th>
                <th class="library-subscriptions-compare__col">
                  Gratuit
                </th>
                <th class="library-subscriptions-compare__col">
                  Premium
                </th>
                <th class="library-subscriptions-compare__col">
                  Auteur Pro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonFeatures"
                :key="row.id"
              >
                <td>{{ row.label }}</td>
                <td class="library-subscriptions-compare__col">
                  <Check v-if="row.free" class="library-subscriptions-compare__check" :stroke-width="3" />
                </td>
                <td class="library-subscriptions-compare__col">
                  <Check v-if="row.premium" class="library-subscriptions-compare__check" :stroke-width="3" />
                </td>
                <td class="library-subscriptions-compare__col">
                  <Check v-if="row.pro" class="library-subscriptions-compare__check" :stroke-width="3" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

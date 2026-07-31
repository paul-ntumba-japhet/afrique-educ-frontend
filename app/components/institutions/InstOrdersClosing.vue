<script setup lang="ts">
import { ArrowRight, Check, Headphones } from 'lucide-vue-next'
import {
  institutionalClosingBenefits,
  institutionalOrdersImages,
} from '@/data/institutional-orders'
</script>

<template>
  <section
    id="contact"
    class="inst-orders-closing"
    aria-labelledby="inst-orders-closing-heading"
  >
    <div class="page-container inst-orders-closing__inner">
      <div class="inst-orders-closing__stage">
        <article class="inst-orders-closing__quote">
          <div class="inst-orders-closing__quote-copy">
            <span
              class="inst-orders-closing__icon"
              aria-hidden="true"
            >
              <Headphones
                class="size-6"
                :stroke-width="1.5"
              />
            </span>
            <h2
              id="inst-orders-closing-heading"
              class="inst-orders-closing__title"
            >
              Besoin d’un devis personnalisé ?
            </h2>
            <p class="inst-orders-closing__lead">
              Un conseiller institutions vous accompagne sur le catalogue, les volumes, les délais et la facturation.
            </p>
            <ul class="inst-orders-closing__benefits">
              <li
                v-for="item in institutionalClosingBenefits"
                :key="item"
              >
                <Check
                  class="inst-orders-closing__check"
                  :stroke-width="2"
                  aria-hidden="true"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </article>

        <div class="inst-orders-closing__media">
          <img
            :src="institutionalOrdersImages.laptop"
            alt="Tableau de bord institutions Afric-Educ sur un ordinateur portable"
            class="inst-orders-closing__image"
            width="960"
            height="720"
            loading="lazy"
          >
        </div>

        <article
          class="inst-orders-closing__space"
          aria-labelledby="inst-orders-space-heading"
        >
          <h3
            id="inst-orders-space-heading"
            class="inst-orders-closing__space-title"
          >
            Espace Institutions
          </h3>
          <p class="inst-orders-closing__space-lead">
            Gérez vos devis, commandes, livraisons et factures depuis un tableau de bord dédié à votre organisation.
          </p>
          <NuxtLink
            to="/partenaires/bibliotheques/devis"
            class="inst-orders-closing__cta"
          >
            Découvrir l’espace
            <ArrowRight
              class="size-4"
              :stroke-width="1.75"
              aria-hidden="true"
            />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

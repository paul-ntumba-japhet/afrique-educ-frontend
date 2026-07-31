<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { podHeroImage } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-hero"
    aria-labelledby="pod-hero-heading"
  >
    <div class="page-container pod-hero__inner">
      <div class="pod-hero__copy">
        <nav class="pod-hero__breadcrumb" aria-label="Fil d’Ariane">
          <NuxtLink to="/">Accueil</NuxtLink>
          <span aria-hidden="true">›</span>
          <NuxtLink to="/partenaires">Solutions</NuxtLink>
          <span aria-hidden="true">›</span>
          <span>Impression à la demande</span>
        </nav>

        <h1 id="pod-hero-heading">
          Imprimez vos livres à la demande, sans stock inutile
        </h1>
        <p class="pod-hero__lead">
          Imprimez uniquement ce dont vous avez besoin — de quelques exemplaires à plusieurs centaines —
          avec un accompagnement professionnel de la configuration à la livraison.
        </p>

        <div class="pod-hero__actions">
          <NuxtLink
            to="/partenaires/imprimeries/demande?offer=pod"
            class="pod-btn pod-btn--primary"
          >
            Demander un devis
            <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
          </NuxtLink>
          <a
            href="#pod-process"
            class="pod-btn pod-btn--ghost"
          >
            Découvrir le processus
            <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div class="pod-hero__media">
        <img
          :src="podHeroImage"
          alt="Atelier d’impression de livres"
          class="pod-hero__image"
        >
      </div>
    </div>
  </section>
</template>

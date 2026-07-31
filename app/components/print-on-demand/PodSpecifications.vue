<script setup lang="ts">
import {
  ArrowRight,
  ClipboardList,
  Download,
  Headset,
  Lightbulb,
} from 'lucide-vue-next'
import {
  podSpecificationsCards,
  podSpecificationsGuideHref,
} from '@/data/pod-specifications'
</script>

<template>
  <div class="pod-specs">
    <section class="pod-specs__hero" aria-labelledby="pod-specs-heading">
      <div class="page-container">
        <nav class="pod-specs__breadcrumb" aria-label="Fil d’Ariane">
          <NuxtLink to="/">Accueil</NuxtLink>
          <span aria-hidden="true">›</span>
          <NuxtLink to="/partenaires/imprimeries/pod">Services</NuxtLink>
          <span aria-hidden="true">›</span>
          <NuxtLink to="/partenaires/imprimeries/pod">Impression à la demande</NuxtLink>
          <span aria-hidden="true">›</span>
          <span>Spécifications techniques</span>
        </nav>

        <div class="pod-specs__intro">
          <p class="pod-specs__eyebrow">Impression à la demande</p>
          <h1 id="pod-specs-heading">Spécifications techniques</h1>
          <p class="pod-specs__lead">
            Pour un résultat optimal, veuillez préparer votre fichier en respectant les spécifications ci-dessous.
          </p>
        </div>
      </div>
    </section>

    <section class="pod-specs__grid-section" aria-label="Spécifications techniques détaillées">
      <div class="page-container">
        <div class="pod-specs__grid">
          <article
            v-for="card in podSpecificationsCards"
            :key="card.id"
            class="pod-specs__card"
          >
            <span class="pod-specs__card-icon">
              <component
                :is="card.icon"
                class="size-5"
                :stroke-width="1.35"
                aria-hidden="true"
              />
            </span>
            <h2>{{ card.title }}</h2>
            <span class="pod-specs__card-rule" aria-hidden="true" />

            <div
              v-for="(section, index) in card.sections"
              :key="`${card.id}-${index}`"
              class="pod-specs__card-block"
            >
              <p
                v-if="section.label"
                class="pod-specs__card-label"
              >
                {{ section.label }}
              </p>
              <p
                v-if="section.text"
                class="pod-specs__card-text"
              >
                {{ section.text }}
              </p>
              <ul
                v-if="section.items?.length"
                class="pod-specs__card-list"
              >
                <li
                  v-for="item in section.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <p
              v-if="card.footnote"
              class="pod-specs__card-footnote"
            >
              {{ card.footnote }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="pod-specs__banners" aria-label="Aide et demande de devis">
      <div class="page-container pod-specs__banners-inner">
        <article class="pod-specs__banner pod-specs__banner--help">
          <span class="pod-specs__banner-icon pod-specs__banner-icon--gold">
            <Lightbulb class="size-5" :stroke-width="1.4" aria-hidden="true" />
          </span>
          <div class="pod-specs__banner-copy">
            <strong>Besoin d’aide pour préparer votre fichier ?</strong>
            <p>Consultez notre guide complet ou contactez nos conseillers.</p>
          </div>
          <div class="pod-specs__banner-actions">
            <a
              :href="podSpecificationsGuideHref"
              class="pod-specs__btn pod-specs__btn--outline"
              download="guide-preparation-fichiers-afric-educ.pdf"
            >
              <Download class="size-4" :stroke-width="1.5" aria-hidden="true" />
              Télécharger le guide (PDF)
            </a>
            <NuxtLink
              to="/partenaires/services/contact"
              class="pod-specs__btn pod-specs__btn--gold"
            >
              <Headset class="size-4" :stroke-width="1.5" aria-hidden="true" />
              Contacter un conseiller
            </NuxtLink>
          </div>
        </article>

        <article class="pod-specs__banner pod-specs__banner--cta">
          <span class="pod-specs__banner-icon pod-specs__banner-icon--navy">
            <ClipboardList class="size-5" :stroke-width="1.4" aria-hidden="true" />
          </span>
          <div class="pod-specs__banner-copy">
            <strong>Prêt à imprimer votre livre ?</strong>
            <p>
              Une fois votre fichier prêt, faites votre demande d’impression et recevez votre devis personnalisé en moins de 24 h.
            </p>
          </div>
          <NuxtLink
            to="/partenaires/imprimeries/pod"
            class="pod-specs__btn pod-specs__btn--navy"
          >
            Demander un devis
            <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

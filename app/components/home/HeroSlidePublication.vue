<script setup lang="ts">
import { Award, BookOpen, Globe, ShoppingBag, Sparkles } from 'lucide-vue-next'
import mockupBook from '~/assets/images/mockups/mockup_book_4.png'
import authorPortrait from '~/assets/images/miche/michee_remove.png'

const props = defineProps<{
  slideIndex: number
  totalSlides: number
}>()

const metaItems = [
  { icon: BookOpen, label: '450 pages' },
  { icon: Award, label: 'Édition 2024' },
  { icon: Globe, label: 'Disponible en FR • EN • SW' },
] as const

const slideLabel = computed(() =>
  String(props.slideIndex + 1).padStart(2, '0'),
)

const totalLabel = computed(() =>
  String(props.totalSlides).padStart(2, '0'),
)

const progressPercent = computed(() =>
  ((props.slideIndex + 1) / props.totalSlides) * 100,
)
</script>

<template>
  <div class="hero-slide-publication">
    <div class="hero-slide-publication__content">
      <p class="hero-slide-publication__badge inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-soft-gold/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-soft-gold uppercase">
        <Sparkles
          class="size-3.5"
          aria-hidden="true"
        />
        Nouvelle publication
      </p>

      <h2
        id="hero-publication-heading"
        class="hero-slide-publication__title"
      >
        NOS TEMPÊTES
      </h2>

      <div class="hero-slide-publication__genre">
        <span class="hero-slide-publication__genre-line" aria-hidden="true" />
        <span class="hero-slide-publication__genre-label">Roman</span>
        <span class="hero-slide-publication__genre-line" aria-hidden="true" />
      </div>

      <p class="hero-slide-publication__description">
        Un roman puissant sur l'amour, la résilience et les choix qui façonnent nos destins.
        Quand les tempêtes de la vie menacent de tout emporter, l'espoir devient notre seule boussole.
      </p>

      <ul class="hero-slide-publication__meta">
        <li
          v-for="item in metaItems"
          :key="item.label"
          class="hero-slide-publication__meta-item"
        >
          <component
            :is="item.icon"
            class="hero-slide-publication__meta-icon"
            aria-hidden="true"
          />
          <span>{{ item.label }}</span>
        </li>
      </ul>

      <div class="hero-slide-publication__actions flex flex-wrap gap-3 sm:gap-4">
        <Button
          as-child
          size="lg"
          class="hero-slide-publication__cta hero-slide-publication__cta--primary shadow-glow-gold"
        >
          <NuxtLink
            to="/catalogue"
            class="inline-flex items-center gap-2"
          >
            <ShoppingBag
              class="size-4"
              aria-hidden="true"
            />
            Acheter le livre
          </NuxtLink>
        </Button>
        <Button
          as-child
          size="lg"
          variant="outline"
          class="hero-slide-publication__cta hero-slide-publication__cta--secondary border-soft-gold/35 bg-transparent text-foreground hover:bg-soft-gold/10"
        >
          <NuxtLink to="/catalogue">
            En savoir plus
          </NuxtLink>
        </Button>
      </div>

      <div class="hero-slide-publication__progress">
        <span class="hero-slide-publication__progress-label">
          {{ slideLabel }} / {{ totalLabel }}
        </span>
        <div
          class="hero-slide-publication__progress-track"
          role="progressbar"
          :aria-valuenow="slideIndex + 1"
          :aria-valuemin="1"
          :aria-valuemax="totalSlides"
          :aria-label="`Slide ${slideIndex + 1} sur ${totalSlides}`"
        >
          <span
            class="hero-slide-publication__progress-fill"
            :style="{ width: `${progressPercent}%` }"
          />
        </div>
      </div>
    </div>

    <div class="hero-slide-publication__visual">
      <img
        :src="mockupBook"
        alt="Couverture du roman Nos Tempêtes"
        class="hero-slide-publication__mockup"
        width="640"
        height="800"
        loading="lazy"
      >
    </div>

    <aside class="hero-slide-publication__author">
      <div class="hero-slide-publication__author-portrait">
        <img
          :src="authorPortrait"
          alt="Portrait de Mafua Michée Makengo"
          class="hero-slide-publication__author-photo"
          width="120"
          height="120"
          loading="lazy"
        >
      </div>
      <p class="hero-slide-publication__author-name">
        Mafua Michée Makengo
      </p>
      <p class="hero-slide-publication__author-role">
        Auteur
      </p>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  PenTool,
  Printer,
  Sparkles,
  Users,
} from 'lucide-vue-next'
import {
  comingSoonAudiences,
  comingSoonCopy,
  comingSoonFeatures,
} from '@/data/coming-soon'
import heroBackground from '~/assets/images/compte-rebours.png'
import avatar1 from '~/assets/images/auteurs/auteur-1-min.jpg'
import avatar2 from '~/assets/images/auteurs/auteur-2-min.jpg'
import avatar3 from '~/assets/images/auteurs/auteur-3-min.jpg'
import avatar4 from '~/assets/images/auteurs/auteur-4-min.jpg'
import avatar5 from '~/assets/images/auteurs/auteur-5-min.jpg'
import avatar6 from '~/assets/images/auteurs/auteur-6-min.jpg'

const featureIcons = {
  'book-open': BookOpen,
  'book-marked': BookMarked,
  printer: Printer,
  sparkles: Sparkles,
  handshake: Handshake,
} as const

const audienceIcons = {
  'building-2': Building2,
  'graduation-cap': GraduationCap,
  landmark: Landmark,
  users: Users,
  'pen-tool': PenTool,
} as const

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]
</script>

<template>
  <section
    class="coming-soon-hero"
    aria-labelledby="coming-soon-heading"
  >
    <div
      class="coming-soon-hero__bg"
      aria-hidden="true"
    >
      <img
        :src="heroBackground"
        alt=""
        class="coming-soon-hero__bg-img"
        width="1920"
        height="1080"
        decoding="async"
        fetchpriority="high"
      >
      <div class="coming-soon-hero__bg-shade" />
    </div>

    <div class="coming-soon-hero__inner">
      <div class="coming-soon-hero__content">
        <p class="coming-soon-hero__badge">
          <span
            class="coming-soon-hero__badge-dot"
            aria-hidden="true"
          />
          {{ comingSoonCopy.badge }}
        </p>

        <h1
          id="coming-soon-heading"
          class="coming-soon-hero__title"
        >
          {{ comingSoonCopy.titleBefore }}
          <span class="coming-soon-hero__title-accent">{{ comingSoonCopy.titleAccent }}</span>
          <br>
          {{ comingSoonCopy.titleAfter }}
        </h1>

        <p class="coming-soon-hero__lead">
          {{ comingSoonCopy.lead }}
        </p>

        <div class="coming-soon-hero__launch">
          <p class="coming-soon-hero__launch-label">
            {{ comingSoonCopy.launchLabel }}
          </p>
          <p class="coming-soon-hero__launch-date">
            {{ comingSoonCopy.launchDate }}
          </p>
        </div>

        <LaunchCountdown />

        <ul
          class="coming-soon-hero__features"
          aria-label="Fonctionnalités de la plateforme"
        >
          <li
            v-for="feature in comingSoonFeatures"
            :key="feature.id"
          >
            <span class="coming-soon-hero__feature">
              <component
                :is="featureIcons[feature.icon]"
                class="coming-soon-hero__feature-icon"
                :stroke-width="1.25"
                aria-hidden="true"
              />
              {{ feature.label }}
            </span>
          </li>
        </ul>

        <div class="coming-soon-hero__cta-wrap">
          <NuxtLink
            to="/inscription"
            class="coming-soon-hero__cta"
          >
            {{ comingSoonCopy.cta }}
            <ArrowRight
              class="coming-soon-hero__cta-icon"
              :stroke-width="1.75"
              aria-hidden="true"
            />
          </NuxtLink>

          <div class="coming-soon-hero__waitlist">
            <div
              class="coming-soon-hero__avatars"
              aria-hidden="true"
            >
              <img
                v-for="(avatar, index) in avatars"
                :key="index"
                :src="avatar"
                alt=""
                class="coming-soon-hero__avatar"
                width="36"
                height="36"
                loading="lazy"
                decoding="async"
              >
              <span class="coming-soon-hero__avatar coming-soon-hero__avatar--more">
                +4K
              </span>
            </div>
            <p class="coming-soon-hero__waitlist-label">
              {{ comingSoonCopy.waitlistLabel }}
            </p>
          </div>
        </div>

        <p class="coming-soon-hero__quote">
          {{ comingSoonCopy.quote }}
        </p>
      </div>

      <ul
        class="coming-soon-hero__audiences"
        aria-label="Publics concernés"
      >
        <li
          v-for="audience in comingSoonAudiences"
          :key="audience.id"
          class="coming-soon-hero__audience"
        >
          <component
            :is="audienceIcons[audience.icon]"
            class="coming-soon-hero__audience-icon"
            :stroke-width="1.25"
            aria-hidden="true"
          />
          <span>{{ audience.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

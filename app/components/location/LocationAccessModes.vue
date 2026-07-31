<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { locationAccessModes } from '@/data/location-page'
</script>

<template>
  <section
    class="location-modes"
    aria-labelledby="location-modes-heading"
  >
    <div class="page-container">
      <h2 id="location-modes-heading">
        Choisissez votre mode d’accès
      </h2>
      <ul class="location-modes__grid">
        <li
          v-for="mode in locationAccessModes"
          :key="mode.id"
        >
          <article class="location-mode-card">
            <span
              class="location-mode-card__icon"
              aria-hidden="true"
            >
              <component
                :is="mode.icon"
                class="size-7"
                :stroke-width="1.5"
              />
            </span>
            <h3>{{ mode.title }}</h3>
            <p>{{ mode.description }}</p>
            <NuxtLink
              :to="mode.href"
              class="location-mode-card__link"
            >
              En savoir plus
              <ArrowRight
                class="size-3.5"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

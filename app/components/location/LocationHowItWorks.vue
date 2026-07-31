<script setup lang="ts">
import { locationSteps } from '@/data/location-page'
</script>

<template>
  <section
    id="comment-ca-fonctionne"
    class="location-how"
    aria-labelledby="location-how-heading"
  >
    <div class="page-container">
      <h2 id="location-how-heading">
        Comment ça fonctionne ?
      </h2>
      <ol class="location-how__list">
        <li
          v-for="(step, index) in locationSteps"
          :key="step.id"
          class="location-how__item"
        >
          <span
            class="location-how__icon"
            aria-hidden="true"
          >
            <component
              :is="step.icon"
              class="size-7"
              :stroke-width="1.5"
            />
          </span>
          <p class="location-how__title">
            {{ index + 1 }}. {{ step.title }}
          </p>
          <p class="location-how__desc">
            {{ step.description }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

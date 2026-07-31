<script setup lang="ts">
import { authorProfile } from '@/data/author-profile'
</script>

<template>
  <section
    class="author-profile-metrics"
    aria-label="Statistiques de l'auteur"
  >
    <ul class="author-profile-metrics__list">
      <li
        v-for="metric in authorProfile.metrics"
        :key="metric.id"
        class="author-profile-metrics__item"
      >
        <p class="author-profile-metrics__value">
          {{ metric.value }}
        </p>
        <p class="author-profile-metrics__label">
          {{ metric.label }}
        </p>
      </li>
    </ul>
  </section>
</template>

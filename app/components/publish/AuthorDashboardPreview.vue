<script setup lang="ts">
import { publishAuthorDashboardSection } from '@/data/publish-page'
import dashboardImage from '~/assets/images/publier/chat.avif'

const section = publishAuthorDashboardSection
</script>

<template>
  <article
    class="publish-pricing-dashboard__panel publish-pricing-dashboard__panel--dashboard publish-dashboard"
    aria-labelledby="publish-dashboard-heading"
  >
    <h2
      id="publish-dashboard-heading"
      class="publish-pricing-dashboard__column-title"
    >
      {{ section.title }}
    </h2>

    <div class="publish-dashboard__visual">
      <img
        :src="dashboardImage"
        :alt="section.imageAlt"
        class="publish-dashboard__image"
        width="720"
        height="540"
        loading="lazy"
        decoding="async"
      >
    </div>
  </article>
</template>

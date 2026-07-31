<script setup lang="ts">
import { podConfigs } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-configs"
    aria-labelledby="pod-configs-heading"
  >
    <div class="page-container">
      <div class="pod-section-head">
        <h2 id="pod-configs-heading">
          Configurations disponibles
        </h2>
      </div>

      <div class="pod-configs__grid">
        <article
          v-for="config in podConfigs"
          :key="config.id"
          class="pod-configs__card"
        >
          <img
            :src="config.image"
            :alt="config.title"
            loading="lazy"
          >
        </article>
      </div>
    </div>
  </section>
</template>

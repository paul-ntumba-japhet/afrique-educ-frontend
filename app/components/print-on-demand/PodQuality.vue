<script setup lang="ts">
import { podPreparationImage, podQualityChecks } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-quality"
    aria-labelledby="pod-quality-heading"
  >
    <div class="page-container">
      <div class="pod-section-head">
        <h2 id="pod-quality-heading">
          Chaque exemplaire est contrôlé avant expédition
        </h2>
      </div>

      <div class="pod-quality__layout">
        <div class="pod-quality__media">
          <img
            :src="podPreparationImage"
            alt="Contrôle qualité d’un ouvrage imprimé"
            loading="lazy"
          >
        </div>
        <ul class="pod-quality__list">
          <li
            v-for="item in podQualityChecks"
            :key="item.id"
          >
            <span class="pod-icon-badge">
              <component
                :is="item.icon"
                class="size-5"
                :stroke-width="1.25"
                aria-hidden="true"
              />
            </span>
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

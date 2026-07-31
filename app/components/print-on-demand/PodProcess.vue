<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { podSteps } from '@/data/print-on-demand'
</script>

<template>
  <section
    id="pod-process"
    class="pod-process"
    aria-labelledby="pod-process-heading"
  >
    <div class="page-container">
      <div class="pod-section-head pod-section-head--center">
        <h2 id="pod-process-heading">
          Comment fonctionne l’impression à la demande ?
        </h2>
      </div>

      <ol class="pod-process__timeline">
        <li
          v-for="(step, index) in podSteps"
          :key="step.id"
          class="pod-process__step"
        >
          <span class="pod-process__marker">
            <component
              :is="step.icon"
              class="size-5"
              :stroke-width="1.25"
              aria-hidden="true"
            />
          </span>
          <p class="pod-process__index">
            {{ index + 1 }}.
          </p>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>

      <div class="pod-process__cta">
        <a
          href="#pod-estimator"
          class="pod-btn pod-btn--primary"
        >
          Configurer mon impression
          <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

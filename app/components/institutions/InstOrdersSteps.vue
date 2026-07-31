<script setup lang="ts">
import { institutionalSteps } from '@/data/institutional-orders'
</script>

<template>
  <section
    class="inst-orders-steps"
    aria-labelledby="inst-orders-steps-heading"
  >
    <div class="page-container">
      <h2
        id="inst-orders-steps-heading"
        class="inst-orders-section-title"
      >
        Comment ça fonctionne ?
      </h2>

      <ol class="inst-orders-steps__list">
        <li
          v-for="step in institutionalSteps"
          :key="step.id"
          class="inst-orders-steps__item"
        >
          <span
            class="inst-orders-steps__circle"
            aria-hidden="true"
          >
            <component
              :is="step.icon"
              class="inst-orders-steps__icon"
              :stroke-width="1.25"
            />
          </span>
          <span class="inst-orders-steps__number">{{ step.number }}</span>
          <span class="inst-orders-steps__label">{{ step.label }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

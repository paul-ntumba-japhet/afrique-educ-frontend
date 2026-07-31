<script setup lang="ts">
import { partnershipSteps } from '@/data/partenariat'
</script>

<template>
  <section
    class="partnership-steps"
    aria-labelledby="partnership-steps-heading"
  >
    <div class="page-container">
      <h2 id="partnership-steps-heading">
        {{ partnershipSteps.title }}
      </h2>

      <ol class="partnership-steps__list">
        <li
          v-for="item in partnershipSteps.items"
          :key="item.id"
          class="partnership-steps__item"
        >
          <span class="partnership-steps__index" aria-hidden="true">
            {{ item.step }}
          </span>
          <div class="partnership-steps__copy">
            <strong>{{ item.title }}</strong>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

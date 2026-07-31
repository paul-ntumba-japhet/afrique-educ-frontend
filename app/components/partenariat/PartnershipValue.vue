<script setup lang="ts">
import { partnershipValue } from '@/data/partenariat'
</script>

<template>
  <section
    class="partnership-value"
    aria-labelledby="partnership-value-heading"
  >
    <div class="page-container">
      <h2 id="partnership-value-heading">
        {{ partnershipValue.title }}
      </h2>

      <div class="partnership-value__grid">
        <article
          v-for="item in partnershipValue.items"
          :key="item.id"
          class="partnership-value__item"
        >
          <span class="partnership-value__icon">
            <component
              :is="item.icon"
              class="size-15"
              :stroke-width="1.25"
              aria-hidden="true"
            />
          </span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

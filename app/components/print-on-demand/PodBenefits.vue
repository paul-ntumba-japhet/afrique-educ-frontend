<script setup lang="ts">
import { podBenefits } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-benefits"
    aria-labelledby="pod-benefits-heading"
  >
    <div class="page-container">
      <div class="pod-section-head pod-section-head--center">
        <h2 id="pod-benefits-heading">
          Une impression adaptée à votre projet
        </h2>
        <p>
          Un service flexible pour auteurs, éditeurs et institutions — sans immobiliser de stock.
        </p>
      </div>

      <div class="pod-benefits__grid">
        <article
          v-for="item in podBenefits"
          :key="item.id"
          class="pod-benefits__item"
        >
          <span class="pod-icon-badge">
            <component
              :is="item.icon"
              class="size-5"
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

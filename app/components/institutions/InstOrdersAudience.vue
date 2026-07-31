<script setup lang="ts">
import { institutionalAudiences } from '@/data/institutional-orders'
</script>

<template>
  <section
    class="inst-orders-audience"
    aria-label="Qui peut commander"
  >
    <div class="page-container">
      <ul class="inst-orders-audience__grid">
        <li
          v-for="item in institutionalAudiences"
          :key="item.id"
          class="inst-orders-audience__card"
        >
          <span
            class="inst-orders-audience__icon"
            aria-hidden="true"
          >
            <component
              :is="item.icon"
              class="size-14"
              :stroke-width="1"
            />
          </span>
          <div class="inst-orders-audience__body">
            <h3 class="inst-orders-audience__title">
              {{ item.title }}
            </h3>
            <p class="inst-orders-audience__desc">
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

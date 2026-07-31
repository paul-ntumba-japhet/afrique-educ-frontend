<script setup lang="ts">
import InstOrdersServices from '~/components/institutions/InstOrdersServices.vue'
import { institutionalReasons } from '@/data/institutional-orders'
</script>

<template>
  <section
    class="inst-orders-reasons"
    aria-labelledby="inst-orders-reasons-heading"
  >
    <div class="page-container">
      <div class="inst-orders-reasons__intro">
        <h2
          id="inst-orders-reasons-heading"
          class="inst-orders-section-title"
        >
          Pourquoi commander chez nous ?
        </h2>
        <p class="inst-orders-reasons__lead">
          Un accompagnement institutionnel complet : catalogue africain, conditions volume, logistique maîtrisée et outils de commande adaptés aux bibliothèques, écoles et organisations.
        </p>
      </div>

      <ul class="inst-orders-reasons__grid">
        <li
          v-for="item in institutionalReasons"
          :key="item.id"
          class="inst-orders-reasons__item"
        >
          <span
            class="inst-orders-reasons__badge"
            aria-hidden="true"
            :style="{
              color: item.accent,
              backgroundColor: item.accentSoft,
            }"
          >
            <component
              :is="item.icon"
              class="inst-orders-reasons__icon"
              :stroke-width="1.25"
            />
          </span>
          <div class="inst-orders-reasons__text">
            <h3 class="inst-orders-reasons__title">
              {{ item.title }}
            </h3>
            <p class="inst-orders-reasons__desc">
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>

      <div class="inst-orders-reasons__bandeau">
        <InstOrdersServices />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { podAudiences } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-audience"
    aria-labelledby="pod-audience-heading"
  >
    <div class="page-container">
      <div class="pod-section-head">
        <h2 id="pod-audience-heading">
          À qui s’adresse ce service ?
        </h2>
      </div>

      <div class="pod-audience__grid">
        <article
          v-for="item in podAudiences"
          :key="item.id"
          class="pod-audience__card"
        >
          <div class="pod-audience__media">
            <img
              :src="item.image"
              :alt="item.title"
              loading="lazy"
            >
          </div>
          <div class="pod-audience__body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <NuxtLink
              :to="item.href"
              class="pod-text-link"
            >
              En savoir plus
              <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

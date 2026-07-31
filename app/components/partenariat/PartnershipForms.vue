<script setup lang="ts">
import { partnershipForms } from '@/data/partenariat'
</script>

<template>
  <section
    id="formes-partenariat"
    class="partnership-forms"
    aria-labelledby="partnership-forms-heading"
  >
    <div class="page-container">
      <h2 id="partnership-forms-heading">
        {{ partnershipForms.title }}
      </h2>

      <div class="partnership-forms__grid">
        <article
          v-for="item in partnershipForms.items"
          :key="item.id"
          class="partnership-forms__card"
        >
          <div class="partnership-forms__media">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              class="partnership-forms__image"
              width="640"
              height="420"
              loading="lazy"
            >
            <span class="partnership-forms__badge" aria-hidden="true">
              <component
                :is="item.icon"
                class="size-5"
                :stroke-width="1.35"
              />
            </span>
          </div>

          <div class="partnership-forms__body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

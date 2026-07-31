<script setup lang="ts">
import { partnershipCollaborators } from '@/data/partenariat'
</script>

<template>
  <section
    class="partnership-collaborators"
    aria-labelledby="partnership-collaborators-heading"
  >
    <div class="page-container">
      <h2 id="partnership-collaborators-heading">
        {{ partnershipCollaborators.title }}
      </h2>

      <div class="partnership-collaborators__grid">
        <article
          v-for="item in partnershipCollaborators.items"
          :key="item.id"
          class="partnership-collaborators__card"
        >
          <span class="partnership-collaborators__icon">
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

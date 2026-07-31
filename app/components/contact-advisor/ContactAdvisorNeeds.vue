<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { contactAdvisorNeeds } from '@/data/contact-advisor'
</script>

<template>
  <aside
    class="contact-advisor-needs"
    aria-labelledby="contact-advisor-needs-heading"
  >
    <h2 id="contact-advisor-needs-heading">
      Quels sont vos besoins ?
    </h2>
    <p class="contact-advisor-needs__lead">
      Sélectionnez un sujet pour orienter votre demande vers le bon interlocuteur.
    </p>

    <ul class="contact-advisor-needs__grid">
      <li
        v-for="need in contactAdvisorNeeds"
        :key="need.id"
      >
        <NuxtLink
          :to="need.href"
          class="contact-advisor-need"
          :external="need.href.startsWith('mailto:')"
        >
          <span
            class="contact-advisor-need__icon"
            aria-hidden="true"
          >
            <component
              :is="need.icon"
              class="size-5"
              :stroke-width="1.25"
            />
          </span>
          <span class="contact-advisor-need__copy">
            <strong>{{ need.title }}</strong>
            <span>{{ need.description }}</span>
          </span>
          <ChevronRight
            class="contact-advisor-need__chevron"
            :stroke-width="1.25"
            aria-hidden="true"
          />
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

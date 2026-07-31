<script setup lang="ts">
import { contactAdvisorReasons } from '@/data/contact-advisor'
</script>

<template>
  <section
    class="contact-advisor-why"
    aria-labelledby="contact-advisor-why-heading"
  >
    <div class="page-container">
      <h2 id="contact-advisor-why-heading">
        Pourquoi nous contacter ?
      </h2>
      <span
        class="contact-advisor-why__rule"
        aria-hidden="true"
      />
      <ul class="contact-advisor-why__list">
        <li
          v-for="item in contactAdvisorReasons"
          :key="item.id"
          class="contact-advisor-why__item"
        >
          <span
            class="contact-advisor-why__icon"
            aria-hidden="true"
          >
            <component
              :is="item.icon"
              class="size-5"
                :stroke-width="1.25"
            />
          </span>
          <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

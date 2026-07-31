<script setup lang="ts">
import { contactAdvisorChannels } from '@/data/contact-advisor'
</script>

<template>
  <section
    class="contact-advisor-channels"
    aria-label="Coordonnées rapides"
  >
    <div class="page-container contact-advisor-channels__grid">
      <article
        v-for="channel in contactAdvisorChannels"
        :key="channel.id"
        class="contact-advisor-channel"
      >
        <span
          class="contact-advisor-channel__icon"
          aria-hidden="true"
        >
          <component
            :is="channel.icon"
            class="size-5"
            :stroke-width="1.25"
          />
        </span>
        <div class="contact-advisor-channel__content">
          <h2>{{ channel.title }}</h2>
          <p class="contact-advisor-channel__value">
            {{ channel.value }}
          </p>
          <div class="contact-advisor-channel__meta-row">
            <p class="contact-advisor-channel__detail">
              {{ channel.detail }}
            </p>
            <a
              :href="channel.href"
              class="contact-advisor-channel__cta"
            >
              <component
                :is="channel.icon"
                class="size-4"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              {{ channel.cta }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

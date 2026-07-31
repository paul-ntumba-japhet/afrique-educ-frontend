<script setup lang="ts">
import { Building2, Clock3 } from 'lucide-vue-next'
import {
  contactAdvisorImages,
  contactAdvisorOffice,
} from '@/data/contact-advisor'
</script>

<template>
  <section
    class="contact-advisor-office"
    aria-labelledby="contact-advisor-office-heading"
  >
    <div class="page-container contact-advisor-office__inner">
      <h2
        id="contact-advisor-office-heading"
        class="sr-only"
      >
        Bureau et horaires
      </h2>

      <div class="contact-advisor-office__panel">
        <div class="contact-advisor-office__cards">
          <article class="contact-advisor-office__card">
            <span
              class="contact-advisor-office__badge"
              aria-hidden="true"
            >
              <Building2
                class="size-5"
                :stroke-width="1.25"
              />
            </span>
            <div>
              <h3>{{ contactAdvisorOffice.address.title }}</h3>
              <p
                v-for="line in contactAdvisorOffice.address.lines"
                :key="line"
              >
                {{ line }}
              </p>
            </div>
          </article>

          <article class="contact-advisor-office__card">
            <span
              class="contact-advisor-office__badge"
              aria-hidden="true"
            >
              <Clock3
                class="size-5"
                :stroke-width="1.25"
              />
            </span>
            <div>
              <h3>{{ contactAdvisorOffice.hours.title }}</h3>
              <dl class="contact-advisor-office__hours">
                <div
                  v-for="row in contactAdvisorOffice.hours.rows"
                  :key="row.label"
                >
                  <dt>{{ row.label }}</dt>
                  <dd>{{ row.value }}</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>

        <div class="contact-advisor-office__media">
          <img
            :src="contactAdvisorImages.office"
            alt="Carnet Livres d’Afrique, stylo doré et plante sur un bureau"
            class="contact-advisor-office__image"
            width="1600"
            height="680"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  </section>
</template>

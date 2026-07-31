<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import type { SubscriptionAudience } from '@/data/library-subscriptions'
import {
  individualPlans,
  organizationSolutions,
} from '@/data/library-subscriptions'

defineProps<{
  audience: SubscriptionAudience
}>()
</script>

<template>
  <section
    class="library-subscriptions-plans"
    :aria-labelledby="audience === 'individuals'
      ? 'library-subscriptions-plans-heading'
      : 'library-subscriptions-organizations-heading'"
  >
    <div class="page-container">
      <div
        v-if="audience === 'individuals'"
        class="library-subscriptions-plans__grid"
        role="tabpanel"
        aria-label="Offres individuelles"
      >
        <h2
          id="library-subscriptions-plans-heading"
          class="sr-only"
        >
          Choisissez votre formule
        </h2>

        <article
          v-for="plan in individualPlans"
          :key="plan.id"
          class="library-subscriptions-plan"
          :class="[
            `library-subscriptions-plan--${plan.tone}`,
            { 'library-subscriptions-plan--featured': plan.featured },
          ]"
        >
          <div class="library-subscriptions-plan__head">
            <span class="library-subscriptions-plan__icon">
              <component
                :is="plan.icon"
                class="size-5"
                :stroke-width="1.25"
                aria-hidden="true"
              />
            </span>

            <div class="library-subscriptions-plan__title-row">
              <h3>{{ plan.name }}</h3>
              <span
                v-if="plan.badge"
                class="library-subscriptions-plan__badge"
              >
                {{ plan.badge }}
              </span>
            </div>
          </div>

          <p class="library-subscriptions-plan__description">
            {{ plan.description }}
          </p>

          <p class="library-subscriptions-plan__price">
            {{ plan.price }}
            <span>/ {{ plan.period }}</span>
          </p>

          <ul
            class="library-subscriptions-plan__features"
            :class="{
              'library-subscriptions-plan__features--cols': plan.featuresColumns === 2,
            }"
          >
            <li
              v-for="feature in plan.features"
              :key="feature"
            >
              <Check
                class="library-subscriptions-plan__check"
                :stroke-width="1.5"
                aria-hidden="true"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <NuxtLink
            :to="plan.href"
            class="library-subscriptions-plan__cta"
          >
            {{ plan.cta }}
          </NuxtLink>
        </article>
      </div>

      <div
        v-else
        class="library-subscriptions-organizations__panel"
        role="tabpanel"
        aria-label="Offres organisations"
      >
        <div class="library-subscriptions-section-head library-subscriptions-section-head--centered">
          <h2 id="library-subscriptions-organizations-heading">
            Des solutions puissantes pour les organisations
          </h2>
        </div>

        <div class="library-subscriptions-organizations__grid">
          <article
            v-for="item in organizationSolutions"
            :key="item.id"
            class="library-subscriptions-organization"
            :class="`library-subscriptions-organization--${item.id}`"
          >
            <span class="library-subscriptions-organization__icon">
              <component
                :is="item.icon"
                class="size-5"
                :stroke-width="1.25"
                aria-hidden="true"
              />
            </span>
            <h3>{{ item.title }}</h3>
            <ul class="library-subscriptions-organization__features">
              <li
                v-for="feature in item.features"
                :key="feature"
              >
                <Check
                  class="library-subscriptions-organization__check"
                  :stroke-width="1.5"
                  aria-hidden="true"
                />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="item.href"
              class="library-subscriptions-organization__cta"
            >
              {{ item.cta }}
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

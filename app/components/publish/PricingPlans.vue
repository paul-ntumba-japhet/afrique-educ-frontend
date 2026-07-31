<script setup lang="ts">
import type { PricingPlan } from '@/data/publish-page'
import { publishPricingSection } from '@/data/publish-page'
import { Check } from 'lucide-vue-next'

const section = publishPricingSection
const isAnnualBilling = ref(false)

function getPlanPrice(plan: PricingPlan) {
  return isAnnualBilling.value ? plan.priceAnnual : plan.priceMonthly
}

function getPlanComparePrice(plan: PricingPlan) {
  if (plan.id === 'starter' || !isAnnualBilling.value)
    return null

  return plan.compareAnnual ?? null
}

function getPlanBillingNote(plan: PricingPlan) {
  return isAnnualBilling.value
    ? plan.billingNoteAnnual
    : plan.billingNoteMonthly
}
</script>

<template>
  <article
    class="publish-pricing-dashboard__panel publish-pricing-dashboard__panel--pricing publish-pricing"
    aria-labelledby="publish-pricing-heading"
  >
    <header class="publish-pricing__header">
      <h2
        id="publish-pricing-heading"
        class="publish-pricing__title"
      >
        {{ section.title }}
      </h2>

      <p class="publish-pricing__subtitle">
        {{ section.subtitle }}
      </p>
    </header>

    <div class="publish-pricing__toolbar">
      <div
        class="publish-pricing__billing"
        role="group"
        :aria-label="`Période de facturation : ${isAnnualBilling ? section.billing.annual : section.billing.monthly}`"
      >
        <span
          class="publish-pricing__billing-label"
          :class="{ 'publish-pricing__billing-label--active': !isAnnualBilling }"
        >
          {{ section.billing.monthly }}
        </span>

        <button
          type="button"
          class="publish-pricing__switch"
          :class="{ 'publish-pricing__switch--on': isAnnualBilling }"
          :aria-pressed="isAnnualBilling"
          @click="isAnnualBilling = !isAnnualBilling"
        >
          <span class="publish-pricing__switch-thumb" />
        </button>

        <span
          class="publish-pricing__billing-label"
          :class="{ 'publish-pricing__billing-label--active': isAnnualBilling }"
        >
          {{ section.billing.annual }}
        </span>

        <span class="publish-pricing__billing-hint">
          {{ section.billing.annualHint }}
        </span>
      </div>
    </div>

    <ul class="publish-pricing__plans">
      <li
        v-for="plan in section.plans"
        :key="plan.id"
        class="publish-pricing__plan-wrap"
      >
        <article
          class="publish-pricing__plan"
          :class="{ 'publish-pricing__plan--featured': plan.featured }"
        >
          <span
            class="publish-pricing__tier-badge"
            :class="`publish-pricing__tier-badge--${plan.tierTone}`"
          >
            {{ plan.tier }}
          </span>

          <div class="publish-pricing__plan-head">
            <h3 class="publish-pricing__name">
              {{ plan.name }}
            </h3>

            <p class="publish-pricing__description">
              {{ plan.description }}
            </p>
          </div>

          <div class="publish-pricing__price-block">
            <p
              v-if="getPlanComparePrice(plan)"
              class="publish-pricing__compare-price"
            >
              {{ getPlanComparePrice(plan) }}
            </p>

            <p class="publish-pricing__price">
              {{ getPlanPrice(plan) }}
            </p>

            <p class="publish-pricing__price-note">
              {{ getPlanBillingNote(plan) }}
            </p>
          </div>

          <NuxtLink
            :to="plan.cta.href"
            class="publish-pricing__cta"
            :class="`publish-pricing__cta--${plan.cta.variant}`"
          >
            {{ plan.cta.label }}
          </NuxtLink>

          <ul class="publish-pricing__features">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="publish-pricing__feature"
            >
              <Check
                class="publish-pricing__feature-icon"
                aria-hidden="true"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </article>
</template>

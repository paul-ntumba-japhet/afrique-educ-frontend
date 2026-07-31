<script setup lang="ts">
import { cartCheckoutSteps, getCartCheckoutStepIndex } from '@/data/cart-checkout'

const route = useRoute()

const currentStep = computed(() => getCartCheckoutStepIndex(route.path))
const totalSteps = cartCheckoutSteps.length

const progressRatio = computed(() =>
  totalSteps > 1 ? (currentStep.value - 1) / (totalSteps - 1) : 0,
)
</script>

<template>
  <nav
    class="cart-checkout-steps"
    :aria-label="`Étape ${currentStep} sur ${totalSteps}`"
    :style="{ '--cart-checkout-progress': progressRatio }"
  >
    <div class="cart-checkout-steps__mobile">
      <span class="cart-checkout-steps__mobile-label">
        Étape {{ currentStep }}/{{ totalSteps }} — {{ cartCheckoutSteps[currentStep - 1]?.label }}
      </span>
      <div class="cart-checkout-steps__mobile-bar">
        <span
          class="cart-checkout-steps__mobile-fill"
          :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
        />
      </div>
    </div>

    <ol class="cart-checkout-steps__desktop">
      <li
        v-for="(step, index) in cartCheckoutSteps"
        :key="step.id"
        class="cart-checkout-steps__step"
        :class="{
          'cart-checkout-steps__step--active': currentStep === index + 1,
          'cart-checkout-steps__step--done': currentStep > index + 1,
        }"
      >
        <NuxtLink
          v-if="currentStep > index + 1"
          :to="step.to"
          class="cart-checkout-steps__link"
        >
          <span class="cart-checkout-steps__marker">{{ index + 1 }}</span>
          <span class="cart-checkout-steps__label">{{ step.label }}</span>
        </NuxtLink>
        <template v-else>
          <span class="cart-checkout-steps__marker">{{ index + 1 }}</span>
          <span class="cart-checkout-steps__label">{{ step.label }}</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

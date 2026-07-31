<script setup lang="ts">
const store = useRegisterStore()
</script>

<template>
  <div
    class="register-progress"
    :aria-label="`Étape ${store.currentStep} sur ${store.totalSteps}`"
  >
    <div class="register-progress__mobile">
      <span class="register-progress__mobile-label">
        Étape {{ store.currentStep }}/{{ store.totalSteps }}
      </span>
      <div class="register-progress__mobile-bar">
        <span
          class="register-progress__mobile-fill"
          :style="{ width: `${(store.currentStep / store.totalSteps) * 100}%` }"
        />
      </div>
    </div>

    <ol
      class="register-progress__desktop"
      :style="{ '--register-progress-steps': store.progressLabels.length }"
    >
      <li
        v-for="(label, index) in store.progressLabels"
        :key="label"
        class="register-progress__step"
        :class="{
          'register-progress__step--active': store.currentStep === index + 1,
          'register-progress__step--done': store.currentStep > index + 1,
        }"
      >
        <span class="register-progress__marker">{{ index + 1 }}</span>
        <span class="register-progress__label">{{ label }}</span>
      </li>
    </ol>
  </div>
</template>

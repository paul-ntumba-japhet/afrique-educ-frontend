<script setup lang="ts">
import type { AccountCategory } from '@/data/register-page'
import { profileTypeOptions } from '@/data/register-page'
import { validateProfileStep } from '@/utils/register-validation'

const store = useRegisterStore()
const error = ref('')

function selectCategory(id: string) {
  store.setAccountCategory(id as AccountCategory)
  error.value = ''
}

function handleContinue() {
  const message = validateProfileStep(store.accountCategory)
  if (message) {
    error.value = message
    return
  }
  store.nextStep()
}
</script>

<template>
  <div class="register-step">
    <header class="register-step__header register-step__header--intro">
      <RegisterBrand />

      <h1 class="register-step__lead register-step__lead--intro">
        Choisissez votre profil pour commencer votre parcours d’inscription.
      </h1>
    </header>

    <div class="register-step__cards register-step__cards--two">
      <RegisterCard
        v-for="option in profileTypeOptions"
        :key="option.id"
        :title="option.title"
        :subtitle="option.subtitle"
        :description="option.description"
        :icon="option.icon"
        :selected="store.accountCategory === option.id"
        @select="selectCategory(option.id)"
      />
    </div>

    <p
      v-if="error"
      class="register-step__error"
      role="alert"
    >
      {{ error }}
    </p>

    <RegisterStepNav
      :show-back="false"
      @continue="handleContinue"
    />

    <p class="register-step__footer-link">
      Vous avez déjà un compte ?
      <NuxtLink to="/connexion">Connexion</NuxtLink>
    </p>
  </div>
</template>

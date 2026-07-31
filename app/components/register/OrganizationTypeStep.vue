<script setup lang="ts">
import type { OrganizationType } from '@/data/register-page'
import { organizationTypeOptions } from '@/data/register-page'
import { validateOrganizationTypeStep } from '@/utils/register-validation'

const store = useRegisterStore()
const error = ref('')

function selectType(id: string) {
  store.setOrganizationType(id as OrganizationType)
  error.value = ''
}

function handleContinue() {
  const message = validateOrganizationTypeStep(store.organizationType)
  if (message) {
    error.value = message
    return
  }
  store.nextStep()
}
</script>

<template>
  <div class="register-step">
    <header class="register-step__header">
      <h2 class="register-step__title">
        Quel type d’organisation représentez-vous ?
      </h2>
      <p class="register-step__lead">
        Sélectionnez la catégorie la plus proche de votre structure.
      </p>
    </header>

    <div class="register-step__cards register-step__cards--grid">
      <RegisterCard
        v-for="option in organizationTypeOptions"
        :key="option.id"
        :title="option.title"
        :description="option.description"
        :icon="option.icon"
        :selected="store.organizationType === option.id"
        @select="selectType(option.id)"
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
      @back="store.previousStep()"
      @continue="handleContinue"
    />
  </div>
</template>

<script setup lang="ts">
import type { IndividualType } from '@/data/register-page'
import { individualTypeOptions } from '@/data/register-page'
import { validateIndividualTypeStep } from '@/utils/register-validation'

const store = useRegisterStore()
const error = ref('')

function selectType(id: string) {
  store.setIndividualType(id as IndividualType)
  error.value = ''
}

function handleContinue() {
  const message = validateIndividualTypeStep(store.individualType)
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
        Quel est votre objectif ?
      </h2>
      <p class="register-step__lead">
        Sélectionnez le type de compte qui vous correspond.
      </p>
    </header>

    <div class="register-step__cards register-step__cards--three">
      <RegisterCard
        v-for="option in individualTypeOptions"
        :key="option.id"
        :title="option.title"
        :description="option.description"
        :icon="option.icon"
        :selected="store.individualType === option.id"
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

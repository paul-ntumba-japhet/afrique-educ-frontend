<script setup lang="ts">
import AccountFormStep from '@/components/register/AccountFormStep.vue'
import DocumentUploadStep from '@/components/register/DocumentUploadStep.vue'
import IndividualTypeStep from '@/components/register/IndividualTypeStep.vue'
import OrganizationInfoStep from '@/components/register/OrganizationInfoStep.vue'
import OrganizationTypeStep from '@/components/register/OrganizationTypeStep.vue'
import PreferencesStep from '@/components/register/PreferencesStep.vue'
import ProfileTypeStep from '@/components/register/ProfileTypeStep.vue'
import RegisterProgress from '@/components/register/RegisterProgress.vue'
import RegistrationSuccessStep from '@/components/register/RegistrationSuccessStep.vue'
import { ArrowLeft } from 'lucide-vue-next'

const store = useRegisterStore()

const showProgress = computed(() => store.currentStepKey !== 'success')

function handleBackHeader() {
  if (store.currentStep > 1)
    store.previousStep()
}
</script>

<template>
  <div class="register-wizard">
    <div class="register-wizard__top">
      <button
        v-if="store.currentStep > 1 && store.currentStepKey !== 'success'"
        type="button"
        class="register-wizard__back-btn"
        aria-label="Retour à l’étape précédente"
        @click="handleBackHeader"
      >
        <ArrowLeft class="register-wizard__back-icon" />
      </button>

      <RegisterBrand
        v-if="store.currentStep > 1"
        compact
      />
    </div>

    <RegisterProgress v-if="showProgress" />

    <div class="register-wizard__panel">
      <div class="register-wizard__content">
        <Transition
          name="register-step"
          mode="out-in"
        >
        <ProfileTypeStep
          v-if="store.currentStepKey === 'profile'"
          key="profile"
        />
        <IndividualTypeStep
          v-else-if="store.currentStepKey === 'individual-type'"
          key="individual-type"
        />
        <OrganizationTypeStep
          v-else-if="store.currentStepKey === 'organization-type'"
          key="organization-type"
        />
        <AccountFormStep
          v-else-if="store.currentStepKey === 'account'"
          key="account"
        />
        <PreferencesStep
          v-else-if="store.currentStepKey === 'preferences'"
          key="preferences"
        />
        <OrganizationInfoStep
          v-else-if="store.currentStepKey === 'organization-info'"
          key="organization-info"
        />
        <DocumentUploadStep
          v-else-if="store.currentStepKey === 'documents'"
          key="documents"
        />
        <RegistrationSuccessStep
          v-else
          key="success"
        />
        </Transition>
      </div>
    </div>
  </div>
</template>

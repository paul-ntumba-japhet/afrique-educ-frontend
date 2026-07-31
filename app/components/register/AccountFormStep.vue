<script setup lang="ts">
import { countryOptions } from '@/data/register-page'
import {
  hasValidationErrors,
  validateIndividualAccountStep,
  validateOrganizationAccountStep,
} from '@/utils/register-validation'
import { Lock, Mail, Phone, User } from 'lucide-vue-next'

const store = useRegisterStore()
const errors = ref<Record<string, string>>({})

function handleContinue() {
  if (store.isOrganization) {
    errors.value = validateOrganizationAccountStep(store.account)
  }
  else {
    errors.value = validateIndividualAccountStep(store.account)
  }

  if (hasValidationErrors(errors.value))
    return

  store.nextStep()
}
</script>

<template>
  <div class="register-step">
    <header class="register-step__header">
      <h2 class="register-step__title">
        Créons votre compte
      </h2>
      <p class="register-step__lead">
        Entrez vos informations personnelles pour finaliser votre inscription.
      </p>
    </header>

    <form
      class="register-form"
      @submit.prevent="handleContinue"
    >
      <template v-if="store.isOrganization">
        <RegisterInput
          v-model="store.account.organizationName"
          label="Nom de l’organisation"
          placeholder="Nom officiel"
          :error="errors.organizationName"
        />

        <RegisterInput
          v-model="store.account.responsibleName"
          label="Nom du responsable"
          placeholder="Prénom et nom"
          :icon="User"
          :error="errors.responsibleName"
        />

        <RegisterInput
          v-model="store.account.professionalEmail"
          label="Email professionnel"
          type="email"
          placeholder="contact@organisation.com"
          :icon="Mail"
          autocomplete="email"
          :error="errors.professionalEmail"
        />

        <RegisterInput
          v-model="store.account.phone"
          label="Téléphone"
          type="tel"
          placeholder="+225 00 00 00 00 00"
          :icon="Phone"
          autocomplete="tel"
          :error="errors.phone"
        />
      </template>

      <template v-else>
        <div class="register-form__row">
          <RegisterInput
            v-model="store.account.lastName"
            label="Nom"
            placeholder="Votre nom"
            :icon="User"
            autocomplete="family-name"
            :error="errors.lastName"
          />

          <RegisterInput
            v-model="store.account.firstName"
            label="Prénom"
            placeholder="Votre prénom"
            :icon="User"
            autocomplete="given-name"
            :error="errors.firstName"
          />
        </div>

        <RegisterInput
          v-model="store.account.email"
          label="Email"
          type="email"
          placeholder="vous@exemple.com"
          :icon="Mail"
          autocomplete="email"
          :error="errors.email"
        />

        <RegisterInput
          v-model="store.account.phone"
          label="Téléphone (optionnel)"
          type="tel"
          placeholder="+225 00 00 00 00 00"
          :icon="Phone"
          autocomplete="tel"
        />
      </template>

      <RegisterSelect
        v-model="store.account.country"
        label="Pays"
        :error="errors.country"
      >
        <option
          v-for="country in countryOptions"
          :key="country"
          :value="country"
        >
          {{ country }}
        </option>
      </RegisterSelect>

      <RegisterInput
        v-model="store.account.password"
        label="Mot de passe"
        type="password"
        placeholder="8 caractères minimum"
        :icon="Lock"
        autocomplete="new-password"
        :error="errors.password"
      />

      <RegisterInput
        v-model="store.account.passwordConfirmation"
        label="Confirmer le mot de passe"
        type="password"
        placeholder="Répétez le mot de passe"
        :icon="Lock"
        autocomplete="new-password"
        :error="errors.passwordConfirmation"
      />

      <div class="register-form__checks">
        <RegisterCheckbox
          v-model="store.account.acceptTerms"
          label="J’accepte les Conditions d’utilisation"
          :error="errors.acceptTerms"
        />

        <RegisterCheckbox
          v-model="store.account.acceptPrivacy"
          label="J’accepte la Politique de confidentialité"
          :error="errors.acceptPrivacy"
        />
      </div>
    </form>

    <RegisterStepNav
      @back="store.previousStep()"
      @continue="handleContinue"
    />
  </div>
</template>

<script setup lang="ts">
const store = useRegisterStore()

function handleContinue() {
  store.nextStep()
}
</script>

<template>
  <div class="register-step">
    <header class="register-step__header">
      <h2 class="register-step__title">
        Informations complémentaires
      </h2>
      <p class="register-step__lead">
        Ajoutez quelques détails sur votre organisation. Vous pourrez compléter votre profil plus tard.
      </p>
    </header>

    <div class="register-form register-form--compact">
      <RegisterInput
        v-model="store.account.city"
        label="Ville (optionnel)"
        placeholder="Votre ville"
      />

      <RegisterInput
        v-model="store.account.website"
        label="Site web (optionnel)"
        type="url"
        placeholder="https://www.exemple.com"
      />
    </div>

    <RegisterStepNav
      @back="store.previousStep()"
      @continue="handleContinue"
    />
  </div>
</template>

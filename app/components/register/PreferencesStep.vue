<script setup lang="ts">
import {
  bookCategories,
  readerInterestTags,
  writingLanguages,
} from '@/data/register-page'

const store = useRegisterStore()

async function handleContinue() {
  await store.submitRegistration()
}

async function handleSkip() {
  if (store.isReaderProfile)
    store.reader.interests = []
  if (store.isAuthorProfile) {
    store.author.penName = ''
    store.author.mainWritingLanguage = ''
    store.author.mainBookCategory = ''
  }
  await store.submitRegistration()
}
</script>

<template>
  <div class="register-step">
    <header class="register-step__header">
      <h2 class="register-step__title">
        <template v-if="store.isReaderProfile && !store.isAuthorProfile">
          Parlez-nous de vos goûts
        </template>
        <template v-else-if="store.isAuthorProfile">
          Parlez-nous de vous
        </template>
        <template v-else>
          Complétez votre profil
        </template>
      </h2>
      <p class="register-step__lead">
        <template v-if="store.isReaderProfile && !store.isAuthorProfile">
          Sélectionnez vos centres d’intérêt pour personnaliser votre expérience de lecture.
        </template>
        <template v-else-if="store.isAuthorProfile">
          Quelques informations pour personnaliser votre espace auteur.
        </template>
        <template v-else>
          Personnalisez votre profil lecteur et auteur.
        </template>
      </p>
    </header>

    <div
      v-if="store.isReaderProfile"
      class="register-tags"
    >
      <button
        v-for="tag in readerInterestTags"
        :key="tag"
        type="button"
        class="register-tag"
        :class="{ 'register-tag--active': store.reader.interests.includes(tag) }"
        :aria-pressed="store.reader.interests.includes(tag)"
        @click="store.toggleInterest(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <div
      v-if="store.isAuthorProfile"
      class="register-form register-form--compact"
    >
      <RegisterInput
        v-model="store.author.penName"
        label="Nom de plume (optionnel)"
        placeholder="Votre nom d’auteur"
      />

      <RegisterSelect
        v-model="store.author.mainWritingLanguage"
        label="Langue principale d’écriture"
        placeholder="Choisir une langue"
      >
        <option
          v-for="language in writingLanguages"
          :key="language"
          :value="language"
        >
          {{ language }}
        </option>
      </RegisterSelect>

      <RegisterSelect
        v-model="store.author.mainBookCategory"
        label="Catégorie principale"
        placeholder="Choisir une catégorie"
      >
        <option
          v-for="category in bookCategories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </RegisterSelect>
    </div>

    <RegisterStepNav
      show-skip
      :loading="store.isSubmitting"
      @back="store.previousStep()"
      @continue="handleContinue"
      @skip="handleSkip"
    />
  </div>
</template>

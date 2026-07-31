<script setup lang="ts">
import { organizationDocumentRequirements } from '@/data/register-page'
import { Upload, X } from 'lucide-vue-next'

const store = useRegisterStore()
const fileInput = ref<HTMLInputElement | null>(null)

const requiredDocuments = computed(() => {
  if (!store.organizationType)
    return []
  return organizationDocumentRequirements[store.organizationType]
})

function openFilePicker() {
  fileInput.value?.click()
}

function onFilesSelected(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files?.length)
    store.addDocuments(input.files)
  input.value = ''
}

async function handleContinue() {
  await store.submitRegistration()
}
</script>

<template>
  <div class="register-step">
    <header class="register-step__header">
      <h2 class="register-step__title">
        Documents et vérification
      </h2>
      <p class="register-step__lead">
        Téléversez les documents recommandés pour accélérer la validation de votre dossier.
      </p>
    </header>

    <ul class="register-documents__list">
      <li
        v-for="document in requiredDocuments"
        :key="document"
        class="register-documents__item"
      >
        {{ document }}
      </li>
    </ul>

    <div class="register-upload">
      <input
        ref="fileInput"
        type="file"
        class="register-upload__input"
        multiple
        accept=".pdf,.jpg,.jpeg,.png,.webp"
        @change="onFilesSelected"
      >

      <button
        type="button"
        class="register-upload__trigger"
        @click="openFilePicker"
      >
        <Upload
          class="register-upload__icon"
          aria-hidden="true"
        />
        Ajouter des documents
      </button>

      <ul
        v-if="store.documents.length"
        class="register-upload__files"
      >
        <li
          v-for="(file, index) in store.documents"
          :key="`${file.name}-${index}`"
          class="register-upload__file"
        >
          <span>{{ file.name }}</span>
          <button
            type="button"
            class="register-upload__remove"
            :aria-label="`Retirer ${file.name}`"
            @click="store.removeDocument(index)"
          >
            <X class="register-upload__remove-icon" />
          </button>
        </li>
      </ul>
    </div>

    <RegisterStepNav
      continue-label="Soumettre l’inscription"
      :loading="store.isSubmitting"
      @back="store.previousStep()"
      @continue="handleContinue"
    />
  </div>
</template>

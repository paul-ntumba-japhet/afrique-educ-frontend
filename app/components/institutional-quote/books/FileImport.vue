<script setup lang="ts">
import { CloudUpload, FileSpreadsheet } from 'lucide-vue-next'
import {
  importPreviewMockRows,
  importRecommendedColumns,
} from '@/data/institutional-quote'
import type { QuoteImportState } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteImportState
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteImportState]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const dragging = ref(false)

function formatSize(bytes: number) {
  if (bytes < 1024)
    return `${bytes} o`
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toFixed(0)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

function openFilePicker() {
  fileInput.value?.click()
}

function applyFile(file: File) {
  emit('update:modelValue', {
    fileName: file.name,
    fileSizeLabel: formatSize(file.size),
    rows: importPreviewMockRows.map(row => ({ ...row })),
  })
}

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file)
    applyFile(file)
}

function onDrop(event: DragEvent) {
  dragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file)
    applyFile(file)
}

function replaceFile() {
  openFilePicker()
}

function clearFile() {
  emit('update:modelValue', {
    fileName: null,
    fileSizeLabel: null,
    rows: [],
  })
  if (fileInput.value)
    fileInput.value.value = ''
}
</script>

<template>
  <section class="inst-quote-books-panel">
    <div
      class="inst-quote-books-dropzone"
      :class="{ 'inst-quote-books-dropzone--active': dragging }"
      role="button"
      tabindex="0"
      aria-label="Importer un fichier de liste d’ouvrages"
      @click="openFilePicker"
      @keydown.enter.prevent="openFilePicker"
      @keydown.space.prevent="openFilePicker"
      @dragenter.prevent="dragging = true"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
      @drop.prevent="onDrop"
    >
      <CloudUpload
        class="inst-quote-books-dropzone__icon"
        :stroke-width="1.4"
        aria-hidden="true"
      />
      <div class="inst-quote-books-dropzone__copy">
        <p class="inst-quote-books-dropzone__title">
          Glissez-déposez votre fichier ici
        </p>
        <p class="inst-quote-books-dropzone__or">
          ou
        </p>
        <span class="inst-quote-books-dropzone__browse">
          Parcourir vos fichiers
        </span>
        <p class="inst-quote-books-dropzone__hint">
          Formats acceptés : Excel, CSV, PDF, DOCX
        </p>
      </div>
      <input
        ref="fileInput"
        type="file"
        class="sr-only"
        accept=".xlsx,.xls,.csv,.pdf,.doc,.docx"
        @change="onFileChange"
        @click.stop
      >
    </div>

    <div class="inst-quote-books-columns">
      <p class="inst-quote-books-columns__label">
        Colonnes recommandées pour vos fichiers
      </p>
      <ul class="inst-quote-books-columns__list">
        <li
          v-for="column in importRecommendedColumns"
          :key="column"
        >
          {{ column }}
        </li>
      </ul>
    </div>

    <div
      v-if="modelValue.fileName"
      class="inst-quote-books-file"
    >
      <div class="inst-quote-books-file__meta">
        <FileSpreadsheet
          class="inst-quote-books-file__icon"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <div>
          <p class="inst-quote-books-file__name">
            {{ modelValue.fileName }}
          </p>
          <p
            v-if="modelValue.fileSizeLabel"
            class="inst-quote-books-file__size"
          >
            {{ modelValue.fileSizeLabel }} · {{ modelValue.rows.length }} ligne{{ modelValue.rows.length > 1 ? 's' : '' }} prévisualisée{{ modelValue.rows.length > 1 ? 's' : '' }}
          </p>
        </div>
      </div>
      <div class="inst-quote-books-file__actions">
        <button
          type="button"
          class="inst-quote-btn inst-quote-btn--ghost"
          @click="replaceFile"
        >
          Remplacer le fichier
        </button>
        <button
          type="button"
          class="inst-quote-books-file__clear"
          @click="clearFile"
        >
          Retirer
        </button>
      </div>
    </div>

    <div
      v-if="modelValue.rows.length"
      class="inst-quote-books-table-wrap"
    >
      <table class="inst-quote-books-table">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Titre du livre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Quantité</th>
            <th scope="col">Éditeur</th>
            <th scope="col">Format</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in modelValue.rows"
            :key="`${row.isbn}-${index}`"
          >
            <td>{{ row.isbn }}</td>
            <td>{{ row.title }}</td>
            <td>{{ row.author }}</td>
            <td>{{ row.quantity }}</td>
            <td>{{ row.publisher }}</td>
            <td>{{ row.format }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

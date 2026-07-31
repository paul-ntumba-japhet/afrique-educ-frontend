<script setup lang="ts">
import { Check, ChevronDown, CloudUpload, FileImage, X } from 'lucide-vue-next'
import {
  complementaryServices,
  createEmptyServiceOptions,
  serviceFontOptions,
  serviceFontSizeOptions,
  servicePlacementOptions,
  servicePrintColorOptions,
} from '@/data/institutional-quote'
import type {
  QuoteServiceId,
  QuoteServiceOptions,
  QuoteServicesState,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteServicesState
  defaultBookCount?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteServicesState]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const dragOver = ref(false)
const optionsOpen = ref(true)

const activeId = computed(() => props.modelValue.activeServiceId)
const activeMeta = computed(() =>
  complementaryServices.find(service => service.id === activeId.value) ?? null,
)

watch(activeId, () => {
  optionsOpen.value = true
})

const options = computed((): QuoteServiceOptions => {
  if (!activeId.value)
    return createEmptyServiceOptions()
  const stored = props.modelValue.optionsByService[activeId.value]
  const base = { ...createEmptyServiceOptions(), ...stored }
  if (base.bookCount == null && props.defaultBookCount)
    base.bookCount = props.defaultBookCount
  return base
})

const selectedColor = computed(() =>
  servicePrintColorOptions.find(item => item.value === options.value.printColor)
  ?? servicePrintColorOptions[0],
)

function patch(partial: Partial<QuoteServicesState>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function patchOptions(partial: Partial<QuoteServiceOptions>) {
  if (!activeId.value)
    return
  const current = props.modelValue.optionsByService[activeId.value] ?? createEmptyServiceOptions()
  patch({
    optionsByService: {
      ...props.modelValue.optionsByService,
      [activeId.value]: { ...current, ...partial },
    },
  })
}

function openFilePicker() {
  fileInput.value?.click()
}

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file)
    return
  applyFile(file)
  input.value = ''
}

function onDrop(event: DragEvent) {
  dragOver.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file)
    applyFile(file)
}

function applyFile(file: File) {
  const sizeKb = Math.max(1, Math.round(file.size / 1024))
  patchOptions({
    logoFileName: file.name,
    logoFileSizeLabel: sizeKb >= 1024
      ? `${(sizeKb / 1024).toFixed(1)} Mo`
      : `${sizeKb} Ko`,
  })
}

function clearLogo() {
  patchOptions({
    logoFileName: null,
    logoFileSizeLabel: null,
  })
}

function isService(id: QuoteServiceId) {
  return activeId.value === id
}
</script>

<template>
  <section
    v-if="activeId && activeMeta"
    class="inst-quote-svc-options"
    :aria-label="`Options — ${activeMeta.title}`"
  >
    <header class="inst-quote-svc-options__head">
      <div class="inst-quote-svc-options__title-row">
        <h3>
          <Check
            class="inst-quote-svc-options__check"
            :stroke-width="2.5"
            aria-hidden="true"
          />
          {{ activeMeta.title }}
        </h3>
        <button
          type="button"
          class="inst-quote-svc-options__toggle"
          :aria-expanded="optionsOpen"
          @click="optionsOpen = !optionsOpen"
        >
          {{ optionsOpen ? 'Masquer les options' : 'Afficher les options' }}
          <ChevronDown
            class="size-3.5"
            :class="{ 'inst-quote-svc-options__toggle-chevron--open': optionsOpen }"
            :stroke-width="2"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>

    <div
      v-if="optionsOpen && isService('logo')"
      class="inst-quote-svc-logo"
    >
      <div class="inst-quote-svc-logo__upload">
        <p class="inst-quote-field__label">
          Importer votre logo
        </p>
        <div
          class="inst-quote-svc-dropzone inst-quote-svc-dropzone--panel"
          :class="{ 'inst-quote-svc-dropzone--active': dragOver }"
          role="button"
          tabindex="0"
          @click="openFilePicker"
          @keydown.enter.prevent="openFilePicker"
          @dragover.prevent="dragOver = true"
          @dragleave.prevent="dragOver = false"
          @drop.prevent="onDrop"
        >
          <CloudUpload
            class="inst-quote-svc-dropzone__icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <div class="inst-quote-svc-dropzone__copy">
            <p class="inst-quote-svc-dropzone__title">
              Glissez-déposez votre logo
            </p>
            <p class="inst-quote-svc-dropzone__or">
              ou
            </p>
            <span class="inst-quote-svc-dropzone__browse">Parcourir vos fichiers</span>
            <p class="inst-quote-svc-dropzone__hint">
              PNG, JPG ou SVG
            </p>
          </div>
          <input
            ref="fileInput"
            type="file"
            class="sr-only"
            accept=".png,.jpg,.jpeg,.svg,image/png,image/jpeg,image/svg+xml"
            @change="onFileChange"
          >
        </div>

        <div
          v-if="options.logoFileName"
          class="inst-quote-svc-file"
        >
          <FileImage
            class="size-4"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <div class="inst-quote-svc-file__meta">
            <p class="inst-quote-svc-file__name">
              {{ options.logoFileName }}
            </p>
            <p
              v-if="options.logoFileSizeLabel"
              class="inst-quote-svc-file__size"
            >
              {{ options.logoFileSizeLabel }}
            </p>
          </div>
          <button
            type="button"
            class="inst-quote-svc-file__clear"
            aria-label="Retirer le logo"
            @click.stop="clearLogo"
          >
            <X
              class="size-4"
              :stroke-width="1.75"
            />
          </button>
        </div>
      </div>

      <label class="inst-quote-field inst-quote-svc-logo__placement">
        <span class="inst-quote-field__label">Emplacement souhaité</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.placement"
            @change="patchOptions({ placement: ($event.target as HTMLSelectElement).value })"
          >
            <option
              v-for="item in servicePlacementOptions"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>

      <label class="inst-quote-field inst-quote-svc-logo__color">
        <span class="inst-quote-field__label">Couleur d’impression</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select inst-quote-svc-color-select"
            :value="options.printColor"
            @change="patchOptions({ printColor: ($event.target as HTMLSelectElement).value })"
          >
            <option
              v-for="item in servicePrintColorOptions"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>
          <span
            class="inst-quote-svc-color-swatch"
            :style="{ background: selectedColor.swatch }"
            aria-hidden="true"
          />
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>

      <label class="inst-quote-field inst-quote-svc-logo__count">
        <span class="inst-quote-field__label">Nombre d’ouvrages concernés</span>
        <input
          class="inst-quote-field__input"
          type="number"
          min="1"
          :value="options.bookCount ?? ''"
          @input="patchOptions({
            bookCount: Number.parseInt(($event.target as HTMLInputElement).value, 10) || null,
          })"
        >
      </label>

      <label class="inst-quote-field inst-quote-svc-logo__text">
        <span class="inst-quote-field__label">Texte institutionnel (optionnel)</span>
        <input
          class="inst-quote-field__input"
          type="text"
          placeholder="Ex. : Bibliothèque centrale de Kinshasa"
          :value="options.institutionalText"
          @input="patchOptions({ institutionalText: ($event.target as HTMLInputElement).value })"
        >
      </label>

      <label class="inst-quote-field inst-quote-svc-logo__font">
        <span class="inst-quote-field__label">Police</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.fontFamily"
            @change="patchOptions({ fontFamily: ($event.target as HTMLSelectElement).value })"
          >
            <option
              v-for="font in serviceFontOptions"
              :key="font"
              :value="font"
            >
              {{ font }}
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>

      <label class="inst-quote-field inst-quote-svc-logo__size">
        <span class="inst-quote-field__label">Taille</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.fontSize"
            @change="patchOptions({ fontSize: ($event.target as HTMLSelectElement).value })"
          >
            <option
              v-for="size in serviceFontSizeOptions"
              :key="size"
              :value="size"
            >
              {{ size }} pt
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>
    </div>

    <div
      v-else-if="optionsOpen && isService('packaging')"
      class="inst-quote-svc-options__grid"
    >
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Style d’emballage</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.packagingStyle"
            @change="patchOptions({ packagingStyle: ($event.target as HTMLSelectElement).value })"
          >
            <option value="branded">
              Aux couleurs de l’institution
            </option>
            <option value="neutral">
              Neutre professionnel
            </option>
            <option value="eco">
              Emballage écoresponsable
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Nombre de colis estimé</span>
        <input
          class="inst-quote-field__input"
          type="number"
          min="1"
          :value="options.bookCount ?? ''"
          @input="patchOptions({
            bookCount: Number.parseInt(($event.target as HTMLInputElement).value, 10) || null,
          })"
        >
      </label>
      <label class="inst-quote-field inst-quote-svc-options__full">
        <span class="inst-quote-field__label">Précisions</span>
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea"
          rows="3"
          :value="options.notes"
          @input="patchOptions({ notes: ($event.target as HTMLTextAreaElement).value })"
        />
      </label>
    </div>

    <div
      v-else-if="optionsOpen && isService('pod')"
      class="inst-quote-svc-options__grid"
    >
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Format souhaité</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.podFormat"
            @change="patchOptions({ podFormat: ($event.target as HTMLSelectElement).value })"
          >
            <option value="broché">
              Broché
            </option>
            <option value="relié">
              Relié
            </option>
            <option value="cahier">
              Cahier / brochure
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Exemplaires à imprimer</span>
        <input
          class="inst-quote-field__input"
          type="number"
          min="1"
          :value="options.bookCount ?? ''"
          @input="patchOptions({
            bookCount: Number.parseInt(($event.target as HTMLInputElement).value, 10) || null,
          })"
        >
      </label>
      <label class="inst-quote-field inst-quote-svc-options__full">
        <span class="inst-quote-field__label">Titres concernés / précisions</span>
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea"
          rows="3"
          :value="options.notes"
          @input="patchOptions({ notes: ($event.target as HTMLTextAreaElement).value })"
        />
      </label>
    </div>

    <div
      v-else-if="optionsOpen && isService('catalog')"
      class="inst-quote-svc-options__grid"
    >
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Standard bibliographique</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.catalogStandard"
            @change="patchOptions({ catalogStandard: ($event.target as HTMLSelectElement).value })"
          >
            <option value="unimarc">
              UNIMARC
            </option>
            <option value="marc21">
              MARC21
            </option>
            <option value="dublin">
              Dublin Core
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>
      <label class="inst-quote-field inst-quote-svc-options__full">
        <span class="inst-quote-field__label">Système / SIGB cible</span>
        <input
          class="inst-quote-field__input"
          type="text"
          placeholder="Ex. Koha, PMB…"
          :value="options.notes"
          @input="patchOptions({ notes: ($event.target as HTMLInputElement).value })"
        >
      </label>
    </div>

    <div
      v-else-if="optionsOpen && isService('training')"
      class="inst-quote-svc-options__grid"
    >
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Format de formation</span>
        <span class="inst-quote-field__select-wrap">
          <select
            class="inst-quote-field__input inst-quote-field__select"
            :value="options.trainingFormat"
            @change="patchOptions({ trainingFormat: ($event.target as HTMLSelectElement).value })"
          >
            <option value="onsite">
              Sur site
            </option>
            <option value="remote">
              À distance
            </option>
            <option value="hybrid">
              Hybride
            </option>
          </select>
          <ChevronDown
            class="inst-quote-field__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </span>
      </label>
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Nombre de participants</span>
        <input
          class="inst-quote-field__input"
          type="number"
          min="1"
          :value="options.bookCount ?? ''"
          @input="patchOptions({
            bookCount: Number.parseInt(($event.target as HTMLInputElement).value, 10) || null,
          })"
        >
      </label>
      <label class="inst-quote-field inst-quote-svc-options__full">
        <span class="inst-quote-field__label">Objectifs / thème</span>
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea"
          rows="3"
          :value="options.notes"
          @input="patchOptions({ notes: ($event.target as HTMLTextAreaElement).value })"
        />
      </label>
    </div>

    <div
      v-else-if="optionsOpen"
      class="inst-quote-svc-options__grid"
    >
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Ouvrages concernés</span>
        <input
          class="inst-quote-field__input"
          type="number"
          min="1"
          :value="options.bookCount ?? ''"
          @input="patchOptions({
            bookCount: Number.parseInt(($event.target as HTMLInputElement).value, 10) || null,
          })"
        >
      </label>
      <label class="inst-quote-field inst-quote-svc-options__full">
        <span class="inst-quote-field__label">Précisions</span>
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea"
          rows="3"
          placeholder="Contraintes, références, préférences…"
          :value="options.notes"
          @input="patchOptions({ notes: ($event.target as HTMLTextAreaElement).value })"
        />
      </label>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, Info } from 'lucide-vue-next'
import ServiceCard from '~/components/institutional-quote/services/ServiceCard.vue'
import ServiceOptionsPanel from '~/components/institutional-quote/services/ServiceOptionsPanel.vue'
import {
  complementaryServices,
  createEmptyServiceOptions,
} from '@/data/institutional-quote'
import type {
  QuoteServiceId,
  QuoteServicesState,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteServicesState
  defaultBookCount?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteServicesState]
}>()

const notesOpen = ref(Boolean(props.modelValue.specificNotes.trim()))

function patch(partial: Partial<QuoteServicesState>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function toggleService(id: QuoteServiceId) {
  const selected = props.modelValue.selectedIds.includes(id)
  if (selected) {
    const selectedIds = props.modelValue.selectedIds.filter(item => item !== id)
    const activeServiceId = props.modelValue.activeServiceId === id
      ? (selectedIds[selectedIds.length - 1] ?? null)
      : props.modelValue.activeServiceId
    patch({ selectedIds, activeServiceId })
    return
  }

  const optionsByService = {
    ...props.modelValue.optionsByService,
    [id]: props.modelValue.optionsByService[id] ?? {
      ...createEmptyServiceOptions(),
      bookCount: props.defaultBookCount ?? null,
    },
  }
  patch({
    selectedIds: [...props.modelValue.selectedIds, id],
    activeServiceId: id,
    optionsByService,
  })
}
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-services-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          04.
        </p>
        <h2
          id="inst-quote-step-services-heading"
          class="inst-quote-step__title"
        >
          Services complémentaires
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Sélectionnez les options à intégrer à votre devis. Chaque service peut être précisé après sélection.
      </p>
    </header>

    <div
      class="inst-quote-svc-banner"
      role="note"
    >
      <Info
        class="inst-quote-svc-banner__icon"
        :stroke-width="1.5"
        aria-hidden="true"
      />
      <p>
        Les services cochés seront chiffrés dans votre devis. Vous pourrez les ajuster avec votre conseiller.
      </p>
    </div>

    <div class="inst-quote-svc-grid">
      <ServiceCard
        v-for="service in complementaryServices"
        :key="service.id"
        :id="service.id"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        :selected="modelValue.selectedIds.includes(service.id)"
        :active="modelValue.activeServiceId === service.id"
        @toggle="toggleService"
      />
    </div>

    <ServiceOptionsPanel
      :model-value="modelValue"
      :default-book-count="defaultBookCount"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <div class="inst-quote-svc-notes">
      <button
        type="button"
        class="inst-quote-svc-notes__toggle"
        :aria-expanded="notesOpen"
        @click="notesOpen = !notesOpen"
      >
        <span>Notes ou demandes spécifiques</span>
        <ChevronDown
          class="size-4"
          :class="{ 'inst-quote-svc-notes__chevron--open': notesOpen }"
          :stroke-width="1.75"
          aria-hidden="true"
        />
      </button>
      <div
        v-if="notesOpen"
        class="inst-quote-svc-notes__body"
      >
        <textarea
          class="inst-quote-field__input inst-quote-field__textarea"
          rows="4"
          placeholder="Contraintes budgétaires, délais, priorités…"
          :value="modelValue.specificNotes"
          @input="patch({ specificNotes: ($event.target as HTMLTextAreaElement).value })"
        />
      </div>
    </div>
  </section>
</template>

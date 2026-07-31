<script setup lang="ts">
import BookSelectionMethod from '~/components/institutional-quote/books/BookSelectionMethod.vue'
import CatalogueSearch from '~/components/institutional-quote/books/CatalogueSearch.vue'
import FileImport from '~/components/institutional-quote/books/FileImport.vue'
import NeedDescription from '~/components/institutional-quote/books/NeedDescription.vue'
import type {
  BookSelectionMethodId,
  QuoteBookSelection,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteBookSelection
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteBookSelection]
}>()

function setMethod(method: BookSelectionMethodId) {
  emit('update:modelValue', { ...props.modelValue, method })
}

function patch(partial: Partial<QuoteBookSelection>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-books-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          02.
        </p>
        <h2
          id="inst-quote-step-books-heading"
          class="inst-quote-step__title"
        >
          Sélection des livres
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Choisissez comment constituer votre lot : catalogue, import de liste ou description du besoin.
      </p>
    </header>

    <BookSelectionMethod
      :model-value="modelValue.method"
      @update:model-value="setMethod"
    />

    <CatalogueSearch
      v-if="modelValue.method === 'catalogue'"
      :model-value="modelValue"
      @update:model-value="patch"
    />

    <FileImport
      v-else-if="modelValue.method === 'import'"
      :model-value="modelValue.import"
      @update:model-value="patch({ import: $event })"
    />

    <NeedDescription
      v-else-if="modelValue.method === 'need'"
      :model-value="modelValue.need"
      @update:model-value="patch({ need: $event })"
    />
  </section>
</template>

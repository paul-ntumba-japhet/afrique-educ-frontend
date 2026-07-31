<script setup lang="ts">
import ContactPersonForm from '~/components/institutional-quote/institution/ContactPersonForm.vue'
import InstitutionInformationForm from '~/components/institutional-quote/institution/InstitutionInformationForm.vue'
import InstitutionTypeSelector from '~/components/institutional-quote/institution/InstitutionTypeSelector.vue'
import type {
  InstitutionTypeId,
  QuoteContactPerson,
  QuoteInstitutionInfo,
} from '@/types/institutional-quote'

defineProps<{
  institutionType: InstitutionTypeId | null
  institution: QuoteInstitutionInfo
  contact: QuoteContactPerson
}>()

defineEmits<{
  'update:institutionType': [value: InstitutionTypeId]
  'update:institution': [value: QuoteInstitutionInfo]
  'update:contact': [value: QuoteContactPerson]
}>()
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-institution-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          01.
        </p>
        <h2
          id="inst-quote-step-institution-heading"
          class="inst-quote-step__title"
        >
          Votre institution
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Renseignez les informations sur votre organisation et la personne de contact.
      </p>
    </header>

    <InstitutionTypeSelector
      :model-value="institutionType"
      @update:model-value="$emit('update:institutionType', $event)"
    />

    <InstitutionInformationForm
      :model-value="institution"
      @update:model-value="$emit('update:institution', $event)"
    />

    <ContactPersonForm
      :model-value="contact"
      @update:model-value="$emit('update:contact', $event)"
    />
  </section>
</template>

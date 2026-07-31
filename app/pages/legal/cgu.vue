<script setup lang="ts">
import LegalDocumentPage from '~/components/legal/LegalDocumentPage.vue'
import { cguMeta, cguRelatedLinks, cguSections } from '@/data/legal-cgu'

definePageMeta({
  layout: false,
})

useHead({
  title: `${cguMeta.title} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: cguMeta.description,
    },
  ],
})
</script>

<template>
  <LegalDocumentPage
    :meta="cguMeta"
    :sections="cguSections"
    :related-links="cguRelatedLinks"
    heading-id="legal-cgu-heading"
  />
</template>

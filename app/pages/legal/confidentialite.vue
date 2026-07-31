<script setup lang="ts">
import LegalDocumentPage from '~/components/legal/LegalDocumentPage.vue'
import {
  privacyMeta,
  privacyRelatedLinks,
  privacySections,
} from '@/data/legal-privacy'

definePageMeta({
  layout: false,
})

useHead({
  title: `${privacyMeta.title} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: privacyMeta.description,
    },
  ],
})
</script>

<template>
  <LegalDocumentPage
    :meta="privacyMeta"
    :sections="privacySections"
    :related-links="privacyRelatedLinks"
    heading-id="legal-privacy-heading"
  />
</template>

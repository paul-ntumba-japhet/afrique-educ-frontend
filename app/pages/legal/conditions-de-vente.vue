<script setup lang="ts">
import LegalDocumentPage from '~/components/legal/LegalDocumentPage.vue'
import {
  salesMeta,
  salesRelatedLinks,
  salesSections,
} from '@/data/legal-sales'

definePageMeta({
  layout: false,
})

useHead({
  title: `${salesMeta.title} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: salesMeta.description,
    },
  ],
})
</script>

<template>
  <LegalDocumentPage
    :meta="salesMeta"
    :sections="salesSections"
    :related-links="salesRelatedLinks"
    heading-id="legal-sales-heading"
  />
</template>

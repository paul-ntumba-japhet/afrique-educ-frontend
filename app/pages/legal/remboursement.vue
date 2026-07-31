<script setup lang="ts">
import LegalDocumentPage from '~/components/legal/LegalDocumentPage.vue'
import {
  refundMeta,
  refundRelatedLinks,
  refundSections,
} from '@/data/legal-refund'

definePageMeta({
  layout: false,
})

useHead({
  title: `${refundMeta.title} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: refundMeta.description,
    },
  ],
})
</script>

<template>
  <LegalDocumentPage
    :meta="refundMeta"
    :sections="refundSections"
    :related-links="refundRelatedLinks"
    heading-id="legal-refund-heading"
  />
</template>

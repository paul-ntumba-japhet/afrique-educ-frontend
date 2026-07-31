<script setup lang="ts">
import LegalDocumentPage from '~/components/legal/LegalDocumentPage.vue'
import {
  dmcaMeta,
  dmcaRelatedLinks,
  dmcaSections,
} from '@/data/legal-dmca'

definePageMeta({
  layout: false,
})

useHead({
  title: `${dmcaMeta.title} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: dmcaMeta.description,
    },
  ],
})
</script>

<template>
  <LegalDocumentPage
    :meta="dmcaMeta"
    :sections="dmcaSections"
    :related-links="dmcaRelatedLinks"
    heading-id="legal-dmca-heading"
  />
</template>

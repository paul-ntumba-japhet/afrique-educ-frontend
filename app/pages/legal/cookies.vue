<script setup lang="ts">
import LegalDocumentPage from '~/components/legal/LegalDocumentPage.vue'
import {
  cookiesMeta,
  cookiesRelatedLinks,
  cookiesSections,
} from '@/data/legal-cookies'

definePageMeta({
  layout: false,
})

useHead({
  title: `${cookiesMeta.title} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: cookiesMeta.description,
    },
  ],
})
</script>

<template>
  <LegalDocumentPage
    :meta="cookiesMeta"
    :sections="cookiesSections"
    :related-links="cookiesRelatedLinks"
    heading-id="legal-cookies-heading"
  />
</template>

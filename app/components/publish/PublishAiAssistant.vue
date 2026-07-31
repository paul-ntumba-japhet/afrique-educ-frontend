<script setup lang="ts">
import { publishAiAssistantSection } from '@/data/publish-page'
import assistantImage from '~/assets/images/publier/assistant-ia.avif'

const section = publishAiAssistantSection
</script>

<template>
  <article
    class="publish-ai-services__panel publish-ai-assistant"
    aria-labelledby="publish-ai-assistant-heading"
  >
    <h2
      id="publish-ai-assistant-heading"
      class="publish-ai-services__panel-title"
    >
      {{ section.title }}
    </h2>

    <div class="publish-ai-assistant__visual">
      <img
        :src="assistantImage"
        :alt="section.imageAlt"
        class="publish-ai-assistant__image"
        width="640"
        height="520"
        loading="lazy"
        decoding="async"
      >
    </div>
  </article>
</template>

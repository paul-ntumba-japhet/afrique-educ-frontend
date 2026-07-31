<script setup lang="ts">
defineProps<{
  index: string
  title: string
  actionLabel?: string
  actionHref?: string
  headingId?: string
}>()
</script>

<template>
  <div class="categories-section-title categories-scroll-reveal">
    <div class="categories-section-title__heading">
      <span class="categories-section-title__index">{{ index }}</span>
      <h2
        :id="headingId"
        class="categories-section-title__title"
      >
        {{ title }}
      </h2>
    </div>

    <NuxtLink
      v-if="actionLabel && actionHref"
      :to="actionHref"
      class="categories-section-title__action"
    >
      {{ actionLabel }}
      <span aria-hidden="true">→</span>
    </NuxtLink>
  </div>
</template>

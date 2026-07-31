<script setup lang="ts">
import type { FooterColumn } from '@/data/footer'

defineProps<{
  columns: FooterColumn[]
}>()
</script>

<template>
  <nav
    class="site-footer__nav"
    aria-label="Liens du pied de page"
  >
    <div
      v-for="column in columns"
      :key="column.title"
      class="site-footer__col"
    >
      <p class="site-footer__col-title">
        {{ column.title }}
      </p>
      <ul class="site-footer__list">
        <li
          v-for="link in column.links"
          :key="link.href"
        >
          <NuxtLink
            :to="link.href"
            class="site-footer__link"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

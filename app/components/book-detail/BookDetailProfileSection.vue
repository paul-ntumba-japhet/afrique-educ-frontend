<script setup lang="ts">
import type { BookDetailAuthorProfile, BookDetailTableOfContents } from '@/data/book-detail-page'

defineProps<{
  author: BookDetailAuthorProfile
  tableOfContents: BookDetailTableOfContents
}>()
</script>

<template>
  <section
    class="book-detail-profile book-detail-scroll-reveal"
    aria-label="Profil auteur et table des matières"
  >
    <div class="book-detail-profile__grid">
      <BookAuthorCard :author="author" />
      <BookTableOfContents :table-of-contents="tableOfContents" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BookDetailTableOfContents } from '@/data/book-detail-page'

defineProps<{
  tableOfContents: BookDetailTableOfContents
}>()

const listRef = ref<HTMLOListElement | null>(null)

function scrollToEnd() {
  listRef.value?.scrollTo({
    top: listRef.value.scrollHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <article
    class="book-detail-profile-card book-detail-profile-card--toc"
    aria-labelledby="book-toc-heading"
  >
    <h2
      id="book-toc-heading"
      class="book-detail-profile-card__title"
    >
      {{ tableOfContents.sectionTitle }}
    </h2>

    <div class="book-detail-toc__scroll">
      <ol
        ref="listRef"
        class="book-detail-toc__list"
      >
        <li
          v-for="item in tableOfContents.items"
          :key="item.id"
          class="book-detail-toc__item"
          :class="`book-detail-toc__item--${item.level}`"
        >
          <span class="book-detail-toc__title">{{ item.title }}</span>
          <span
            v-if="item.page"
            class="book-detail-toc__page"
          >{{ item.page }}</span>
        </li>
      </ol>
    </div>

    <button
      type="button"
      class="book-detail-toc__toggle"
      @click="scrollToEnd"
    >
      {{ tableOfContents.viewAllLabel }}
    </button>
  </article>
</template>

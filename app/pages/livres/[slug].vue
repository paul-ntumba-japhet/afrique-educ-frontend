<script setup lang="ts">
import { getBookDetailPage } from '@/data/book-detail-page'
import { getBookBySlug } from '@/composables/useBooksMock'

const route = useRoute()
const slug = String(route.params.slug)

const detailPage = getBookDetailPage(slug)
const catalogBook = getBookBySlug(slug)

if (!detailPage && !catalogBook) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Livre introuvable',
  })
}

const pageTitle = detailPage?.title ?? catalogBook!.title
const pageAuthor = detailPage?.author.name ?? catalogBook!.author
const pageDescription = detailPage?.excerpt
  ?? `Découvrez « ${pageTitle} » par ${pageAuthor} sur Afric-Educ.`

useHead({
  title: `${pageTitle} — Afric-Educ`,
  meta: [
    {
      name: 'description',
      content: pageDescription,
    },
  ],
})

if (detailPage) {
  useSeoMeta({
    title: `${detailPage.title} — ${detailPage.author.name} | Afric-Educ`,
    description: detailPage.excerpt,
    ogTitle: `${detailPage.title} — ${detailPage.author.name}`,
    ogDescription: detailPage.excerpt,
  })
}

const pageRef = ref<HTMLElement | null>(null)
useBookDetailPageAnimations(pageRef)
</script>

<template>
  <main
    ref="pageRef"
    class="book-detail-page"
  >
    <div class="book-detail-page__container">
      <BookDetailHero
        v-if="detailPage"
        :book="detailPage"
      />

      <BookPreviewSection
        v-if="detailPage"
        :preview="detailPage.preview"
      />

      <BookDetailInfoSection
        v-if="detailPage"
        :description="detailPage.description"
        :bibliography="detailPage.bibliography"
      />

      <BookDetailProfileSection
        v-if="detailPage"
        :author="detailPage.authorProfile"
        :table-of-contents="detailPage.tableOfContents"
      />

      <BookDetailInsightsSection
        v-if="detailPage"
        :insights="detailPage.insights"
      />

      <BookDetailRecommendationsSection
        v-if="detailPage"
        :related-books="detailPage.relatedBooks"
        :formats="detailPage.formats"
      />

      <div
        v-else-if="catalogBook"
        class="book-detail-page__fallback"
      >
        <NuxtLink
          to="/livres"
          class="book-detail-page__back"
        >
          ← Retour au catalogue
        </NuxtLink>
        <h1 class="book-detail-page__fallback-title">
          {{ catalogBook.title }}
        </h1>
        <p class="book-detail-page__fallback-author">
          {{ catalogBook.author }}
        </p>
      </div>
    </div>
  </main>
</template>

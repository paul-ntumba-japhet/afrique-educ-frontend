<script setup lang="ts">
definePageMeta({
  layout: false,
})

useHead({
  title: 'Catégories — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Explorez plus de 50 catégories de livres pour apprendre, enseigner, se divertir et transmettre le savoir africain et mondial.',
    },
  ],
})

const mainRef = ref<HTMLElement | null>(null)
const { init: initPageAnimations, cleanup: cleanupPageAnimations } = useCategoriesPageAnimations(mainRef)

onMounted(async () => {
  await nextTick()
  initPageAnimations()
})

onUnmounted(() => {
  cleanupPageAnimations()
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-brand-black text-brand-text">
    <AppHeader />
    <main ref="mainRef">
      <CategoriesHero />
      <MainCategoriesSection />
      <ThemesAndFormatsSection />
      <HeritageSection />
      <PopularCategoriesSection />
      <InstitutionsSection />
      <AuthorsAndSearchSection />
      <CategoriesFinalCtaSection />
    </main>
    <AppFooter />
  </div>
</template>

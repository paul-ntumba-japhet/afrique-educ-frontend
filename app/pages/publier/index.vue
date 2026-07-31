<script setup lang="ts">
definePageMeta({
  layout: false,
})

useHead({
  title: 'Publier un livre — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Publiez votre livre et touchez des lecteurs partout en Afrique et dans le monde. Outils professionnels, assistance IA et réseau de diffusion pour les auteurs africains.',
    },
  ],
})

const mainRef = ref<HTMLElement | null>(null)
usePublishPageAnimations(mainRef)
</script>

<template>
  <div class="publish-page flex min-h-screen flex-col">
    <AppHeader />
    <main
      ref="mainRef"
      class="publish-page__main"
    >
      <PublishHero />
      <PublishBenefits />
      <PublishSteps />

      <section
        class="publish-ai-services publish-section"
        aria-label="Assistant IA et accompagnement professionnel"
      >
        <div class="page-container publish-ai-services__inner">
          <div class="publish-ai-services__grid">
            <PublishAiAssistant />
            <PublishEditorialServices />
          </div>
        </div>
      </section>

      <section
        class="publish-pricing-dashboard publish-section"
        aria-label="Formules et tableau de bord auteur"
      >
        <div class="page-container publish-pricing-dashboard__inner">
          <div class="publish-pricing-dashboard__grid">
            <PricingPlans />
            <AuthorDashboardPreview />
          </div>
        </div>
      </section>

      <section
        class="publish-testimonials-faq publish-section"
        aria-label="Témoignages et questions fréquentes"
      >
        <div class="page-container publish-testimonials-faq__inner">
          <div class="publish-testimonials-faq__grid">
            <AuthorTestimonials />
            <PublishFaq />
          </div>
        </div>
      </section>

      <PublishFinalCta />
      <AuthorGrowthWidgets />
    </main>
    <AppFooter />
  </div>
</template>

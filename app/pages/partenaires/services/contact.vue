<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import ContactAdvisorHero from '~/components/contact-advisor/ContactAdvisorHero.vue'
import ContactAdvisorChannels from '~/components/contact-advisor/ContactAdvisorChannels.vue'
import ContactAdvisorForm from '~/components/contact-advisor/ContactAdvisorForm.vue'
import ContactAdvisorNeeds from '~/components/contact-advisor/ContactAdvisorNeeds.vue'
import ContactAdvisorOffice from '~/components/contact-advisor/ContactAdvisorOffice.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Contactez un conseiller institutions — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Contactez un conseiller Afric-Educ pour un devis, une commande institutionnelle ou un accompagnement personnalisé.',
    },
  ],
})
</script>

<template>
  <div class="contact-advisor-page">
    <AppHeader />
    <main class="contact-advisor-page__main">
      <ContactAdvisorHero />
      <ContactAdvisorChannels />
      <section
        class="contact-advisor-main"
        aria-label="Formulaire et besoins"
      >
        <div class="page-container contact-advisor-main__inner">
          <ContactAdvisorForm />
          <ContactAdvisorNeeds />
        </div>
      </section>
      <ContactAdvisorOffice />
    </main>
    <AppFooter />
  </div>
</template>

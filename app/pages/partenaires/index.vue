<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import PartnershipCollaborators from '~/components/partenariat/PartnershipCollaborators.vue'
import PartnershipForms from '~/components/partenariat/PartnershipForms.vue'
import PartnershipHero from '~/components/partenariat/PartnershipHero.vue'
import PartnershipProposal from '~/components/partenariat/PartnershipProposal.vue'
import PartnershipSteps from '~/components/partenariat/PartnershipSteps.vue'
import PartnershipValue from '~/components/partenariat/PartnershipValue.vue'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Devenir partenaire — Afric-Educ',
  meta: [
    {
      name: 'description',
      content:
        'Rejoignez le programme partenaires Afric-Educ : bibliothèques, librairies et imprimeries unies pour développer le livre en Afrique.',
    },
  ],
})
</script>

<template>
  <div class="partnership-page">
    <AppHeader />
    <main class="partnership-page__main">
      <PartnershipHero />
      <PartnershipCollaborators />
      <PartnershipForms />
      <PartnershipValue />
      <PartnershipSteps />
      <PartnershipProposal />
    </main>
    <AppFooter />
  </div>
</template>

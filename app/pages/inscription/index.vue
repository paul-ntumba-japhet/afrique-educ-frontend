<script setup lang="ts">
import RegisterWizard from '@/components/register/RegisterWizard.vue'

definePageMeta({
  layout: false,
  ssr: false,
})

useHead({
  title: 'Inscription — Plateforme Livres',
  meta: [
    {
      name: 'description',
      content: 'Créez votre compte lecteur, auteur ou organisation sur Plateforme Livres.',
    },
  ],
})

onMounted(() => {
  useRegisterStore().reset()
})

onBeforeUnmount(() => {
  const store = useRegisterStore()
  if (store.currentStepKey === 'success')
    store.reset()
})
</script>

<template>
  <div class="register-page">
    <main class="register-page__main">
      <div class="register-page__container">
        <ClientOnly>
          <RegisterWizard />
        </ClientOnly>
      </div>
    </main>
  </div>
</template>

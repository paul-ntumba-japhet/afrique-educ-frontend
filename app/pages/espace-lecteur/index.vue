<script setup lang="ts">
useHead({
  title: 'Espace lecteur — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Votre espace lecteur Afric-Educ : bibliothèque personnelle et lecture numérique.',
    },
  ],
})
</script>

<template>
  <section class="page-container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-16 text-center">
    <p class="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
      Espace lecteur
    </p>
    <h1 class="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
      Votre espace numérique de travail
    </h1>
    <p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
      Bienvenue dans votre espace lecteur. Cette page sera enrichie prochainement avec votre bibliothèque et vos lectures en cours.
    </p>
    <NuxtLink
      to="/livres"
      class="mt-6 inline-flex h-9 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      Explorer la bibliothèque
    </NuxtLink>
  </section>
</template>

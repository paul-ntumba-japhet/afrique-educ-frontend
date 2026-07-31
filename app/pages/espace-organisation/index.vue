<script setup lang="ts">
useHead({
  title: 'Espace organisation — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Votre espace organisation Afric-Educ : catalogue, collections et collaboration avec les auteurs.',
    },
  ],
})
</script>

<template>
  <section class="page-container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-16 text-center">
    <p class="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
      Espace organisation
    </p>
    <h1 class="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
      Votre espace numérique de travail
    </h1>
    <p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
      Bienvenue dans votre espace organisation. Cette page sera enrichie prochainement avec la gestion de votre catalogue et le suivi de vos collections.
    </p>
    <NuxtLink
      to="/"
      class="mt-6 inline-flex h-9 items-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
    >
      Retour à l'accueil
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Espace auteur — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Votre espace auteur Afric-Educ : publications, statistiques et gestion de vos ouvrages.',
    },
  ],
})
</script>

<template>
  <section class="page-container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-16 text-center">
    <p class="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
      Espace auteur
    </p>
    <h1 class="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
      Votre espace numérique de travail
    </h1>
    <p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
      Bienvenue dans votre espace auteur. Cette page sera enrichie prochainement avec vos publications, vos statistiques et vos outils de gestion.
    </p>
    <NuxtLink
      to="/publier"
      class="mt-6 inline-flex h-9 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      Découvrir la publication
    </NuxtLink>
  </section>
</template>

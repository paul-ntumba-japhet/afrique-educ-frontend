<template>
  <UApp :toaster="{ position: 'top-right', duration: 4000 }">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

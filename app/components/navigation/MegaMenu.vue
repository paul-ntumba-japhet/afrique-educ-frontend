<script setup lang="ts">
import type { MegaMenuConfig } from '@/config/navigation'
import { headerMenuLinkActiveClass, headerMenuLinkClass } from '@/config/navigation'

const props = defineProps<{
  menu: MegaMenuConfig
  open?: boolean
}>()

const emit = defineEmits<{
  open: []
  close: []
}>()

function handleEnter() {
  emit('open')
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) emit('close')
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div
    class="relative inline-flex h-8 items-center"
    @mouseenter="handleEnter"
  >
    <NuxtLink
      v-if="menu.href"
      :to="menu.href"
      :class="[headerMenuLinkClass, open && headerMenuLinkActiveClass]"
      :aria-expanded="open"
      aria-haspopup="true"
      @mouseenter="handleEnter"
    >
      {{ menu.label }}
    </NuxtLink>
    <button
      v-else
      type="button"
      :class="[headerMenuLinkClass, open && headerMenuLinkActiveClass]"
      :aria-expanded="open"
      aria-haspopup="true"
    >
      {{ menu.label }}
    </button>
    <!-- Pont vers le panneau (sans fermeture au survol) -->
    <div
      v-if="open"
      class="absolute inset-x-0 top-full z-[120] h-1"
      aria-hidden="true"
    />
  </div>
</template>

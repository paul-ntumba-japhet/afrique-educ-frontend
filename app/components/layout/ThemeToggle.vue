<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

interface Props {
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  compact: false,
})

const { isDark, setLight, setDark } = useAppTheme()
</script>

<template>
  <div
    class="theme-toggle"
    :class="{ 'theme-toggle--compact': compact }"
    role="group"
    aria-label="Thème d'affichage"
  >
    <button
      type="button"
      class="theme-toggle__btn"
      :class="{ 'theme-toggle__btn--active': !isDark }"
      :aria-pressed="!isDark"
      @click="setLight"
    >
      <Sun
        class="theme-toggle__icon"
        aria-hidden="true"
      />
      <span
        v-if="!compact"
        class="theme-toggle__label"
      >Clair</span>
    </button>
    <button
      type="button"
      class="theme-toggle__btn"
      :class="{ 'theme-toggle__btn--active': isDark }"
      :aria-pressed="isDark"
      @click="setDark"
    >
      <Moon
        class="theme-toggle__icon"
        aria-hidden="true"
      />
      <span
        v-if="!compact"
        class="theme-toggle__label"
      >Nuit</span>
    </button>
  </div>
</template>

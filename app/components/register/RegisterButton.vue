<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
  loading: false,
})
</script>

<template>
  <button
    :type="type"
    class="register-btn"
    :class="`register-btn--${variant}`"
    :disabled="disabled || loading"
  >
    <span
      v-if="loading"
      class="register-btn__spinner"
      aria-hidden="true"
    />
    <slot />
  </button>
</template>

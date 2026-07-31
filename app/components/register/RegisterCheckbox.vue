<script setup lang="ts">
interface Props {
  modelValue: boolean
  label: string
  error?: string
}

withDefaults(defineProps<Props>(), {
  error: '',
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label class="register-checkbox">
    <input
      type="checkbox"
      class="register-checkbox__input"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span class="register-checkbox__box" aria-hidden="true" />
    <span class="register-checkbox__label">{{ label }}</span>
    <span
      v-if="error"
      class="register-field__error register-checkbox__error"
      role="alert"
    >{{ error }}</span>
  </label>
</template>

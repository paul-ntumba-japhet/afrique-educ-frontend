<script setup lang="ts">
import type { Component } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

interface Props {
  modelValue: string | number
  label: string
  type?: string
  placeholder?: string
  error?: string
  icon?: Component
  autocomplete?: string
  inputmode?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  error: '',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const showPassword = ref(false)

const inputType = computed(() => {
  if (props.type === 'password')
    return showPassword.value ? 'text' : 'password'
  return props.type
})
</script>

<template>
  <label class="register-field">
    <span class="register-field__label">{{ label }}</span>

    <div
      class="register-field__control"
      :class="{ 'register-field__control--error': error }"
    >
      <component
        :is="icon"
        v-if="icon"
        class="register-field__icon"
        aria-hidden="true"
      />

      <input
        :type="inputType"
        class="register-field__input"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >

      <button
        v-if="type === 'password'"
        type="button"
        class="register-field__toggle"
        :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
        :aria-pressed="showPassword"
        @click="showPassword = !showPassword"
      >
        <EyeOff
          v-if="showPassword"
          class="register-field__toggle-icon"
          aria-hidden="true"
        />
        <Eye
          v-else
          class="register-field__toggle-icon"
          aria-hidden="true"
        />
      </button>
    </div>

    <span
      v-if="error"
      class="register-field__error"
      role="alert"
    >{{ error }}</span>
  </label>
</template>

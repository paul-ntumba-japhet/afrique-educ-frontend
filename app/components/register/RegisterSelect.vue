<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  error?: string
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  error: '',
  placeholder: 'Sélectionner',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label class="register-field">
    <span class="register-field__label">{{ label }}</span>

    <div
      class="register-field__control"
      :class="{ 'register-field__control--error': error }"
    >
      <select
        class="register-field__select"
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option
          value=""
          disabled
        >
          {{ placeholder }}
        </option>
        <slot />
      </select>
    </div>

    <span
      v-if="error"
      class="register-field__error"
      role="alert"
    >{{ error }}</span>
  </label>
</template>

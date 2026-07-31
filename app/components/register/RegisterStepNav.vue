<script setup lang="ts">
import RegisterButton from '@/components/register/RegisterButton.vue'

interface Props {
  showBack?: boolean
  continueLabel?: string
  showSkip?: boolean
  skipLabel?: string
  continueDisabled?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  showBack: true,
  continueLabel: 'Continuer',
  showSkip: false,
  skipLabel: 'Passer cette étape',
  continueDisabled: false,
  loading: false,
})

defineEmits<{
  back: []
  continue: []
  skip: []
}>()
</script>

<template>
  <div class="register-step-nav">
    <button
      v-if="showBack"
      type="button"
      class="register-step-nav__back"
      @click="$emit('back')"
    >
      Retour
    </button>

    <div class="register-step-nav__actions">
      <button
        v-if="showSkip"
        type="button"
        class="register-step-nav__skip"
        @click="$emit('skip')"
      >
        {{ skipLabel }}
      </button>

      <RegisterButton
        :disabled="continueDisabled"
        :loading="loading"
        @click="$emit('continue')"
      >
        {{ continueLabel }}
      </RegisterButton>
    </div>
  </div>
</template>

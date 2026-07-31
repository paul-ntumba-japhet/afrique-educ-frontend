<script setup lang="ts">
import { Mail, ShieldCheck } from 'lucide-vue-next'
import { consentOptions } from '@/data/institutional-quote'
import type { QuoteConsentState } from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteConsentState
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteConsentState]
}>()

function toggle(id: keyof QuoteConsentState) {
  emit('update:modelValue', {
    ...props.modelValue,
    [id]: !props.modelValue[id],
  })
}
</script>

<template>
  <section
    class="inst-quote-consent"
    aria-labelledby="inst-quote-consent-heading"
  >
    <div class="inst-quote-consent__main">
      <h3
        id="inst-quote-consent-heading"
        class="inst-quote-consent__title"
      >
        Confirmations et consentements
      </h3>

      <ul class="inst-quote-consent__list">
        <li
          v-for="option in consentOptions"
          :key="option.id"
        >
          <label class="inst-quote-consent__item">
            <input
              class="inst-quote-consent__input"
              type="checkbox"
              :checked="modelValue[option.id]"
              :required="option.required"
              @change="toggle(option.id)"
            >
            <span
              class="inst-quote-consent__box"
              aria-hidden="true"
            />
            <span class="inst-quote-consent__label">
              {{ option.label }}
            </span>
          </label>
        </li>
      </ul>
    </div>

    <aside class="inst-quote-consent__note">
      <span
        class="inst-quote-consent__note-icon"
        aria-hidden="true"
      >
        <ShieldCheck
          class="size-5"
          :stroke-width="1.5"
        />
        <Mail
          class="size-3.5"
          :stroke-width="1.75"
        />
      </span>
      <p>
        Après envoi, vous recevrez un e-mail de confirmation contenant un numéro de référence pour suivre votre demande.
      </p>
    </aside>
  </section>
</template>

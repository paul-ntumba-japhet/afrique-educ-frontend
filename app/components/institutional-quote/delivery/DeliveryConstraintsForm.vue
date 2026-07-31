<script setup lang="ts">
import { Check, CalendarDays } from 'lucide-vue-next'
import { deliveryConstraintOptions } from '@/data/institutional-quote'
import type { DeliveryConstraintId } from '@/types/institutional-quote'

const props = defineProps<{
  constraints: DeliveryConstraintId[]
  desiredDate: string
  deadlineDate: string
  comments: string
}>()

const emit = defineEmits<{
  'update:constraints': [value: DeliveryConstraintId[]]
  'update:desiredDate': [value: string]
  'update:deadlineDate': [value: string]
  'update:comments': [value: string]
}>()

function toggleConstraint(id: DeliveryConstraintId) {
  if (props.constraints.includes(id)) {
    emit('update:constraints', props.constraints.filter(item => item !== id))
    return
  }
  emit('update:constraints', [...props.constraints, id])
}
</script>

<template>
  <fieldset class="inst-quote-form inst-quote-deliv-constraints">
    <legend class="inst-quote-form__legend">
      Contraintes et instructions de livraison
    </legend>

    <div class="inst-quote-deliv-constraints__checks">
      <button
        v-for="item in deliveryConstraintOptions"
        :key="item.id"
        type="button"
        class="inst-quote-deliv-constraints__check"
        :class="{ 'inst-quote-deliv-constraints__check--on': constraints.includes(item.id) }"
        :aria-pressed="constraints.includes(item.id)"
        @click="toggleConstraint(item.id)"
      >
        <span
          class="inst-quote-deliv-constraints__box"
          aria-hidden="true"
        >
          <Check
            v-if="constraints.includes(item.id)"
            class="size-3"
            :stroke-width="3"
          />
        </span>
        <span>{{ item.label }}</span>
      </button>
    </div>

    <div class="inst-quote-deliv-constraints__dates">
      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Date souhaitée</span>
        <span class="inst-quote-field__with-icon">
          <CalendarDays
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="date"
            :value="desiredDate"
            @input="emit('update:desiredDate', ($event.target as HTMLInputElement).value)"
          >
        </span>
      </label>

      <label class="inst-quote-field">
        <span class="inst-quote-field__label">Date limite impérative (si applicable)</span>
        <span class="inst-quote-field__with-icon">
          <CalendarDays
            class="inst-quote-field__leading-icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <input
            class="inst-quote-field__input inst-quote-field__input--icon"
            type="date"
            :value="deadlineDate"
            @input="emit('update:deadlineDate', ($event.target as HTMLInputElement).value)"
          >
        </span>
      </label>
    </div>

    <label class="inst-quote-field inst-quote-field--full">
      <span class="inst-quote-field__label">Commentaires ou instructions particulières</span>
      <textarea
        class="inst-quote-field__input inst-quote-field__textarea"
        rows="4"
        placeholder="Horaires, accès, consignes de sécurité…"
        :value="comments"
        @input="emit('update:comments', ($event.target as HTMLTextAreaElement).value)"
      />
    </label>
  </fieldset>
</template>

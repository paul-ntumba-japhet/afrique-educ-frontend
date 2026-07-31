<script setup lang="ts">
import { Check, Headphones } from 'lucide-vue-next'
import { quoteSteps } from '@/data/institutional-quote'

const props = defineProps<{
  currentStep: number
  /** When true, every step is shown as completed (confirmation page). */
  allComplete?: boolean
}>()

const emit = defineEmits<{
  contact: []
}>()

function isDone(index: number) {
  if (props.allComplete)
    return true
  return props.currentStep > index + 1
}

function isActive(index: number) {
  if (props.allComplete)
    return false
  return props.currentStep === index + 1
}
</script>

<template>
  <aside
    class="inst-quote-sidebar"
    aria-label="Navigation du devis"
  >
    <div class="inst-quote-sidebar__inner">
      <nav
        class="inst-quote-sidebar__nav"
        aria-label="Progression du devis"
      >
        <ol class="inst-quote-sidebar__steps">
          <li
            v-for="(step, index) in quoteSteps"
            :key="step.id"
            class="inst-quote-sidebar__step"
            :class="{
              'inst-quote-sidebar__step--active': isActive(index),
              'inst-quote-sidebar__step--done': isDone(index),
            }"
          >
            <span
              class="inst-quote-sidebar__step-rail"
              aria-hidden="true"
            >
              <span class="inst-quote-sidebar__step-num">
                {{ step.number }}
              </span>
            </span>
            <span class="inst-quote-sidebar__step-copy">
              <span class="inst-quote-sidebar__step-heading">
                <span class="inst-quote-sidebar__step-title">{{ step.title }}</span>
              </span>
              <span class="inst-quote-sidebar__step-sub">{{ step.subtitle }}</span>
            </span>
            <span
              v-if="isDone(index)"
              class="inst-quote-sidebar__step-done-badge"
              aria-label="Étape complétée"
            >
              <Check
                class="size-2.5"
                :stroke-width="3"
              />
            </span>
          </li>
        </ol>
      </nav>

      <div class="inst-quote-sidebar__help">
        <div class="inst-quote-sidebar__help-top">
          <div
            class="inst-quote-sidebar__help-icon"
            aria-hidden="true"
          >
            <Headphones
              class="size-7"
              :stroke-width="1.5"
            />
          </div>
          <div class="inst-quote-sidebar__help-copy">
            <p class="inst-quote-sidebar__help-title">
              Besoin d’aide ?
            </p>
            <p class="inst-quote-sidebar__help-text">
              Un conseiller institutions peut vous accompagner à chaque étape.
            </p>
          </div>
        </div>
        <button
          type="button"
          class="inst-quote-sidebar__help-btn"
          @click="emit('contact')"
        >
          Nous contacter
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'
import {
  COMING_SOON_LAUNCH_AT,
  comingSoonUnits,
  type ComingSoonUnit,
} from '@/data/coming-soon'

const prefersReducedMotion = usePreferredReducedMotion()

const remaining = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

function pad(value: number) {
  return String(Math.max(0, value)).padStart(2, '0')
}

function display(unit: ComingSoonUnit) {
  const value = remaining.value[unit]
  return unit === 'days' ? String(value) : pad(value)
}

function tick() {
  const diff = Math.max(0, COMING_SOON_LAUNCH_AT.getTime() - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  remaining.value = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

const { pause, resume } = useIntervalFn(tick, 1000, { immediate: false })

onMounted(() => {
  tick()
  if (prefersReducedMotion.value !== 'reduce')
    resume()
})

watch(prefersReducedMotion, (value) => {
  if (value === 'reduce')
    pause()
  else
    resume()
})
</script>

<template>
  <div
    class="launch-countdown"
    role="timer"
    aria-live="polite"
    :aria-label="`Compte à rebours : ${remaining.days} jours, ${remaining.hours} heures, ${remaining.minutes} minutes, ${remaining.seconds} secondes`"
  >
    <template
      v-for="(unit, index) in comingSoonUnits"
      :key="unit.key"
    >
      <div
        v-if="index > 0"
        class="launch-countdown__sep"
        aria-hidden="true"
      >
        :
      </div>
      <div class="launch-countdown__unit">
        <span class="launch-countdown__value">{{ display(unit.key) }}</span>
        <span class="launch-countdown__label">{{ unit.label }}</span>
      </div>
    </template>
  </div>
</template>

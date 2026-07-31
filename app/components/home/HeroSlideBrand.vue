<script setup lang="ts">
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'
import { ArrowRight, BookOpen, PenLine, Sparkles } from 'lucide-vue-next'

const SEQUENCE_DURATION_MS = 4000

const sloganLines = [
  "L'Afrique  lit",
  "L'Afrique  publie",
  "L'Afrique  transmet  son savoir",
] as const

const activeIndex = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const { pause, resume } = useIntervalFn(
  () => {
    activeIndex.value = (activeIndex.value + 1) % sloganLines.length
  },
  SEQUENCE_DURATION_MS,
  { immediate: false },
)

onMounted(() => {
  if (prefersReducedMotion.value === 'reduce') {
    pause()
  }
  else {
    resume()
  }
})

watch(prefersReducedMotion, (value) => {
  if (value === 'reduce') {
    pause()
    activeIndex.value = 0
  }
  else {
    resume()
  }
})

function goToStep(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <div class="hero-section__main">
    <div class="hero-section__center">
      <div class="hero-section__labels">
        <p class="hero-section__badge inline-flex items-center gap-2 rounded-full border border-soft-gold/25 bg-soft-gold/10 px-4 py-1.5 text-xs font-medium tracking-widest text-soft-gold uppercase">
          <Sparkles
            class="size-3.5"
            aria-hidden="true"
          />
          Digital African Renaissance
        </p>
      </div>

      <div
        class="hero-section__slogan"
        aria-live="polite"
        aria-atomic="true"
      >
        <Transition
          name="hero-slogan"
          mode="out-in"
        >
          <h1
            id="hero-heading"
            :key="activeIndex"
            class="hero-section__headline text-foreground"
          >
            <span class="text-gradient-gold">{{ sloganLines[activeIndex] }}</span>
          </h1>
        </Transition>
      </div>

      <div class="hero-section__indicators">
        <button
          v-for="(_, index) in sloganLines"
          :key="index"
          type="button"
          class="hero-section__dot"
          :class="{ 'hero-section__dot--active': index === activeIndex }"
          :aria-label="`Étape ${index + 1} sur ${sloganLines.length}`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          @click="goToStep(index)"
        />
      </div>

      <div class="hero-section__actions flex flex-wrap gap-3 sm:gap-4">
        <Button
          as-child
          size="lg"
          class="hero-section__cta shadow-glow-gold"
        >
          <NuxtLink
            to="/catalogue"
            class="inline-flex items-center gap-2"
          >
            <BookOpen
              class="size-4"
              aria-hidden="true"
            />
            Explorer le catalogue
            <ArrowRight
              class="size-4 opacity-70"
              aria-hidden="true"
            />
          </NuxtLink>
        </Button>
        <Button
          as-child
          size="lg"
          variant="outline"
          class="hero-section__cta glass-card border-border/60"
        >
          <NuxtLink
            to="/publier"
            class="inline-flex items-center gap-2"
          >
            <PenLine
              class="size-4"
              aria-hidden="true"
            />
            Publier un livre
          </NuxtLink>
        </Button>
      </div>
    </div>

    <p class="hero-section__tagline">
      une plateforme éditoriale premium entre institution culturelle et technologie moderne.
    </p>
  </div>
</template>

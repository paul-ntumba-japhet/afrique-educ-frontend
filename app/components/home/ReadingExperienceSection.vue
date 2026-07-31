<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'
import gsap from 'gsap'
import { BookOpen, Headphones, Highlighter, MonitorSmartphone } from 'lucide-vue-next'
import readingAnnotation from '~/assets/images/lecture/mockups/reading-annotation-screen.png'
import readingAnnotationNotes from '~/assets/images/lecture/mockups/reading-annotation-screen-notes.png'
import readingAudio from '~/assets/images/lecture/mockups/reading-audio.png'
import readingHome from '~/assets/images/lecture/mockups/reading-home.png'
import readingModeLight from '~/assets/images/lecture/mockups/reading-mode-light.png'
import readingModeNight from '~/assets/images/lecture/mockups/reading-mode-night.png'

const MOCKUP_HOLD_S = 4
const MOCKUP_FADE_S = 0.55

const features = [
  {
    title: 'Lecture fluide',
    description: 'Un lecteur épuré, pensé pour le confort et la concentration.',
    icon: BookOpen,
  },
  {
    title: 'Annotations',
    description: 'Surlignez, notez et retrouvez vos passages essentiels en un clin d\'œil.',
    icon: Highlighter,
  },
  {
    title: 'Écoute audio',
    description: 'Basculez vers la version audio quand vous le souhaitez.',
    icon: Headphones,
  },
  {
    title: 'Multi-appareils',
    description: 'Reprenez exactement là où vous vous êtes arrêté, sur mobile, tablette ou ordinateur.',
    icon: MonitorSmartphone,
  },
] as const

const mockupScenes = [
  {
    src: readingHome,
    alt: 'Écran d\'accueil de l\'expérience de lecture',
  },
  {
    src: readingModeLight,
    alt: 'Mode lecture clair sur mobile',
  },
  {
    src: readingAnnotation,
    alt: 'Écran d\'annotation et de surlignage',
  },
  {
    src: readingAnnotationNotes,
    alt: 'Écran avec notes associées aux annotations',
  },
  {
    src: readingModeNight,
    alt: 'Mode nuit de l\'application de lecture',
  },
  {
    src: readingAudio,
    alt: 'Écran de lecture audio',
  },
] as const

const mockupStackRef = ref<HTMLElement | null>(null)
const activeMockupIndex = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

let mockupTimeline: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()

  const stack = mockupStackRef.value
  if (!stack)
    return

  const images = stack.querySelectorAll<HTMLElement>('.reading-experience-section__mockup-image')
  if (!images.length)
    return

  gsap.set(images, { opacity: 0 })
  gsap.set(images[0], { opacity: 1 })

  if (prefersReducedMotion.value === 'reduce')
    return

  mockupTimeline = gsap.timeline({ repeat: -1 })

  for (let index = 0; index < images.length; index++) {
    const current = images[index]
    const next = images[(index + 1) % images.length]

    mockupTimeline
      .to(current, {
        opacity: 0,
        duration: MOCKUP_FADE_S,
        ease: 'power2.inOut',
      }, `+=${MOCKUP_HOLD_S}`)
      .to(next, {
        opacity: 1,
        duration: MOCKUP_FADE_S,
        ease: 'power2.inOut',
        onStart: () => {
          activeMockupIndex.value = (index + 1) % images.length
        },
      }, '<')
  }
})

watch(prefersReducedMotion, (value) => {
  if (value === 'reduce') {
    mockupTimeline?.kill()
    mockupTimeline = null
    activeMockupIndex.value = 0

    const stack = mockupStackRef.value
    if (!stack)
      return

    const images = stack.querySelectorAll<HTMLElement>('.reading-experience-section__mockup-image')
    gsap.set(images, { opacity: 0 })
    gsap.set(images[0], { opacity: 1 })
  }
})

onBeforeUnmount(() => {
  mockupTimeline?.kill()
  mockupTimeline = null
})
</script>

<template>
  <section
    class="reading-experience-section"
    aria-labelledby="reading-experience-heading"
  >
    <div class="reading-experience-section__inner">
      <header class="reading-experience-section__header">
        <h2
          id="reading-experience-heading"
          class="reading-experience-section__title"
        >
          Une expérience de lecture moderne
        </h2>
        <p class="reading-experience-section__subtitle">
          Lisez, annotez, écoutez et reprenez votre lecture sur tous vos appareils.
        </p>
      </header>

      <div class="reading-experience-section__layout">
        <div class="reading-experience-section__content">
          <ul class="reading-experience-section__grid">
            <li
              v-for="feature in features"
              :key="feature.title"
              class="reading-experience-section__card"
            >
              <div
                class="reading-experience-section__icon-wrap"
                aria-hidden="true"
              >
                <component
                  :is="feature.icon"
                  class="reading-experience-section__icon"
                />
              </div>
              <h3 class="reading-experience-section__card-title">
                {{ feature.title }}
              </h3>
              <p class="reading-experience-section__card-text">
                {{ feature.description }}
              </p>
            </li>
          </ul>
        </div>

        <div class="reading-experience-section__mockup">
          <div
            ref="mockupStackRef"
            class="reading-experience-section__mockup-image-wrap"
            role="img"
            :aria-label="mockupScenes[activeMockupIndex]?.alt"
          >
            <img
              v-for="(scene, index) in mockupScenes"
              :key="scene.src"
              :src="scene.src"
              :alt="scene.alt"
              class="reading-experience-section__mockup-image"
              :class="{ 'reading-experience-section__mockup-image--active': index === activeMockupIndex }"
              :loading="index === 0 ? 'eager' : 'lazy'"
              decoding="async"
              :aria-hidden="index !== activeMockupIndex"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { registerWelcomeContent } from '@/data/register-page'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-vue-next'

type SetupPhase = 'setup' | 'redirect'

const store = useRegisterStore()
const phase = ref<SetupPhase>('setup')
const setupProgress = ref(0)

const redirectHref = computed(() => {
  if (store.isOrganization)
    return registerWelcomeContent.organization.href

  if (store.individualType === 'author')
    return registerWelcomeContent.author.href

  if (store.individualType === 'reader_author')
    return registerWelcomeContent.reader_author.href

  return registerWelcomeContent.reader.href
})

const SETUP_DURATION_MS = 3800
const REDIRECT_DURATION_MS = 3000

let progressTimer: ReturnType<typeof setInterval> | null = null
let setupTimer: ReturnType<typeof setTimeout> | null = null
let redirectTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  const progressStep = 100 / (SETUP_DURATION_MS / 80)

  progressTimer = setInterval(() => {
    if (phase.value === 'setup')
      setupProgress.value = Math.min(100, setupProgress.value + progressStep)
  }, 80)

  setupTimer = setTimeout(() => {
    if (progressTimer) {
      clearInterval(progressTimer)
      progressTimer = null
    }
    setupProgress.value = 100
    phase.value = 'redirect'
  }, SETUP_DURATION_MS)

  redirectTimer = setTimeout(() => {
    navigateTo(redirectHref.value)
  }, SETUP_DURATION_MS + REDIRECT_DURATION_MS)
})

onBeforeUnmount(() => {
  if (progressTimer)
    clearInterval(progressTimer)
  if (setupTimer)
    clearTimeout(setupTimer)
  if (redirectTimer)
    clearTimeout(redirectTimer)
})
</script>

<template>
  <div class="register-step register-step--success">
    <Transition
      name="register-setup"
      mode="out-in"
    >
      <div
        v-if="phase === 'setup'"
        key="setup"
        class="register-setup"
      >
        <div
          class="register-setup__loader"
          aria-hidden="true"
        >
          <Loader2 class="register-setup__loader-icon" />
        </div>

        <h2 class="register-setup__title">
          Configuration en cours
        </h2>

        <p class="register-setup__message">
          Veuillez patienter quelques instants pendant que nous configurons votre espace numérique de travail.
        </p>

        <div
          class="register-setup__progress"
          role="progressbar"
          :aria-valuenow="Math.round(setupProgress)"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Progression de la configuration"
        >
          <span
            class="register-setup__progress-fill"
            :style="{ width: `${setupProgress}%` }"
          />
        </div>

        <p class="register-setup__hint">
          Préparation de votre profil et de vos préférences…
        </p>
      </div>

      <div
        v-else
        key="redirect"
        class="register-setup register-setup--redirect"
      >
        <div
          class="register-setup__success-icon"
          aria-hidden="true"
        >
          <CheckCircle2 class="register-setup__success-icon-svg" />
        </div>

        <h2 class="register-setup__title">
          Compte créé avec succès
        </h2>

        <p class="register-setup__message">
          Votre compte a été créé avec succès. Vous allez maintenant être redirigé vers votre espace numérique de travail.
        </p>

        <div
          class="register-setup__redirect"
          aria-hidden="true"
        >
          <span class="register-setup__redirect-track">
            <span class="register-setup__redirect-dot" />
            <span class="register-setup__redirect-dot" />
            <span class="register-setup__redirect-dot" />
          </span>
          <ArrowRight class="register-setup__redirect-arrow" />
        </div>
      </div>
    </Transition>
  </div>
</template>

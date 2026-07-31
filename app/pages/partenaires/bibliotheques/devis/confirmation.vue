<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  FileSearch,
  Home,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-vue-next'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import QuoteStepSidebar from '~/components/institutional-quote/QuoteStepSidebar.vue'
import QuoteConfirmationSidebar from '~/components/institutional-quote/QuoteConfirmationSidebar.vue'
import { confirmationNextSteps } from '@/data/institutional-quote'
import type { QuoteSubmissionSnapshot } from '@/types/institutional-quote'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Demande de devis envoyée — Afric-Educ',
  meta: [
    {
      name: 'description',
      content: 'Votre demande de devis institutionnel a bien été envoyée. Conservez votre numéro de référence.',
    },
  ],
})

const route = useRoute()
const { loadSubmission } = useInstitutionalQuote()

const submission = ref<QuoteSubmissionSnapshot | null>(null)

onMounted(() => {
  const stored = loadSubmission()
  const refFromQuery = typeof route.query.ref === 'string' ? route.query.ref : ''
  if (stored) {
    submission.value = stored
    if (refFromQuery && stored.reference !== refFromQuery) {
      submission.value = { ...stored, reference: refFromQuery }
    }
    return
  }
  if (refFromQuery) {
    submission.value = {
      reference: refFromQuery,
      email: '',
      organizationName: '',
      submittedAt: new Date().toISOString(),
      summary: {
        references: 0,
        quantity: 0,
        services: 0,
        deliveryAddresses: 0,
        estimateLabel: '—',
        currency: 'FCFA',
      },
    }
  }
})

const submittedLabel = computed(() => {
  const raw = submission.value?.submittedAt
  if (!raw)
    return ''
  const date = new Date(raw)
  if (Number.isNaN(date.getTime()))
    return ''
  const datePart = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const timePart = date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `Date d’envoi : ${datePart} à ${timePart}`
})

const nextStepIcons = {
  analyse: FileSearch,
  response: Mail,
  support: MessageCircle,
} as const

function onContact() {
  window.location.href = 'mailto:institutions@afric-educ.com'
}

function downloadRecap() {
  if (!import.meta.client || !submission.value)
    return

  const s = submission.value
  const lines = [
    'Récapitulatif — Demande de devis institutionnel',
    'Afric-Educ / Livres d’Afrique',
    '',
    `Référence : ${s.reference}`,
    s.organizationName ? `Institution : ${s.organizationName}` : '',
    s.email ? `Contact : ${s.email}` : '',
    s.submittedAt ? `Date d’envoi : ${new Date(s.submittedAt).toLocaleString('fr-FR')}` : '',
    '',
    `Références : ${s.summary.references}`,
    `Quantité totale : ${s.summary.quantity}`,
    `Services : ${s.summary.services}`,
    `Adresses de livraison : ${s.summary.deliveryAddresses}`,
    `Estimation provisoire : ${s.summary.estimateLabel}`,
    '',
    'Ce document est un récapitulatif indicatif. Le devis définitif vous sera transmis par e-mail.',
  ].filter(Boolean)

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${s.reference}-recapitulatif.txt`
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="inst-quote-page inst-quote-page--confirm">
    <AppHeader />

    <div class="inst-quote-page__shell">
      <QuoteStepSidebar
        :current-step="7"
        all-complete
        @contact="onContact"
      />

      <div class="inst-quote-page__main">
        <div class="inst-quote-page__content">
          <header class="inst-quote-confirm__top">
            <NuxtLink
              to="/partenaires/bibliotheques/commandes"
              class="inst-quote-header__back"
            >
              <ArrowLeft
                class="size-3.5"
                :stroke-width="1.5"
                aria-hidden="true"
              />
              Retour aux commandes institutionnelles
            </NuxtLink>
            <button
              type="button"
              class="inst-quote-confirm__download-link"
              :disabled="!submission"
              @click="downloadRecap"
            >
              <Download
                class="size-3.5"
                :stroke-width="1.5"
                aria-hidden="true"
              />
              Télécharger le récapitulatif (PDF)
            </button>
          </header>

          <section
            class="inst-quote-confirm-hero"
            aria-labelledby="inst-quote-confirm-heading"
          >
            <div
              class="inst-quote-confirm-hero__badge"
              aria-hidden="true"
            >
              <Sparkles class="inst-quote-confirm-hero__sparkle inst-quote-confirm-hero__sparkle--1" />
              <Sparkles class="inst-quote-confirm-hero__sparkle inst-quote-confirm-hero__sparkle--2" />
              <Sparkles class="inst-quote-confirm-hero__sparkle inst-quote-confirm-hero__sparkle--3" />
              <span class="inst-quote-confirm-hero__check">
                <Check
                  class="size-9"
                  :stroke-width="2.5"
                />
              </span>
            </div>

            <h1 id="inst-quote-confirm-heading">
              Votre demande de devis a bien été envoyée !
            </h1>
            <p>
              Merci. Notre équipe institutions va analyser votre demande et vous répondre par e-mail sous
              <strong>24 à 48 heures ouvrées</strong>.
            </p>

            <div
              v-if="submission?.reference"
              class="inst-quote-confirm-ref"
            >
              <span
                class="inst-quote-confirm-ref__icon-wrap"
                aria-hidden="true"
              >
                <Mail
                  class="inst-quote-confirm-ref__icon"
                  :stroke-width="1.5"
                />
              </span>
              <div class="inst-quote-confirm-ref__copy">
                <p class="inst-quote-confirm-ref__label">
                  Numéro de référence de votre demande
                </p>
                <p class="inst-quote-confirm-ref__value">
                  {{ submission.reference }}
                </p>
                <p
                  v-if="submittedLabel"
                  class="inst-quote-confirm-ref__date"
                >
                  {{ submittedLabel }}
                </p>
              </div>
            </div>
          </section>

          <section
            class="inst-quote-confirm-next"
            aria-labelledby="inst-quote-confirm-next-heading"
          >
            <h2 id="inst-quote-confirm-next-heading">
              Et ensuite ?
            </h2>
            <ol class="inst-quote-confirm-next__list">
              <li
                v-for="(step, index) in confirmationNextSteps"
                :key="step.id"
                class="inst-quote-confirm-next__item"
              >
                <span
                  class="inst-quote-confirm-next__icon"
                  aria-hidden="true"
                >
                  <component
                    :is="nextStepIcons[step.id]"
                    class="size-6"
                    :stroke-width="1.5"
                  />
                </span>
                <div>
                  <p class="inst-quote-confirm-next__title">
                    {{ step.title }}
                  </p>
                  <p class="inst-quote-confirm-next__desc">
                    {{ step.description }}
                  </p>
                </div>
                <ArrowRight
                  v-if="index < confirmationNextSteps.length - 1"
                  class="inst-quote-confirm-next__arrow size-6"
                  :stroke-width="1.5"
                  aria-hidden="true"
                />
              </li>
            </ol>
          </section>

          <footer class="inst-quote-confirm-actions">
            <p>Que souhaitez-vous faire ensuite ?</p>
            <div class="inst-quote-confirm-actions__btns">
              <button
                type="button"
                class="inst-quote-btn inst-quote-btn--ghost"
                :disabled="!submission"
                @click="downloadRecap"
              >
                <Download
                  class="size-4"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
                Télécharger le récapitulatif (PDF)
              </button>
              <NuxtLink
                to="/partenaires/bibliotheques/commandes"
                class="inst-quote-btn inst-quote-btn--submit"
              >
                <Home
                  class="size-4"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
                Retour à l’espace institutionnel
              </NuxtLink>
            </div>
          </footer>
        </div>

        <QuoteConfirmationSidebar
          :submission="submission"
          @contact="onContact"
        />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

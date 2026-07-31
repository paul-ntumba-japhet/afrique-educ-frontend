<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Download,
  FileText,
  Globe2,
  Info,
  Lock,
  Monitor,
  RefreshCw,
  ShieldCheck,
  SquarePen,
  Star,
  UserRound,
} from 'lucide-vue-next'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import {
  formatFcfa,
  getLocationBookById,
  getRentalExpiryLabel,
  getRentalExpiryShort,
  rentalDurationOptions,
  rentalIncludedFeatures,
  type RentalDurationId,
} from '@/data/location-page'

definePageMeta({
  layout: false,
})

const route = useRoute()
const bookId = computed(() => String(route.params.bookId ?? ''))
const book = computed(() => getLocationBookById(bookId.value))

const selectedDurationId = ref<RentalDurationId>('30d')
const promoCode = ref('')
const promoApplied = ref(false)
const promoError = ref('')

const selectedDuration = computed(() =>
  rentalDurationOptions.find(item => item.id === selectedDurationId.value)
  ?? rentalDurationOptions[2],
)

const serviceFee = 0
const discount = computed(() => (promoApplied.value ? Math.round(selectedDuration.value.price * 0.1) : 0))
const total = computed(() => Math.max(0, selectedDuration.value.price + serviceFee - discount.value))

const expiryFull = computed(() => getRentalExpiryLabel(selectedDuration.value.days))
const expiryShort = computed(() => getRentalExpiryShort(selectedDuration.value.days))

const includeIcons = {
  online: Monitor,
  download: Download,
  sync: RefreshCw,
  notes: SquarePen,
  bookmarks: Bookmark,
} as const

const checkoutSteps = [
  { id: 1, label: 'Confirmer la location' },
  { id: 2, label: 'Paiement' },
  { id: 3, label: 'Location activée' },
] as const

useHead(() => ({
  title: book.value
    ? `Confirmer la location — ${book.value.title}`
    : 'Confirmer votre location — Afric-Educ',
}))

watch(bookId, (id) => {
  if (!getLocationBookById(id))
    navigateTo('/partenaires/bibliotheques/location')
}, { immediate: true })

function applyPromo() {
  const code = promoCode.value.trim().toUpperCase()
  if (!code) {
    promoError.value = 'Saisissez un code promo.'
    promoApplied.value = false
    return
  }
  if (code === 'AFRIC10' || code === 'LIVRE10') {
    promoApplied.value = true
    promoError.value = ''
    return
  }
  promoApplied.value = false
  promoError.value = 'Code promo invalide.'
}

function continueToPayment() {
  navigateTo({
    path: '/panier/paiement',
    query: {
      type: 'location',
      book: bookId.value,
      duration: selectedDurationId.value,
      total: String(total.value),
    },
  })
}

function starFill(index: number) {
  const rating = book.value?.rating ?? 0
  return index <= Math.round(rating)
}
</script>

<template>
  <div
    v-if="book"
    class="rental-page"
  >
    <AppHeader />

    <div class="rental-page__topbar">
      <div class="page-container rental-page__topbar-inner">
        <ol class="rental-steps">
          <template
            v-for="(step, index) in checkoutSteps"
            :key="step.id"
          >
            <li
              class="rental-steps__item"
              :class="{ 'rental-steps__item--active': step.id === 1 }"
            >
              <span class="rental-steps__num">{{ step.id }}</span>
              <span class="rental-steps__label">{{ step.label }}</span>
            </li>
            <li
              v-if="index < checkoutSteps.length - 1"
              class="rental-steps__arrow"
              aria-hidden="true"
            >
              <ChevronRight
                class="size-4"
                :stroke-width="1.75"
              />
            </li>
          </template>
        </ol>
        <p class="rental-page__secure">
          <Lock
            class="size-3.5"
            :stroke-width="1.75"
            aria-hidden="true"
          />
          Paiement sécurisé
        </p>
      </div>
    </div>

    <main class="page-container rental-page__main">
      <NuxtLink
        to="/partenaires/bibliotheques/location#livres"
        class="rental-page__back"
      >
        <ArrowLeft
          class="size-3.5"
          :stroke-width="1.75"
          aria-hidden="true"
        />
        Retour à la page du livre
      </NuxtLink>

      <header class="rental-page__intro">
        <h1>Confirmer votre location</h1>
        <p>Choisissez la durée de location et vérifiez les informations.</p>
      </header>

      <div class="rental-page__layout">
        <div class="rental-page__content">
          <article class="rental-book">
            <div class="rental-book__cover">
              <img
                :src="book.cover"
                :alt="`Couverture de ${book.title}`"
                width="180"
                height="260"
              >
            </div>
            <div class="rental-book__body">
              <h2>{{ book.title }}</h2>
              <p class="rental-book__author">
                <UserRound
                  class="size-3.5"
                  :stroke-width="1.75"
                  aria-hidden="true"
                />
                {{ book.author }}
              </p>
              <p class="rental-book__rating">
                <span
                  class="rental-book__stars"
                  aria-hidden="true"
                >
                  <Star
                    v-for="n in 5"
                    :key="n"
                    class="size-3.5"
                    :fill="starFill(n) ? 'currentColor' : 'none'"
                    :stroke-width="1.75"
                  />
                </span>
                {{ book.rating.toFixed(1).replace('.', ',') }} ({{ book.reviewCount }} avis)
              </p>
              <p class="rental-book__desc">
                {{ book.description }}
              </p>
              <ul class="rental-book__meta">
                <li>
                  <BookOpen class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
                  {{ book.genre }}
                </li>
                <li>
                  <FileText class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
                  {{ book.pages }} pages
                </li>
                <li>
                  <Globe2 class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
                  {{ book.language }}
                </li>
                <li>
                  <FileText class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
                  {{ book.fileFormats }}
                </li>
              </ul>
            </div>
          </article>

          <section
            class="rental-durations"
            aria-labelledby="rental-durations-heading"
          >
            <h2 id="rental-durations-heading">
              <CalendarDays
                class="size-4"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              Choisissez la durée de location
            </h2>
            <div
              class="rental-durations__grid"
              role="radiogroup"
              aria-label="Durée de location"
            >
              <button
                v-for="option in rentalDurationOptions"
                :key="option.id"
                type="button"
                class="rental-duration"
                :class="{ 'rental-duration--selected': selectedDurationId === option.id }"
                role="radio"
                :aria-checked="selectedDurationId === option.id"
                @click="selectedDurationId = option.id"
              >
                <span class="rental-duration__radio" aria-hidden="true" />
                <span class="rental-duration__label">{{ option.label }}</span>
                <strong>{{ formatFcfa(option.price) }}</strong>
                <span class="rental-duration__desc">{{ option.description }}</span>
                <span
                  v-if="option.popular"
                  class="rental-duration__badge"
                >
                  Populaire
                </span>
              </button>
            </div>
          </section>

          <section
            class="rental-includes"
            aria-labelledby="rental-includes-heading"
          >
            <h2 id="rental-includes-heading">
              <ShieldCheck
                class="size-4"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              Ce qui est inclus
            </h2>
            <ul class="rental-includes__grid">
              <li
                v-for="feature in rentalIncludedFeatures"
                :key="feature.id"
              >
                <span class="rental-includes__icon" aria-hidden="true">
                  <component
                    :is="includeIcons[feature.id]"
                    :stroke-width="1.5"
                  />
                </span>
                <strong>{{ feature.title }}</strong>
                <span>{{ feature.subtitle }}</span>
              </li>
            </ul>
          </section>

          <div class="rental-info-row">
            <div class="rental-info rental-info--expiry">
              <CalendarDays class="size-5" :stroke-width="1.5" aria-hidden="true" />
              <div>
                <p>Date d’expiration estimée</p>
                <strong>{{ expiryFull }}</strong>
              </div>
            </div>
            <div class="rental-info rental-info--note">
              <Info class="size-4" :stroke-width="1.75" aria-hidden="true" />
              <p>
                L’accès sera automatiquement désactivé à la fin de la période de location.
              </p>
            </div>
          </div>

          <div class="rental-promo">
            <p>Vous avez un code promo ?</p>
            <div class="rental-promo__row">
              <input
                v-model="promoCode"
                type="text"
                placeholder="Entrez votre code promo"
                autocomplete="off"
              >
              <button
                type="button"
                class="rental-promo__btn"
                @click="applyPromo"
              >
                Appliquer
              </button>
            </div>
            <p
              v-if="promoError"
              class="rental-promo__error"
            >
              {{ promoError }}
            </p>
            <p
              v-else-if="promoApplied"
              class="rental-promo__ok"
            >
              Remise de 10 % appliquée.
            </p>
          </div>
        </div>

        <aside class="rental-summary">
          <h2>Récapitulatif de la location</h2>
          <div class="rental-summary__book">
            <img
              :src="book.cover"
              alt=""
              width="56"
              height="80"
              aria-hidden="true"
            >
            <div>
              <strong>{{ book.title }}</strong>
              <span>{{ book.author }}</span>
            </div>
          </div>

          <dl class="rental-summary__list">
            <div>
              <dt>Durée de location</dt>
              <dd>{{ selectedDuration.label }}</dd>
            </div>
            <div>
              <dt>Date d’expiration</dt>
              <dd>{{ expiryShort }}</dd>
            </div>
            <div>
              <dt>Prix de location</dt>
              <dd>{{ formatFcfa(selectedDuration.price) }}</dd>
            </div>
            <div>
              <dt>
                Frais de service
                <CircleHelp class="size-3" :stroke-width="1.75" aria-hidden="true" />
              </dt>
              <dd>{{ formatFcfa(serviceFee) }}</dd>
            </div>
            <div>
              <dt>Remise</dt>
              <dd class="rental-summary__discount">
                − {{ formatFcfa(discount) }}
              </dd>
            </div>
          </dl>

          <div class="rental-summary__total">
            <span>Total</span>
            <strong>{{ formatFcfa(total) }}</strong>
          </div>

          <div class="rental-summary__secure">
            <ShieldCheck class="size-4" :stroke-width="1.75" aria-hidden="true" />
            <div>
              <strong>Paiement 100 % sécurisé</strong>
              <p>Vos données sont protégées et chiffrées.</p>
            </div>
          </div>

          <button
            type="button"
            class="rental-summary__cta"
            @click="continueToPayment"
          >
            Continuer vers le paiement
            <ArrowRight class="size-4" :stroke-width="2" aria-hidden="true" />
          </button>

          <p class="rental-summary__foot">
            <Lock class="size-3.5" :stroke-width="1.75" aria-hidden="true" />
            Vos informations sont sécurisées.
          </p>
        </aside>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

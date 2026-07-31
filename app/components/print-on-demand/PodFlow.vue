<script setup lang="ts">
import { ArrowLeft, ArrowRight, Check, Eye, Headset, Info } from 'lucide-vue-next'
import PodDeliveryStep from '~/components/print-on-demand/PodDeliveryStep.vue'
import PodQuantityStep from '~/components/print-on-demand/PodQuantityStep.vue'
import {
  BookMarked,
  Upload,
  podEstimatorOptions,
  podHeroFeatures,
  podSampleCatalogBook,
  podShippingMethods,
  podTrustItems,
  podWhyPrint,
  podWizardSteps,
  type PodAddressSelection,
  type PodBookSource,
  type PodQuantityTierId,
  type PodShippingMethodId,
} from '@/data/print-on-demand'

const currentStep = ref(0)
const bookSource = ref<PodBookSource>('catalog')
const catalogBookSelected = ref(true)
const selectedTier = ref<PodQuantityTierId>('custom')

const bookType = ref(podEstimatorOptions.bookTypes[0])
const format = ref(podEstimatorOptions.formats[0])
const pages = ref(236)
const printType = ref(podEstimatorOptions.printTypes[1])
const interior = ref(podEstimatorOptions.interiors[0])
const finish = ref(podEstimatorOptions.finishes[0])
const paper = ref(podEstimatorOptions.papers[0])
const weight = ref(podEstimatorOptions.weights[1])
const binding = ref(podEstimatorOptions.bindings[0])
const cover = ref(podEstimatorOptions.covers[0])
const lamination = ref(podEstimatorOptions.laminations[0])
const spotVarnish = ref(podEstimatorOptions.spotVarnish[0])
const endpapers = ref(podEstimatorOptions.endpapers[0])
const quantity = ref(75)
const addressSelection = ref<PodAddressSelection>('personal')
const shippingMethod = ref<PodShippingMethodId>('standard')
const recipientName = ref('')
const deliveryPhone = ref('')
const deliveryEmail = ref('')
const addressLine = ref('')
const deliveryCity = ref('')
const deliveryCountry = ref('République démocratique du Congo')
const deliveryNotes = ref('')

const showSelectedBook = computed(
  () => bookSource.value === 'catalog' && catalogBookSelected.value,
)

function selectCatalog() {
  bookSource.value = 'catalog'
  catalogBookSelected.value = true
}

function selectPersonal() {
  bookSource.value = 'personal'
  catalogBookSelected.value = false
}

function chooseCatalogBook() {
  catalogBookSelected.value = true
  bookSource.value = 'catalog'
}

const unitPrice = computed(() => {
  let base = interior.value === 'Couleur' ? 6200 : 3800
  if (format.value === 'A4') base += 700
  if (format.value === 'Carré') base += 450
  if (format.value === 'Format personnalisé') base += 900
  if (printType.value === 'Recto verso') base += 350
  if (cover.value.includes('Rigide')) base += 1200
  if (cover.value.includes('rabats')) base += 350
  if (finish.value === 'Brillant') base += 250
  if (finish.value === 'Soft Touch') base += 450
  if (lamination.value !== 'Aucun') base += 300
  if (spotVarnish.value !== 'Aucun') base += 400
  if (paper.value.includes('couché')) base += 400
  if (paper.value.includes('bouffant')) base += 200
  if (weight.value.startsWith('120') || weight.value.startsWith('170')) base += 300
  if (binding.value.includes('spirale')) base += 500
  if (binding.value.includes('Agrafée')) base -= 200
  const pageFactor = Math.max(80, pages.value) * (interior.value === 'Couleur' ? 12 : 5)
  let unit = base + pageFactor
  if (quantity.value >= 100) unit *= 0.82
  else if (quantity.value >= 50) unit *= 0.9
  else if (quantity.value >= 25) unit *= 0.95
  return Math.round(unit / 50) * 50
})

const selectedShipping = computed(
  () => podShippingMethods.find(method => method.id === shippingMethod.value) ?? podShippingMethods[0],
)

const shipping = computed(() => selectedShipping.value.price)

const productionDelay = computed(() => {
  if (quantity.value >= 250) return '8 – 12 jours'
  if (quantity.value >= 100) return '6 – 9 jours'
  return '5 – 7 jours'
})

const deliveryEstimate = computed(() => selectedShipping.value.delay)

const subtotal = computed(() => unitPrice.value * quantity.value)
const total = computed(() => subtotal.value + shipping.value)

const stepperActiveIndex = computed(() => {
  if (currentStep.value === 0)
    return 0
  if (currentStep.value === 2)
    return 2
  return currentStep.value
})

function isStepDone(index: number) {
  return index < stepperActiveIndex.value
}

function isStepActive(index: number) {
  return index === stepperActiveIndex.value
}

function stepStatus(index: number) {
  if (isStepDone(index))
    return 'Terminé'
  if (isStepActive(index))
    return 'En cours'
  return 'En attente'
}

function formatMoney(value: number) {
  return `${value.toLocaleString('fr-FR')} FCFA`
}

function goNext() {
  if (currentStep.value === 0) {
    currentStep.value = 2
    return
  }
  if (currentStep.value < podWizardSteps.length - 1)
    currentStep.value += 1
}

function goPrev() {
  if (currentStep.value === 2) {
    currentStep.value = 0
    return
  }
  if (currentStep.value > 0)
    currentStep.value -= 1
}
</script>

<template>
  <div class="pod-flow">
    <!-- Hero -->
    <section class="pod-hero" aria-labelledby="pod-hero-heading">
      <div class="page-container">
        <nav class="pod-hero__breadcrumb" aria-label="Fil d’Ariane">
          <NuxtLink to="/">Accueil</NuxtLink>
          <span aria-hidden="true">›</span>
          <NuxtLink to="/partenaires/imprimeries/pod">Services</NuxtLink>
          <span aria-hidden="true">›</span>
          <span>Impression à la demande</span>
        </nav>

        <div class="pod-hero__intro">
          <h1 id="pod-hero-heading">
            Imprimez votre livre à la demande
          </h1>
          <p class="pod-hero__lead">
            À l’unité ou en quantité, configurez votre impression en quelques étapes
            et recevez votre devis personnalisé rapidement.
          </p>
        </div>

        <ul class="pod-hero__features">
          <li
            v-for="item in podHeroFeatures"
            :key="item.id"
          >
            <span class="pod-hero__feature-icon">
              <component
                :is="item.icon"
                class="size-6"
                :stroke-width="1.5"
                aria-hidden="true"
              />
            </span>
            <span class="pod-hero__feature-copy">
              <span>{{ item.title }}</span>
              <span>{{ item.subtitle }}</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Stepper -->
    <div class="pod-stepper">
      <div class="page-container">
        <ol class="pod-stepper__list">
          <li
            v-for="(step, index) in podWizardSteps"
            :key="step.id"
            class="pod-stepper__item"
            :class="{
              'pod-stepper__item--active': isStepActive(index),
              'pod-stepper__item--done': isStepDone(index),
            }"
          >
            <span class="pod-stepper__index">
              <Check
                v-if="isStepDone(index)"
                class="size-5"
                :stroke-width="2.5"
                aria-hidden="true"
              />
              <template v-else>{{ index + 1 }}</template>
            </span>
            <span class="pod-stepper__copy">
              <span class="pod-stepper__label">{{ step.label }}</span>
              <span class="pod-stepper__status">{{ stepStatus(index) }}</span>
            </span>
          </li>
        </ol>
      </div>
    </div>

    <!-- Main board -->
    <section v-if="currentStep === 0" class="pod-board">
      <div class="page-container pod-board__layout">
        <div class="pod-board__main">
          <div class="pod-choice">
            <h2>Quel livre souhaitez-vous imprimer ?</h2>
            <div class="pod-choice__grid">
              <button
                type="button"
                class="pod-choice__card"
                :class="{ 'pod-choice__card--active': bookSource === 'catalog' }"
                @click="selectCatalog"
              >
                <span
                  v-if="bookSource === 'catalog'"
                  class="pod-choice__check"
                  aria-hidden="true"
                >
                  <Check class="size-4" :stroke-width="2.5" />
                </span>
                <span class="pod-choice__icon">
                  <BookMarked class="size-6" :stroke-width="1.25" />
                </span>
                <strong>Un livre déjà disponible sur la plateforme</strong>
                <span class="pod-choice__hint">
                  Sélectionnez un titre du catalogue Afric-Educ.
                </span>
                <span
                  class="pod-btn pod-btn--accent"
                  role="presentation"
                  @click.stop="chooseCatalogBook"
                >
                  Choisir un livre
                </span>
              </button>

              <button
                type="button"
                class="pod-choice__card"
                :class="{ 'pod-choice__card--active': bookSource === 'personal' }"
                @click="selectPersonal"
              >
                <span
                  v-if="bookSource === 'personal'"
                  class="pod-choice__check"
                  aria-hidden="true"
                >
                  <Check class="size-4" :stroke-width="2.5" />
                </span>
                <span class="pod-choice__icon">
                  <Upload class="size-6" :stroke-width="1.25" />
                </span>
                <strong>Un nouveau projet (PDF à importer)</strong>
                <span class="pod-choice__hint">
                  Importez intérieur et couverture pour un livre personnel.
                </span>
                <span class="pod-btn pod-btn--ghost" role="presentation">
                  Importer mes fichiers
                </span>
              </button>
            </div>
          </div>

          <article
            v-if="showSelectedBook"
            class="pod-selected"
          >
            <h3>Livre sélectionné</h3>
            <div class="pod-selected__card">
              <img
                :src="podSampleCatalogBook.cover"
                :alt="podSampleCatalogBook.title"
                class="pod-selected__cover"
              >
              <div class="pod-selected__body">
                <p class="pod-selected__title">
                  {{ podSampleCatalogBook.title }}
                </p>
                <p class="pod-selected__author">
                  {{ podSampleCatalogBook.author }}
                </p>
                <ul class="pod-selected__specs">
                  <li
                    v-for="spec in podSampleCatalogBook.specs"
                    :key="spec.label"
                  >
                    <span>{{ spec.label }}</span>
                    <strong>
                      <Check
                        v-if="spec.ok"
                        class="size-3.5"
                        :stroke-width="2.5"
                        aria-hidden="true"
                      />
                      {{ spec.value }}
                    </strong>
                  </li>
                </ul>
                <NuxtLink
                  :to="podSampleCatalogBook.href"
                  class="pod-selected__link"
                >
                  <Eye class="size-4" :stroke-width="1.5" aria-hidden="true" />
                  Voir les détails du livre
                </NuxtLink>
              </div>
            </div>
          </article>

          <div
            v-else-if="bookSource === 'personal'"
            class="pod-upload"
          >
            <h3>Fichiers du projet</h3>
            <p>
              Préparez un PDF intérieur et une couverture conformes à nos
              <NuxtLink to="/partenaires/imprimeries/specifications">spécifications techniques</NuxtLink>.
            </p>
            <button type="button" class="pod-btn pod-btn--ghost">
              <Upload class="size-4" :stroke-width="1.5" aria-hidden="true" />
              Importer mes fichiers
            </button>
          </div>

          <div class="pod-config">
            <h2>Configurez votre impression</h2>
            <form class="pod-config__form" @submit.prevent>
              <label>
                <span>Impression intérieure</span>
                <select v-model="interior">
                  <option v-for="o in podEstimatorOptions.interiors" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Papier intérieur</span>
                <select v-model="paper">
                  <option v-for="o in podEstimatorOptions.papers" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Grammage</span>
                <select v-model="weight">
                  <option v-for="o in podEstimatorOptions.weights" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Recto / Verso</span>
                <select v-model="printType">
                  <option v-for="o in podEstimatorOptions.printTypes" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Couverture</span>
                <select v-model="cover">
                  <option v-for="o in podEstimatorOptions.covers" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Finition de couverture</span>
                <select v-model="finish">
                  <option v-for="o in podEstimatorOptions.finishes" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Pelliculage</span>
                <select v-model="lamination">
                  <option v-for="o in podEstimatorOptions.laminations" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Vernis sélectif</span>
                <select v-model="spotVarnish">
                  <option v-for="o in podEstimatorOptions.spotVarnish" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Reliure</span>
                <select v-model="binding">
                  <option v-for="o in podEstimatorOptions.bindings" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Pages de garde</span>
                <select v-model="endpapers">
                  <option v-for="o in podEstimatorOptions.endpapers" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Type de livre</span>
                <select v-model="bookType">
                  <option v-for="o in podEstimatorOptions.bookTypes" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Format</span>
                <select v-model="format">
                  <option v-for="o in podEstimatorOptions.formats" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
              <label>
                <span>Nombre de pages</span>
                <input v-model.number="pages" type="number" min="32" max="900" step="2">
              </label>
              <label>
                <span>Livraison</span>
                <select v-model="delivery">
                  <option v-for="o in podEstimatorOptions.deliveries" :key="o" :value="o">{{ o }}</option>
                </select>
              </label>
            </form>

            <aside class="pod-config__help">
              <Info class="size-4" :stroke-width="1.5" aria-hidden="true" />
              <div>
                <strong>Besoin d’aide pour choisir ?</strong>
                <p>
                  Consultez nos
                  <NuxtLink to="/partenaires/imprimeries/specifications">spécifications techniques</NuxtLink>
                  pour préparer vos fichiers.
                </p>
              </div>
            </aside>
          </div>
        </div>

        <aside class="pod-board__aside">
          <div class="pod-aside-card">
            <h3>Pourquoi imprimer avec nous ?</h3>
            <ul>
              <li
                v-for="item in podWhyPrint"
                :key="item"
              >
                <Check class="size-4" :stroke-width="2.5" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="pod-estimate">
            <h3>Estimation</h3>
            <dl class="pod-estimate__list">
              <div><dt>Quantité</dt><dd>{{ quantity }}</dd></div>
              <div><dt>Format</dt><dd>{{ format }}</dd></div>
              <div><dt>Intérieur</dt><dd>{{ interior }}</dd></div>
              <div><dt>Papier</dt><dd>{{ paper }}</dd></div>
              <div><dt>Couverture</dt><dd>{{ cover }}</dd></div>
              <div><dt>Reliure</dt><dd>{{ binding }}</dd></div>
            </dl>

            <div class="pod-estimate__prices">
              <div><span>Prix unitaire (est.)</span><strong>{{ formatMoney(unitPrice) }}</strong></div>
              <div><span>Sous-total</span><strong>{{ formatMoney(subtotal) }}</strong></div>
            </div>

            <div class="pod-estimate__logistics">
              <div>
                <span>Délai de production</span>
                <strong>{{ productionDelay }}</strong>
              </div>
              <div>
                <span>Livraison estimée</span>
                <strong>{{ deliveryEstimate }}</strong>
              </div>
            </div>

            <div class="pod-estimate__total">
              <span>Total estimatif</span>
              <strong>{{ formatMoney(total) }}</strong>
            </div>
          </div>

          <div class="pod-aside-card pod-aside-card--help">
            <div class="pod-help">
              <span class="pod-help__icon">
                <Headset class="size-5" :stroke-width="1.5" aria-hidden="true" />
              </span>
              <div class="pod-help__body">
                <h3>Besoin d’aide ?</h3>
                <p>Un conseiller vous accompagne dans votre projet d’impression.</p>
              </div>
            </div>

            <NuxtLink
              to="/partenaires/services/contact"
              class="pod-help__btn"
            >
              Parler à un conseiller
              <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>

    <PodQuantityStep
      v-else-if="currentStep === 2"
      v-model:quantity="quantity"
      v-model:selected-tier="selectedTier"
      :format="format"
      :pages="pages"
      :cover="cover"
      :interior="interior"
      :paper="paper"
      :weight="weight"
      :binding="binding"
      :unit-price-label="formatMoney(unitPrice)"
      :subtotal-label="formatMoney(subtotal)"
      :production-delay="productionDelay"
      :delivery-estimate="deliveryEstimate"
      :custom-unit-price-label="formatMoney(unitPrice)"
      :custom-delay="`${productionDelay} ouvrables`"
    />

    <PodDeliveryStep
      v-else-if="currentStep === 3"
      v-model:address-selection="addressSelection"
      v-model:shipping-method="shippingMethod"
      v-model:recipient-name="recipientName"
      v-model:phone="deliveryPhone"
      v-model:email="deliveryEmail"
      v-model:address-line="addressLine"
      v-model:city="deliveryCity"
      v-model:country="deliveryCountry"
      v-model:notes="deliveryNotes"
      :format="format"
      :pages="pages"
      :cover="cover"
      :interior="interior"
      :paper="paper"
      :weight="weight"
      :binding="binding"
      :quantity="quantity"
      :unit-price-label="formatMoney(unitPrice)"
      :subtotal-label="formatMoney(subtotal)"
      :shipping-label="formatMoney(shipping)"
      :shipping-method-label="selectedShipping.label"
      :total-label="formatMoney(total)"
    />

    <!-- Trust -->
    <section
      v-if="currentStep === 0"
      class="pod-trust"
      aria-label="Engagements"
    >
      <div class="page-container pod-trust__grid">
        <article
          v-for="item in podTrustItems"
          :key="item.id"
        >
          <span class="pod-trust__icon">
            <component :is="item.icon" class="size-5" :stroke-width="1.25" />
          </span>
          <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <!-- Next CTA -->
    <section v-if="currentStep === 0" class="pod-next">
      <div class="page-container pod-next__inner">
        <div>
          <h2>Prêt à imprimer votre livre ?</h2>
          <p>Passez à l’étape suivante pour finaliser la quantité et la livraison.</p>
        </div>
        <button
          type="button"
          class="pod-btn pod-btn--accent pod-btn--lg"
          @click="goNext"
        >
          Étape suivante : Choisir la quantité
          <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
        </button>
      </div>
    </section>

    <section v-else-if="currentStep === 2" class="pod-quantity-nav">
      <div class="page-container pod-quantity-nav__inner">
        <button
          type="button"
          class="pod-btn pod-btn--ghost pod-btn--lg"
          @click="goPrev"
        >
          <ArrowLeft class="size-4" :stroke-width="1.5" aria-hidden="true" />
          Étape précédente
        </button>
        <button
          type="button"
          class="pod-btn pod-btn--accent pod-btn--lg"
          @click="goNext"
        >
          Étape suivante : Livraison
          <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
        </button>
      </div>
    </section>

    <section v-else-if="currentStep === 3" class="pod-quantity-nav">
      <div class="page-container pod-quantity-nav__inner">
        <button
          type="button"
          class="pod-btn pod-btn--ghost pod-btn--lg"
          @click="goPrev"
        >
          <ArrowLeft class="size-4" :stroke-width="1.5" aria-hidden="true" />
          Étape précédente
        </button>
        <button
          type="button"
          class="pod-btn pod-btn--accent pod-btn--lg"
          @click="goNext"
        >
          Étape suivante : Récapitulatif
          <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Bookmark } from 'lucide-vue-next'
import { podEstimatorOptions } from '@/data/print-on-demand'

const bookType = ref(podEstimatorOptions.bookTypes[0])
const format = ref(podEstimatorOptions.formats[0])
const pages = ref(220)
const printType = ref(podEstimatorOptions.printTypes[1])
const interior = ref(podEstimatorOptions.interiors[0])
const finish = ref(podEstimatorOptions.finishes[0])
const paper = ref(podEstimatorOptions.papers[0])
const weight = ref(podEstimatorOptions.weights[1])
const binding = ref(podEstimatorOptions.bindings[0])
const cover = ref(podEstimatorOptions.covers[0])
const quantity = ref(50)
const delivery = ref(podEstimatorOptions.deliveries[0])
const saved = ref(false)

const unitPrice = computed(() => {
  let base = interior.value === 'Couleur' ? 6200 : 3800
  if (format.value === 'A4') base += 700
  if (format.value === 'Carré') base += 450
  if (format.value === 'Format personnalisé') base += 900
  if (printType.value === 'Recto verso') base += 350
  if (cover.value === 'Rigide') base += 1200
  if (finish.value === 'Brillant') base += 250
  if (finish.value === 'Soft Touch') base += 450
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

const shipping = computed(() => {
  if (delivery.value === 'Kinshasa') return 8000
  if (delivery.value === 'RDC (hors Kinshasa)') return 15000
  if (delivery.value === 'Afrique centrale') return 28000
  return 45000
})

const delay = computed(() => {
  if (quantity.value >= 250) return '8 à 12 jours'
  if (quantity.value >= 100) return '6 à 9 jours'
  return '5 à 7 jours'
})

const total = computed(() => unitPrice.value * quantity.value + shipping.value)

function formatMoney(value: number) {
  return `${value.toLocaleString('fr-FR')} FC`
}

function saveConfig() {
  saved.value = true
}
</script>

<template>
  <section
    id="pod-estimator"
    class="pod-estimator"
    aria-labelledby="pod-estimator-heading"
  >
    <div class="page-container">
      <div class="pod-section-head">
        <h2 id="pod-estimator-heading">
          Estimez votre projet en quelques clics
        </h2>
      </div>

      <div class="pod-estimator__panel">
        <form
          class="pod-estimator__form"
          @submit.prevent
        >
          <label>
            <span>Type de livre</span>
            <select v-model="bookType">
              <option
                v-for="option in podEstimatorOptions.bookTypes"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Format</span>
            <select v-model="format">
              <option
                v-for="option in podEstimatorOptions.formats"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Nombre de pages</span>
            <input
              v-model.number="pages"
              type="number"
              min="32"
              max="900"
              step="2"
            >
          </label>

          <label>
            <span>Type d’impression</span>
            <select v-model="printType">
              <option
                v-for="option in podEstimatorOptions.printTypes"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Impression intérieure</span>
            <select v-model="interior">
              <option
                v-for="option in podEstimatorOptions.interiors"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Couverture</span>
            <select v-model="cover">
              <option
                v-for="option in podEstimatorOptions.covers"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Finition</span>
            <select v-model="finish">
              <option
                v-for="option in podEstimatorOptions.finishes"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Papier intérieur</span>
            <select v-model="paper">
              <option
                v-for="option in podEstimatorOptions.papers"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Grammages disponibles</span>
            <select v-model="weight">
              <option
                v-for="option in podEstimatorOptions.weights"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Reliure</span>
            <select v-model="binding">
              <option
                v-for="option in podEstimatorOptions.bindings"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Quantité</span>
            <select v-model.number="quantity">
              <option
                v-for="option in podEstimatorOptions.quantities"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Livraison</span>
            <select v-model="delivery">
              <option
                v-for="option in podEstimatorOptions.deliveries"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>
        </form>

        <aside class="pod-estimator__result">
          <p class="pod-estimator__label">
            Estimation indicative
          </p>
          <p class="pod-estimator__unit">
            <strong>{{ formatMoney(unitPrice) }}</strong>
            <span>/ unité</span>
          </p>
          <p class="pod-estimator__total">
            Total approximatif
            <strong>{{ formatMoney(total) }}</strong>
          </p>
          <dl class="pod-estimator__meta">
            <div>
              <dt>Délai estimé</dt>
              <dd>{{ delay }}</dd>
            </div>
            <div>
              <dt>Frais de livraison</dt>
              <dd>{{ formatMoney(shipping) }}</dd>
            </div>
          </dl>

          <NuxtLink
            to="/partenaires/imprimeries/demande?offer=pod"
            class="pod-btn pod-btn--primary pod-btn--block"
          >
            Obtenir un devis détaillé
            <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
          </NuxtLink>
          <button
            type="button"
            class="pod-btn pod-btn--ghost pod-btn--block"
            @click="saveConfig"
          >
            <Bookmark class="size-4" :stroke-width="1.5" aria-hidden="true" />
            {{ saved ? 'Configuration enregistrée' : 'Enregistrer cette configuration' }}
          </button>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calculator, Check, Minus, Plus } from 'lucide-vue-next'
import {
  podQuantityTiers,
  type PodQuantityTierId,
} from '@/data/print-on-demand'
import PodOrderSummary from '~/components/print-on-demand/PodOrderSummary.vue'

const props = defineProps<{
  quantity: number
  selectedTier: PodQuantityTierId
  format: string
  pages: number
  cover: string
  interior: string
  paper: string
  weight: string
  binding: string
  unitPriceLabel: string
  subtotalLabel: string
  productionDelay: string
  deliveryEstimate: string
  customUnitPriceLabel: string
  customDelay: string
}>()

const emit = defineEmits<{
  'update:quantity': [value: number]
  'update:selectedTier': [value: PodQuantityTierId]
}>()

function selectTier(tierId: PodQuantityTierId) {
  const tier = podQuantityTiers.find(item => item.id === tierId)
  if (!tier)
    return
  emit('update:selectedTier', tierId)
  emit('update:quantity', tier.defaultQty)
}

function incrementCustom() {
  emit('update:selectedTier', 'custom')
  emit('update:quantity', Math.min(9999, props.quantity + 1))
}

function decrementCustom() {
  emit('update:selectedTier', 'custom')
  emit('update:quantity', Math.max(1, props.quantity - 1))
}

function onCustomInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = Number.parseInt(target.value, 10)
  emit('update:selectedTier', 'custom')
  emit('update:quantity', Number.isFinite(value) ? Math.min(9999, Math.max(1, value)) : 1)
}
</script>

<template>
  <div class="page-container pod-quantity__layout">
    <div class="pod-quantity__main">
      <header class="pod-quantity__head">
        <h2>Choisissez la quantité</h2>
        <p>
          Sélectionnez le nombre d’exemplaires souhaité. Les prix et délais sont ajustés automatiquement.
        </p>
      </header>

      <div class="pod-quantity__tiers">
        <button
          v-for="tier in podQuantityTiers"
          :key="tier.id"
          type="button"
          class="pod-quantity__tier"
          :class="{ 'pod-quantity__tier--active': selectedTier === tier.id }"
          @click="selectTier(tier.id)"
        >
          <span
            v-if="selectedTier === tier.id"
            class="pod-quantity__tier-check"
            aria-hidden="true"
          >
            <Check class="size-3.5" :stroke-width="2.5" />
          </span>

          <div class="pod-quantity__tier-body">
            <span class="pod-quantity__tier-icon">
              <component
                :is="tier.icon"
                class="size-9"
                :stroke-width="1.2"
                aria-hidden="true"
              />
            </span>
            <strong>{{ tier.label }}</strong>
            <span class="pod-quantity__tier-range">{{ tier.range }}</span>
            <p class="pod-quantity__tier-desc">
              {{ tier.description }}
            </p>
          </div>

          <div class="pod-quantity__tier-foot">
            <div>
              <span>Prix unitaire (est.)</span>
              <strong>{{ tier.unitPriceLabel }}</strong>
            </div>
            <div>
              <span>Délai de production</span>
              <strong>{{ tier.delay }}</strong>
            </div>
          </div>
        </button>
      </div>

      <div class="pod-quantity__custom">
        <div class="pod-quantity__custom-main">
          <span class="pod-quantity__custom-icon">
            <Calculator class="size-5" :stroke-width="1.5" aria-hidden="true" />
          </span>
          <div>
            <strong>Quantité personnalisée</strong>
            <p>Saisissez le nombre d’exemplaires dont vous avez besoin.</p>
            <div class="pod-quantity__stepper">
              <button
                type="button"
                aria-label="Diminuer la quantité"
                @click="decrementCustom"
              >
                <Minus class="size-4" :stroke-width="1.5" />
              </button>
              <input
                :value="quantity"
                type="number"
                min="1"
                max="9999"
                aria-label="Quantité personnalisée"
                @input="onCustomInput"
              >
              <button
                type="button"
                aria-label="Augmenter la quantité"
                @click="incrementCustom"
              >
                <Plus class="size-4" :stroke-width="1.5" />
              </button>
            </div>
          </div>
        </div>

        <div
          class="pod-quantity__custom-summary"
          :class="{ 'pod-quantity__custom-summary--active': selectedTier === 'custom' }"
        >
          <div>
            <span>Prix unitaire (est.)</span>
            <strong>{{ customUnitPriceLabel }}</strong>
          </div>
          <div>
            <span>Délai de production</span>
            <strong>{{ customDelay }}</strong>
          </div>
        </div>
      </div>
    </div>

    <PodOrderSummary
      :format="format"
      :pages="pages"
      :cover="cover"
      :interior="interior"
      :paper="paper"
      :weight="weight"
      :binding="binding"
      :quantity="quantity"
      :unit-price-label="unitPriceLabel"
      :subtotal-label="subtotalLabel"
      :production-delay="productionDelay"
      :delivery-estimate="deliveryEstimate"
    />
  </div>
</template>

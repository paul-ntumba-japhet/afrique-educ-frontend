<script setup lang="ts">
import { ArrowRight, Clock3, Headset, Truck } from 'lucide-vue-next'
import { podSampleCatalogBook } from '@/data/print-on-demand'

withDefaults(defineProps<{
  format: string
  pages: number
  cover: string
  interior: string
  paper: string
  weight: string
  binding: string
  quantity: number
  unitPriceLabel: string
  subtotalLabel: string
  productionDelay?: string
  deliveryEstimate?: string
  shippingLabel?: string
  shippingMethodLabel?: string
  totalLabel?: string
  showShippingTotal?: boolean
}>(), {
  productionDelay: '',
  deliveryEstimate: '',
  shippingLabel: '',
  shippingMethodLabel: '',
  totalLabel: '',
  showShippingTotal: false,
})
</script>

<template>
  <aside class="pod-order-summary">
    <h3>Résumé de votre commande</h3>

    <div class="pod-order-summary__book">
      <img
        :src="podSampleCatalogBook.cover"
        :alt="podSampleCatalogBook.title"
        class="pod-order-summary__cover"
      >
      <div>
        <p class="pod-order-summary__title">
          {{ podSampleCatalogBook.title }}
        </p>
        <p class="pod-order-summary__author">
          de {{ podSampleCatalogBook.author }}
        </p>
      </div>
    </div>

    <dl class="pod-order-summary__specs">
      <div><dt>Format</dt><dd>{{ format }}</dd></div>
      <div><dt>Nombre de pages</dt><dd>{{ pages }}</dd></div>
      <div><dt>Couverture</dt><dd>{{ cover }}</dd></div>
      <div><dt>Intérieur</dt><dd>{{ interior }}</dd></div>
      <div><dt>Papier</dt><dd>{{ paper }}</dd></div>
      <div><dt>Grammage</dt><dd>{{ weight }}</dd></div>
      <div><dt>Reliure</dt><dd>{{ binding }}</dd></div>
    </dl>

    <div class="pod-order-summary__pricing">
      <div><span>Quantité</span><strong>{{ quantity }} exemplaires</strong></div>
      <div><span>Prix unitaire (est.)</span><strong>{{ unitPriceLabel }}</strong></div>
      <div class="pod-order-summary__subtotal">
        <span>Sous-total</span><strong>{{ subtotalLabel }}</strong>
      </div>
      <div v-if="showShippingTotal && shippingLabel">
        <span>{{ shippingMethodLabel || 'Livraison' }}</span>
        <strong>{{ shippingLabel }}</strong>
      </div>
    </div>

    <div
      v-if="showShippingTotal && totalLabel"
      class="pod-order-summary__total"
    >
      <span>Total estimatif</span>
      <strong>{{ totalLabel }}</strong>
    </div>

    <div
      v-else-if="productionDelay || deliveryEstimate"
      class="pod-order-summary__logistics"
    >
      <div v-if="productionDelay">
        <Clock3 class="size-4" :stroke-width="1.5" aria-hidden="true" />
        <div>
          <span>Délai de production</span>
          <strong>{{ productionDelay }}</strong>
        </div>
      </div>
      <div v-if="deliveryEstimate">
        <Truck class="size-4" :stroke-width="1.5" aria-hidden="true" />
        <div>
          <span>Livraison estimée</span>
          <strong>{{ deliveryEstimate }}</strong>
        </div>
      </div>
    </div>

    <div class="pod-aside-card pod-aside-card--help pod-order-summary__help">
      <div class="pod-help">
        <span class="pod-help__icon">
          <Headset class="size-5" :stroke-width="1.5" aria-hidden="true" />
        </span>
        <div class="pod-help__body">
          <h3>Besoin d’aide ?</h3>
          <p>Nos conseillers sont à votre écoute pour vous accompagner dans votre projet.</p>
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
</template>

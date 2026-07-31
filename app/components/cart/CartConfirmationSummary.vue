<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next'

const {
  lines,
  subtotal,
  discount,
  shipping,
  tax,
  total,
  formatMoney,
} = useCart()

const serviceFees = computed(() => shipping.value + tax.value)

function formatLabel(format: 'ebook' | 'paper') {
  return format === 'ebook' ? 'EBOOK' : 'PAPIER'
}
</script>

<template>
  <section
    class="cart-confirmation-card cart-confirmation-summary"
    aria-labelledby="cart-confirmation-summary-heading"
  >
    <h2
      id="cart-confirmation-summary-heading"
      class="cart-confirmation-card__title"
    >
      Résumé de votre commande
    </h2>

    <ul class="cart-confirmation-summary__lines">
      <li
        v-for="line in lines"
        :key="line.id"
        class="cart-confirmation-summary__line"
      >
        <img
          :src="line.coverImage"
          :alt="`Couverture de ${line.title}`"
          class="cart-confirmation-summary__cover"
        >
        <div class="cart-confirmation-summary__details">
          <p class="cart-confirmation-summary__book-title">
            {{ line.title }}
          </p>
          <p class="cart-confirmation-summary__author">
            {{ line.author }}
          </p>
          <span class="cart-confirmation-summary__format">
            {{ formatLabel(line.format) }}<template v-if="line.quantity > 1"> · ×{{ line.quantity }}</template>
          </span>
        </div>
        <p class="cart-confirmation-summary__price">
          {{ formatMoney(line.unitPrice * line.quantity) }}
        </p>
      </li>
    </ul>

    <dl class="cart-confirmation-summary__totals">
      <div class="cart-confirmation-summary__total-row">
        <dt>Sous-total</dt>
        <dd>{{ formatMoney(subtotal) }}</dd>
      </div>
      <div
        v-if="discount > 0"
        class="cart-confirmation-summary__total-row cart-confirmation-summary__total-row--discount"
      >
        <dt>Remise</dt>
        <dd>-{{ formatMoney(discount) }}</dd>
      </div>
      <div class="cart-confirmation-summary__total-row">
        <dt class="cart-confirmation-summary__service-label">
          <span>Frais de service</span>
          <CircleHelp
            class="cart-confirmation-summary__service-icon"
            aria-hidden="true"
            title="Frais de livraison et TVA applicables"
          />
        </dt>
        <dd>{{ formatMoney(serviceFees) }}</dd>
      </div>
      <div class="cart-confirmation-summary__grand-total">
        <span>Total à payer</span>
        <strong>{{ formatMoney(total) }}</strong>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import type { CartLine } from '@/composables/useCart'
import { Heart, Minus, Plus, Trash2 } from 'lucide-vue-next'

defineProps<{
  lines: CartLine[]
}>()

const {
  formatMoney,
  removeLine,
  incrementQuantity,
  decrementQuantity,
} = useCart()
</script>

<template>
  <div class="cart-table">
    <div
      class="cart-table__head"
      aria-hidden="true"
    >
      <span>Livre</span>
      <span>Format</span>
      <span>Prix unitaire</span>
      <span>Quantité</span>
      <span>Total</span>
      <span class="cart-table__head-actions" />
    </div>

    <article
      v-for="line in lines"
      :key="line.id"
      class="cart-table__row"
    >
      <div class="cart-table__book">
        <img
          :src="line.coverImage"
          :alt="`Couverture de ${line.title}`"
          class="cart-table__cover"
        >
        <div>
          <h2 class="cart-table__title">
            {{ line.title }}
          </h2>
          <p class="cart-table__meta">
            {{ line.author }}
          </p>
          <p class="cart-table__meta cart-table__meta--muted">
            {{ line.publisher }}
          </p>
        </div>
      </div>

      <div>
        <span
          class="cart-table__badge"
          :class="line.format === 'ebook' ? 'cart-table__badge--ebook' : 'cart-table__badge--paper'"
        >
          {{ line.format === 'ebook' ? 'Ebook' : 'Papier' }}
        </span>
      </div>

      <div class="cart-table__price">
        {{ formatMoney(line.unitPrice) }}
      </div>

      <div class="cart-table__quantity">
        <div class="cart-table__stepper">
          <button
            type="button"
            class="cart-table__stepper-btn"
            :aria-label="`Diminuer la quantité de ${line.title}`"
            @click="decrementQuantity(line.id)"
          >
            <Minus class="size-3.5" />
          </button>
          <span class="cart-table__stepper-value">{{ line.quantity }}</span>
          <button
            type="button"
            class="cart-table__stepper-btn"
            :aria-label="`Augmenter la quantité de ${line.title}`"
            @click="incrementQuantity(line.id)"
          >
            <Plus class="size-3.5" />
          </button>
        </div>
      </div>

      <div class="cart-table__total">
        {{ formatMoney(line.unitPrice * line.quantity) }}
      </div>

      <div class="cart-table__actions">
        <button
          type="button"
          class="cart-table__action-btn"
          :aria-label="`Ajouter ${line.title} aux favoris`"
        >
          <Heart class="size-4" />
        </button>
        <button
          type="button"
          class="cart-table__action-btn cart-table__action-btn--danger"
          :aria-label="`Retirer ${line.title} du panier`"
          @click="removeLine(line.id)"
        >
          <Trash2 class="size-4" />
        </button>
      </div>
    </article>
  </div>
</template>

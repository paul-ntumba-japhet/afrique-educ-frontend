<script setup lang="ts">
import { Ticket } from 'lucide-vue-next'

const promoCode = ref('')
const { applyPromoCode } = useCart()

function handleApply() {
  applyPromoCode(promoCode.value)
}
</script>

<template>
  <div class="cart-promo">
    <div class="cart-promo__group">
      <label class="cart-promo__field">
        <Ticket
          class="cart-promo__icon"
          aria-hidden="true"
        />
        <input
          v-model="promoCode"
          class="cart-promo__input"
          type="text"
          placeholder="Code promo"
          aria-label="Code promo"
        >
      </label>
      <button
        type="button"
        class="cart-promo__btn"
        @click="handleApply"
      >
        Appliquer
      </button>
    </div>
  </div>
</template>

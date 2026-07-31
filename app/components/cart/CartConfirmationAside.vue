<script setup lang="ts">
import {
  CircleCheck,
  CloudDownload,
  Lock,
  Shield,
  Zap,
} from 'lucide-vue-next'
import { cartPaymentMethods } from '@/data/cart-page'

const { selectedPayment, hasPaperBooks, total, formatMoney } = useCart()

const selectedMethod = computed(() =>
  cartPaymentMethods.find(method => method.id === selectedPayment.value),
)
</script>

<template>
  <div class="cart-confirmation-aside">
    <section
      class="cart-confirmation-card"
      aria-labelledby="cart-confirmation-payment-heading"
    >
      <h2
        id="cart-confirmation-payment-heading"
        class="cart-confirmation-card__title"
      >
        Moyen de paiement
      </h2>

      <div
        v-if="selectedMethod"
        class="cart-confirmation-payment__selected"
      >
        <img
          v-if="selectedMethod.image"
          :src="selectedMethod.image"
          :alt="selectedMethod.label"
          class="cart-confirmation-payment__logo"
        >
        <div class="cart-confirmation-payment__details">
          <p class="cart-confirmation-payment__name">
            {{ selectedMethod.label }}
          </p>
          <p
            v-if="selectedMethod.accountHint"
            class="cart-confirmation-payment__hint"
          >
            {{ selectedMethod.accountHint }}
          </p>
        </div>
      </div>

      <p class="cart-confirmation-payment__status">
        <CircleCheck
          class="cart-confirmation-payment__status-icon"
          aria-hidden="true"
        />
        Moyen de paiement sélectionné
      </p>
    </section>

    <section
      class="cart-confirmation-card"
      aria-labelledby="cart-confirmation-delivery-heading"
    >
      <h2
        id="cart-confirmation-delivery-heading"
        class="cart-confirmation-card__title"
      >
        Livraison
      </h2>

      <div class="cart-confirmation-delivery">
        <CloudDownload
          class="cart-confirmation-delivery__icon"
          aria-hidden="true"
        />
        <p class="cart-confirmation-delivery__text">
          <template v-if="hasPaperBooks">
            Livraison mixte. Les ebooks seront ajoutés automatiquement à votre bibliothèque dès la validation du paiement. Les livres papier seront expédiés sous 2 à 5 jours ouvrés.
          </template>
          <template v-else>
            Livraison numérique. Les livres seront ajoutés automatiquement à votre bibliothèque dès la validation du paiement.
          </template>
        </p>
      </div>
    </section>

    <section
      class="cart-confirmation-card"
      aria-labelledby="cart-confirmation-secure-heading"
    >
      <h2
        id="cart-confirmation-secure-heading"
        class="cart-confirmation-card__title"
      >
        Paiement sécurisé
      </h2>

      <ul class="cart-confirmation-secure__list">
        <li>
          <Shield
            class="cart-confirmation-secure__icon"
            aria-hidden="true"
          />
          Transactions 100% sécurisées
        </li>
        <li>
          <Zap
            class="cart-confirmation-secure__icon"
            aria-hidden="true"
          />
          Téléchargement immédiat
        </li>
        <li>
          <Lock
            class="cart-confirmation-secure__icon"
            aria-hidden="true"
          />
          Accès à vie à vos livres
        </li>
      </ul>
    </section>

    <div class="cart-confirmation-aside__cta">
      <NuxtLink
        to="/panier/paiement"
        class="cart-confirmation-actions__confirm"
      >
        <Lock
          class="cart-confirmation-actions__confirm-icon"
          aria-hidden="true"
        />
        Confirmer et payer {{ formatMoney(total) }}
      </NuxtLink>

      <p class="cart-confirmation-actions__legal cart-confirmation-actions__legal--aside">
        En confirmant, vous acceptez nos
        <NuxtLink to="/legal/cgu">Conditions d'utilisation</NuxtLink>
        et notre
        <NuxtLink to="/legal/confidentialite">Politique de confidentialité</NuxtLink>.
      </p>
    </div>
  </div>
</template>

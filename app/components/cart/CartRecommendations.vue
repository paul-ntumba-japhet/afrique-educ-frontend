<script setup lang="ts">
import { cartRecommendations } from '@/data/cart-page'
import { ChevronRight, Plus } from 'lucide-vue-next'

const { addItem, formatMoney } = useCart()

function handleAdd(book: typeof cartRecommendations[number]) {
  addItem({
    slug: book.slug,
    title: book.title,
    author: book.author,
    price: book.price,
    coverImage: book.coverImage,
    format: 'ebook',
  })
}
</script>

<template>
  <section
    class="cart-recommendations"
    aria-labelledby="cart-recommendations-heading"
  >
    <div class="cart-recommendations__head">
      <h2
        id="cart-recommendations-heading"
        class="cart-recommendations__title"
      >
        Vous pourriez aussi aimer
      </h2>
      <button
        type="button"
        class="cart-recommendations__nav"
        aria-label="Voir plus de recommandations"
      >
        <ChevronRight class="size-5" />
      </button>
    </div>

    <div class="cart-recommendations__track">
      <article
        v-for="book in cartRecommendations"
        :key="book.slug"
        class="cart-recommendation-card"
      >
        <NuxtLink
          :to="book.href"
          class="cart-recommendation-card__cover-link"
        >
          <img
            :src="book.coverImage"
            :alt="`Couverture de ${book.title}`"
            class="cart-recommendation-card__cover"
          >
        </NuxtLink>
        <div class="cart-recommendation-card__body">
          <NuxtLink
            :to="book.href"
            class="cart-recommendation-card__title"
          >
            {{ book.title }}
          </NuxtLink>
          <p class="cart-recommendation-card__author">
            {{ book.author }}
          </p>
          <div class="cart-recommendation-card__footer">
            <span class="cart-recommendation-card__price">{{ formatMoney(book.price) }}</span>
            <button
              type="button"
              class="cart-recommendation-card__add"
              :aria-label="`Ajouter ${book.title} au panier`"
              @click="handleAdd(book)"
            >
              <Plus class="size-4" />
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

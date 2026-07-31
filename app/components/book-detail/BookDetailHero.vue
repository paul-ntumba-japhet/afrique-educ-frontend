<script setup lang="ts">
import type { BookDetailPageData } from '@/data/book-detail-page'
import iconEpub from '~/assets/images/details-livre/epub-svgrepo-com.svg'
import iconPdf from '~/assets/images/details-livre/pdf-file-svgrepo-com.svg'
import {
  BadgeCheck,
  BookOpen,
  ChevronRight,
  CreditCard,
  Heart,
  Plus,
  ShoppingCart,
  Star,
} from 'lucide-vue-next'

const props = defineProps<{
  book: BookDetailPageData
}>()

const heroRef = ref<HTMLElement | null>(null)
const isFavorite = ref(false)
const { addItem } = useCart()

useBookDetailHeroAnimations(heroRef)

function handleAddToCart() {
  addItem({
    slug: props.book.slug,
    title: props.book.title,
    author: props.book.author.name,
    price: props.book.prices.digital,
    coverImage: props.book.coverImage,
  })
}

function formatPrice(value: number) {
  return `${value.toFixed(2).replace('.', ',')} $`
}

function formatRating(value: number) {
  return value.toFixed(1).replace('.', ',')
}

function isStarFilled(starIndex: number) {
  return props.book.rating >= starIndex - 0.25
}
</script>

<template>
  <section
    ref="heroRef"
    class="book-detail-hero"
    aria-labelledby="book-detail-title"
  >
    <nav
      class="book-detail-hero__breadcrumbs"
      aria-label="Fil d'Ariane"
    >
      <ol class="book-detail-hero__breadcrumbs-list">
        <li
          v-for="(crumb, index) in book.breadcrumbs"
          :key="`${crumb.label}-${index}`"
          class="book-detail-hero__breadcrumbs-item"
        >
          <ChevronRight
            v-if="index > 0"
            class="book-detail-hero__breadcrumbs-sep"
            aria-hidden="true"
          />
          <NuxtLink
            v-if="crumb.href"
            :to="crumb.href"
            class="book-detail-hero__breadcrumbs-link"
          >
            {{ crumb.label }}
          </NuxtLink>
          <span
            v-else
            class="book-detail-hero__breadcrumbs-current"
            :aria-current="index === book.breadcrumbs.length - 1 ? 'page' : undefined"
          >
            {{ crumb.label }}
          </span>
        </li>
      </ol>
    </nav>

    <div class="book-detail-hero__layout">
      <div class="book-detail-hero__cover-col">
        <BookCover
          :src="book.coverImage"
          :alt="`Couverture du livre ${book.title}`"
        />
      </div>

      <div class="book-detail-hero__info">
        <p class="book-detail-hero__category">
          {{ book.categoryLabel }}
        </p>

        <h1
          id="book-detail-title"
          class="book-detail-hero__title"
        >
          {{ book.title }}
        </h1>

        <p class="book-detail-hero__author">
          <span>Par {{ book.author.name }}</span>
          <BadgeCheck
            v-if="book.author.verified"
            class="book-detail-hero__author-badge"
            aria-label="Auteur vérifié"
          />
        </p>

        <div
          class="book-detail-hero__rating"
          :aria-label="`Note ${formatRating(book.rating)} sur 5, ${book.reviewCount} avis`"
        >
          <div
            class="book-detail-hero__stars"
            aria-hidden="true"
          >
            <Star
              v-for="star in 5"
              :key="star"
              class="book-detail-hero__star"
              :class="{ 'book-detail-hero__star--filled': isStarFilled(star) }"
            />
          </div>
          <span class="book-detail-hero__rating-value">{{ formatRating(book.rating) }}</span>
          <span class="book-detail-hero__rating-count">({{ book.reviewCount }} avis)</span>
        </div>

        <p class="book-detail-hero__excerpt">
          {{ book.excerpt }}
        </p>

        <div class="book-detail-hero__prices">
          <div class="book-detail-hero__price-card">
            <span class="book-detail-hero__price-label">Numérique</span>
            <span class="book-detail-hero__price-value">{{ formatPrice(book.prices.digital) }}</span>
          </div>
          <div class="book-detail-hero__price-card">
            <span class="book-detail-hero__price-label">Papier</span>
            <span class="book-detail-hero__price-value">{{ formatPrice(book.prices.paper) }}</span>
          </div>
        </div>

        <div class="book-detail-hero__actions book-detail-hero__actions--primary">
          <button
            type="button"
            class="book-detail-hero__btn book-detail-hero__btn--gold"
          >
            <BookOpen
              class="size-4"
              aria-hidden="true"
            />
            Lire un extrait
          </button>
          <button
            type="button"
            class="book-detail-hero__btn book-detail-hero__btn--gold"
          >
            <CreditCard
              class="size-4"
              aria-hidden="true"
            />
            Acheter maintenant
          </button>
        </div>

        <div class="book-detail-hero__actions book-detail-hero__actions--secondary">
          <button
            type="button"
            class="book-detail-hero__btn book-detail-hero__btn--outline"
            @click="handleAddToCart"
          >
            <ShoppingCart
              class="size-4"
              aria-hidden="true"
            />
            Ajouter au panier
          </button>
          <button
            type="button"
            class="book-detail-hero__btn book-detail-hero__btn--outline"
          >
            <Plus
              class="size-4"
              aria-hidden="true"
            />
            Ajouter à la bibliothèque
          </button>
          <button
            type="button"
            class="book-detail-hero__btn book-detail-hero__btn--outline"
            :class="{ 'book-detail-hero__btn--favorite-active': isFavorite }"
            :aria-pressed="isFavorite"
            @click="isFavorite = !isFavorite"
          >
            <Heart
              class="size-4"
              :fill="isFavorite ? 'currentColor' : 'none'"
              aria-hidden="true"
            />
            Ajouter aux favoris
          </button>
        </div>
      </div>

      <aside
        class="book-detail-hero__badges"
        aria-label="Distinctions du livre"
      >
        <div class="book-detail-hero__badges-card">
          <div
            v-for="badge in book.badges"
            :key="badge.id"
            class="book-detail-hero__badge-row"
          >
            <img
              :src="badge.icon"
              :alt="''"
              class="book-detail-hero__badge-icon"
              aria-hidden="true"
            >
            <span class="book-detail-hero__badge-label">{{ badge.label }}</span>
          </div>

          <div class="book-detail-hero__sales">
            <span class="book-detail-hero__sales-value">{{ book.salesHighlight.value }}</span>
            <span class="book-detail-hero__sales-label">{{ book.salesHighlight.label }}</span>
          </div>
        </div>
      </aside>
    </div>

    <div class="book-detail-hero__meta">
      <div class="book-detail-hero__meta-grid">
        <div class="book-detail-hero__meta-item">
          <span class="book-detail-hero__meta-value">{{ book.metadata.pages }}</span>
          <span class="book-detail-hero__meta-label">Pages</span>
        </div>
        <div class="book-detail-hero__meta-item">
          <span class="book-detail-hero__meta-value">{{ book.metadata.language }}</span>
          <span class="book-detail-hero__meta-label">Langue</span>
        </div>
        <div class="book-detail-hero__meta-item">
          <div class="book-detail-hero__meta-value book-detail-hero__meta-value--formats">
            <img
              :src="iconEpub"
              alt=""
              class="book-detail-hero__meta-format-icon"
              aria-hidden="true"
            >
            <img
              :src="iconPdf"
              alt=""
              class="book-detail-hero__meta-format-icon"
              aria-hidden="true"
            >
            <span>{{ book.metadata.formats }}</span>
          </div>
          <span class="book-detail-hero__meta-label">Format</span>
        </div>
        <div class="book-detail-hero__meta-item">
          <span class="book-detail-hero__meta-value">{{ book.metadata.publishedAt }}</span>
          <span class="book-detail-hero__meta-label">Publié le</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight, Search } from 'lucide-vue-next'
import heroOpenBook from '~/assets/images/categories/hero-open-book-2.webp'
import heroFloatingBook from '~/assets/images/categories/hero-open-book.webp'

const searchQuery = ref('')
const heroRef = ref<HTMLElement | null>(null)
const backdropImageRef = ref<HTMLElement | null>(null)
const particlesRef = ref<HTMLElement | null>(null)
const floatingBookRefs = ref<(HTMLElement | null)[]>([])

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: 58 + (index * 7.3) % 38,
  y: 12 + (index * 11.7) % 72,
  size: 2 + (index % 3),
  delay: (index * 0.17) % 2.4,
}))

const { init: initHeroAnimations, cleanup: cleanupHeroAnimations } = useCategoriesHeroAnimations()

function setFloatingBookRef(element: Element | null, index: number) {
  floatingBookRefs.value[index] = element as HTMLElement | null
}

function submitSearch() {
  const query = searchQuery.value.trim()
  if (!query)
    return

  navigateTo({
    path: '/catalogue',
    query: { q: query },
  })
}

onMounted(async () => {
  await nextTick()

  if (!heroRef.value)
    return

  initHeroAnimations({
    section: heroRef.value,
    backdropImage: backdropImageRef.value,
    particles: particlesRef.value
      ? Array.from(particlesRef.value.querySelectorAll<HTMLElement>('.categories-hero__particle'))
      : [],
    floatingBooks: floatingBookRefs.value.filter(Boolean) as HTMLElement[],
  })
})

onUnmounted(() => {
  cleanupHeroAnimations()
})
</script>

<template>
  <section
    ref="heroRef"
    class="categories-hero"
    aria-labelledby="categories-hero-heading"
  >
    <div
      class="categories-hero__backdrop"
      aria-hidden="true"
    >
      <div
        ref="backdropImageRef"
        class="categories-hero__backdrop-image"
        :style="{ backgroundImage: `url(${heroOpenBook})` }"
      />

      <div
        ref="particlesRef"
        class="categories-hero__particles"
      >
        <span
          v-for="particle in particles"
          :key="particle.id"
          class="categories-hero__particle"
          :style="{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }"
        />
      </div>

      <div class="categories-hero__floating-books">
        <img
          :ref="(element) => setFloatingBookRef(element, 0)"
          :src="heroFloatingBook"
          alt=""
          class="categories-hero__floating-book categories-hero__floating-book--one"
          loading="eager"
          decoding="async"
        >
        <img
          :ref="(element) => setFloatingBookRef(element, 1)"
          :src="heroOpenBook"
          alt=""
          class="categories-hero__floating-book categories-hero__floating-book--two"
          loading="eager"
          decoding="async"
        >
      </div>
    </div>

    <div class="page-container categories-hero__inner">
      <div class="categories-hero__content">
        <nav
          class="categories-hero__breadcrumb"
          aria-label="Fil d'Ariane"
        >
          <NuxtLink
            to="/"
            class="categories-hero__breadcrumb-link"
          >
            Accueil
          </NuxtLink>
          <ChevronRight
            class="categories-hero__breadcrumb-separator"
            aria-hidden="true"
          />
          <span
            class="categories-hero__breadcrumb-current"
            aria-current="page"
          >
            Catégories
          </span>
        </nav>

        <h1
          id="categories-hero-heading"
          class="categories-hero__title"
        >
          Explorez le savoir
          <span class="categories-hero__title-accent">africain et mondial</span>
        </h1>

        <p class="categories-hero__subtitle">
          Plus de 50 catégories de livres pour apprendre, enseigner, se divertir, publier et transmettre le savoir.
        </p>

        <form
          class="categories-hero__search"
          role="search"
          @submit.prevent="submitSearch"
        >
          <label
            for="categories-hero-search"
            class="sr-only"
          >
            Rechercher un livre, une catégorie ou un auteur
          </label>
          <input
            id="categories-hero-search"
            v-model="searchQuery"
            type="search"
            class="categories-hero__search-input"
            placeholder="Rechercher un livre, une catégorie, un auteur..."
            autocomplete="off"
          >
          <button
            type="submit"
            class="categories-hero__search-button"
            aria-label="Lancer la recherche"
          >
            <Search
              class="categories-hero__search-icon"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

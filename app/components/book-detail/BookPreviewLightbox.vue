<script setup lang="ts">
import type { BookPreviewPage } from '@/data/book-detail-page'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

const props = defineProps<{
  pages: BookPreviewPage[]
  startIndex?: number
}>()

const emit = defineEmits<{
  close: []
}>()

const currentIndex = ref(props.startIndex ?? 0)

const canGoPrev = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value < props.pages.length - 1)

const currentPage = computed(() => props.pages[currentIndex.value])

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))

function goPrev() {
  if (canGoPrev.value)
    currentIndex.value -= 1
}

function goNext() {
  if (canGoNext.value)
    currentIndex.value += 1
}

function close() {
  emit('close')
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    goPrev()
    return
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    goNext()
  }
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})

watch(() => props.startIndex, (value) => {
  if (value != null)
    currentIndex.value = value
})
</script>

<template>
  <Teleport to="body">
    <div
      class="book-preview-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`Aperçu plein écran — ${currentPage?.alt ?? 'page du livre'}`"
    >
      <div
        class="book-preview-lightbox__backdrop"
        aria-hidden="true"
        @click="close"
      />

      <div class="book-preview-lightbox__panel">
        <header class="book-preview-lightbox__header">
          <p class="book-preview-lightbox__counter">
            Page {{ currentIndex + 1 }} / {{ pages.length }}
          </p>
          <button
            type="button"
            class="book-preview-lightbox__close"
            aria-label="Fermer l'aperçu"
            @click="close"
          >
            <X
              class="size-5"
              aria-hidden="true"
            />
          </button>
        </header>

        <div class="book-preview-lightbox__stage">
          <button
            type="button"
            class="book-preview-lightbox__arrow book-preview-lightbox__arrow--prev"
            :disabled="!canGoPrev"
            aria-label="Page précédente"
            @click="goPrev"
          >
            <ChevronLeft
              class="size-6"
              aria-hidden="true"
            />
          </button>

          <div class="book-preview-lightbox__viewport">
            <div
              class="book-preview-lightbox__track"
              :style="trackStyle"
            >
              <figure
                v-for="page in pages"
                :key="page.id"
                class="book-preview-lightbox__slide"
              >
                <img
                  :src="page.largeImage"
                  :alt="page.alt"
                  class="book-preview-lightbox__image"
                  decoding="async"
                >
              </figure>
            </div>
          </div>

          <button
            type="button"
            class="book-preview-lightbox__arrow book-preview-lightbox__arrow--next"
            :disabled="!canGoNext"
            aria-label="Page suivante"
            @click="goNext"
          >
            <ChevronRight
              class="size-6"
              aria-hidden="true"
            />
          </button>
        </div>

        <p class="book-preview-lightbox__caption">
          {{ currentPage?.alt }}
        </p>

        <div class="book-preview-lightbox__mobile-nav">
          <button
            type="button"
            class="book-preview-lightbox__arrow"
            :disabled="!canGoPrev"
            aria-label="Page précédente"
            @click="goPrev"
          >
            <ChevronLeft
              class="size-5"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            class="book-preview-lightbox__arrow"
            :disabled="!canGoNext"
            aria-label="Page suivante"
            @click="goNext"
          >
            <ChevronRight
              class="size-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

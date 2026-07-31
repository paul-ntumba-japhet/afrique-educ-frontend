<script setup lang="ts">
import { MapPin, X } from 'lucide-vue-next'
import type { QuoteDeliverySite } from '@/types/institutional-quote'

const props = defineProps<{
  open: boolean
  mode: 'create' | 'edit'
  initial?: QuoteDeliverySite | null
}>()

const emit = defineEmits<{
  close: []
  save: [value: Omit<QuoteDeliverySite, 'id' | 'isPrimary'> & { id?: string, isPrimary?: boolean }]
}>()

const form = reactive({
  name: '',
  address: '',
  bookCount: 0,
  contact: '',
})

const titleId = 'iq-site-modal-title'
const nameInput = ref<HTMLInputElement | null>(null)

watch(
  () => [props.open, props.initial, props.mode] as const,
  async ([open]) => {
    if (!open)
      return
    form.name = props.initial?.name ?? ''
    form.address = props.initial?.address ?? ''
    form.bookCount = props.initial?.bookCount ?? 0
    form.contact = props.initial?.contact ?? ''
    await nextTick()
    nameInput.value?.focus()
  },
)

const canSave = computed(() =>
  form.name.trim().length > 0
  && form.address.trim().length > 0,
)

function onBackdrop(event: MouseEvent) {
  if (event.target === event.currentTarget)
    emit('close')
}

function onKeydown(event: KeyboardEvent) {
  if (!props.open)
    return
  if (event.key === 'Escape')
    emit('close')
}

function submit() {
  if (!canSave.value)
    return
  emit('save', {
    id: props.initial?.id,
    isPrimary: props.initial?.isPrimary,
    name: form.name.trim(),
    address: form.address.trim(),
    bookCount: Math.max(0, Number(form.bookCount) || 0),
    contact: form.contact.trim() || '—',
  })
}

watch(() => props.open, (open) => {
  if (!import.meta.client)
    return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  if (import.meta.client)
    document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="iq-site-modal">
      <div
        v-if="open"
        class="iq-site-modal"
        role="presentation"
        @click="onBackdrop"
      >
        <div
          class="iq-site-modal__panel"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
        >
          <header class="iq-site-modal__head">
            <div class="iq-site-modal__head-copy">
              <span
                class="iq-site-modal__icon"
                aria-hidden="true"
              >
                <MapPin
                  class="size-5"
                  :stroke-width="1.75"
                />
              </span>
              <div>
                <h3 :id="titleId">
                  {{ mode === 'edit' ? 'Modifier le site' : 'Ajouter un site' }}
                </h3>
                <p>
                  Renseignez les informations de livraison pour ce site.
                </p>
              </div>
            </div>
            <button
              type="button"
              class="iq-site-modal__close"
              aria-label="Fermer"
              @click="emit('close')"
            >
              <X
                class="size-4"
                :stroke-width="2"
              />
            </button>
          </header>

          <form
            class="iq-site-modal__form"
            @submit.prevent="submit"
          >
            <label class="iq-site-modal__field">
              <span class="iq-site-modal__label">Site / Établissement *</span>
              <input
                ref="nameInput"
                v-model="form.name"
                class="iq-site-modal__input"
                type="text"
                required
                placeholder="Ex. Bibliothèque centrale"
              >
            </label>

            <label class="iq-site-modal__field">
              <span class="iq-site-modal__label">Adresse *</span>
              <input
                v-model="form.address"
                class="iq-site-modal__input"
                type="text"
                required
                placeholder="Rue, commune, ville…"
              >
            </label>

            <div class="iq-site-modal__row">
              <label class="iq-site-modal__field">
                <span class="iq-site-modal__label">Nombre d’ouvrages</span>
                <input
                  v-model.number="form.bookCount"
                  class="iq-site-modal__input"
                  type="number"
                  min="0"
                  step="1"
                >
              </label>

              <label class="iq-site-modal__field">
                <span class="iq-site-modal__label">Contact</span>
                <input
                  v-model="form.contact"
                  class="iq-site-modal__input"
                  type="text"
                  placeholder="Nom et / ou téléphone"
                >
              </label>
            </div>

            <footer class="iq-site-modal__footer">
              <button
                type="button"
                class="iq-site-modal__btn iq-site-modal__btn--ghost"
                @click="emit('close')"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="iq-site-modal__btn iq-site-modal__btn--primary"
                :disabled="!canSave"
              >
                {{ mode === 'edit' ? 'Enregistrer' : 'Ajouter le site' }}
              </button>
            </footer>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

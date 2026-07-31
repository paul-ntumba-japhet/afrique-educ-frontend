<script setup lang="ts">
import {
  Check,
  ClipboardList,
  FileSpreadsheet,
  FileImage,
  FileText,
  Headphones,
  Info,
  Lock,
  MapPin,
  Package,
  Plus,
  Sparkles,
} from 'lucide-vue-next'
import bibliothequeImage from '~/assets/images/commandes-institutions/bibliotheque.png'
import {
  billingTips,
  bookSelectionTips,
  buildQuoteAttachments,
  deliveryTips,
  formatProvisionalEstimate,
  quantityTips,
  serviceTips,
} from '@/data/institutional-quote'
import type {
  InstitutionalQuoteDraft,
  QuoteAttachment,
  QuoteBookSelection,
  QuoteDeliveryState,
  QuoteQuantityState,
  QuoteServicesState,
} from '@/types/institutional-quote'

const props = defineProps<{
  draft?: InstitutionalQuoteDraft | null
  bookSelection?: QuoteBookSelection | null
  quantities?: QuoteQuantityState | null
  services?: QuoteServicesState | null
  delivery?: QuoteDeliveryState | null
  currentStep?: number
}>()

const emit = defineEmits<{
  contact: []
  'add-attachment': [file: QuoteAttachment]
}>()

const method = computed(() => props.bookSelection?.method ?? props.draft?.bookSelection.method ?? null)
const step = computed(() => props.currentStep ?? 1)

const tips = computed(() => {
  if (step.value >= 7)
    return null
  if (step.value >= 6)
    return billingTips
  if (step.value >= 5)
    return deliveryTips
  if (step.value >= 4)
    return serviceTips
  if (step.value >= 3)
    return quantityTips
  if (!method.value)
    return null
  return bookSelectionTips[method.value]
})

const referencesCount = computed(() => {
  if (props.quantities?.lines.length)
    return props.quantities.lines.length
  const selection = props.bookSelection ?? props.draft?.bookSelection
  if (!selection)
    return 0
  if (selection.method === 'catalogue')
    return selection.selectedBooks.length
  if (selection.method === 'import')
    return selection.import.rows.length
  if (selection.method === 'need' && selection.need.details.trim())
    return 1
  return 0
})

const quantityCount = computed(() => {
  if (props.quantities?.lines.length) {
    return props.quantities.lines.reduce((sum, line) => sum + line.quantity, 0)
  }
  const selection = props.bookSelection ?? props.draft?.bookSelection
  if (!selection)
    return 0
  if (selection.method === 'catalogue') {
    return selection.selectedBooks.reduce((sum, item) => sum + item.quantity, 0)
  }
  if (selection.method === 'import') {
    return selection.import.rows.reduce((sum, row) => sum + row.quantity, 0)
  }
  if (selection.method === 'need') {
    const n = Number.parseInt(selection.need.approximateCount.replace(/\s/g, ''), 10)
    return Number.isFinite(n) ? n : 0
  }
  return 0
})

const servicesCount = computed(() =>
  props.services?.selectedIds.length ?? props.draft?.services.selectedIds.length ?? 0,
)

const servicesLabel = computed(() => {
  const n = servicesCount.value
  if (n === 0)
    return 'Aucun sélectionné'
  return `${n} sélectionné${n > 1 ? 's' : ''}`
})

const deliveryLabel = computed(() => {
  const delivery = props.delivery ?? props.draft?.delivery
  if (!delivery?.mode)
    return 'Non définie'
  if (delivery.mode === 'multi') {
    const n = delivery.sites.length || 1
    return `${n} adresse${n > 1 ? 's' : ''}`
  }
  if (delivery.mode === 'partner')
    return 'Point partenaire'
  if (delivery.mode === 'pickup')
    return 'Enlèvement'
  if (delivery.mode === 'international')
    return 'Internationale'
  if (delivery.address.city || delivery.address.address)
    return '1 adresse'
  return '1 adresse'
})

const provisionalEstimate = computed(() => {
  const lines = props.quantities?.lines ?? props.draft?.quantities.lines
  if (!lines?.length)
    return null
  return lines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0)
})

const estimateLabel = computed(() => {
  if (provisionalEstimate.value == null)
    return '—'
  const currency = props.draft?.billing.budget.currency
    ?? props.quantities?.currency
    ?? props.draft?.quantities.currency
    ?? 'FCFA'
  return formatProvisionalEstimate(provisionalEstimate.value, currency)
})

const referencesLabel = computed(() => {
  const n = referencesCount.value
  return `${n} livre${n > 1 ? 's' : ''}`
})

const quantityLabel = computed(() => {
  const n = quantityCount.value
  return `${n} exemplaire${n > 1 ? 's' : ''}`
})

const attachments = computed(() => {
  if (!props.draft)
    return []
  return buildQuoteAttachments(props.draft)
})

const fileInput = ref<HTMLInputElement | null>(null)

function fileIcon(name: string) {
  const lower = name.toLowerCase()
  if (lower.endsWith('.xlsx') || lower.endsWith('.xls') || lower.endsWith('.csv'))
    return FileSpreadsheet
  if (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.webp'))
    return FileImage
  return FileText
}

function formatSize(bytes: number) {
  if (bytes < 1024)
    return `${bytes} o`
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toFixed(0)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

function onPickFile() {
  fileInput.value?.click()
}

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file)
    return
  emit('add-attachment', {
    id: `upload-${Date.now()}`,
    name: file.name,
    sizeLabel: formatSize(file.size),
    source: 'upload',
  })
  input.value = ''
}
</script>

<template>
  <aside class="inst-quote-summary">
    <article class="inst-quote-summary__card inst-quote-summary__card--dark">
      <header class="inst-quote-summary__card-head">
        <ClipboardList
          class="size-4"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <h2>Résumé de votre demande</h2>
      </header>
      <ul class="inst-quote-summary__list">
        <li>
          <span>
            <Package
              class="size-4"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            Références
          </span>
          <strong>{{ referencesLabel }}</strong>
        </li>
        <li>
          <span>
            <Sparkles
              class="size-4"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            Quantité totale
          </span>
          <strong>{{ quantityLabel }}</strong>
        </li>
        <li>
          <span>
            <ClipboardList
              class="size-4"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            Services
          </span>
          <strong>{{ servicesLabel }}</strong>
        </li>
        <li>
          <span>
            <MapPin
              class="size-4"
              :stroke-width="1.5"
              aria-hidden="true"
            />
            Livraison
          </span>
          <strong>{{ deliveryLabel }}</strong>
        </li>
        <li class="inst-quote-summary__list-total">
          <span>Estimation provisoire</span>
          <strong>{{ estimateLabel }}</strong>
        </li>
      </ul>
    </article>

    <article
      v-if="step >= 7"
      class="inst-quote-summary__card inst-quote-summary__card--docs"
    >
      <h3>Documents joints ({{ attachments.length }})</h3>
      <ul
        v-if="attachments.length"
        class="inst-quote-summary__docs"
      >
        <li
          v-for="file in attachments"
          :key="file.id"
        >
          <span
            class="inst-quote-summary__doc-icon"
            aria-hidden="true"
          >
            <component
              :is="fileIcon(file.name)"
              class="size-4"
              :stroke-width="1.5"
            />
          </span>
          <span class="inst-quote-summary__doc-copy">
            <strong>{{ file.name }}</strong>
            <small>{{ file.sizeLabel }}</small>
          </span>
        </li>
      </ul>
      <p
        v-else
        class="inst-quote-summary__docs-empty"
      >
        Aucun document joint pour le moment.
      </p>
      <input
        ref="fileInput"
        type="file"
        class="sr-only"
        accept=".pdf,.png,.jpg,.jpeg,.xlsx,.xls,.csv,.doc,.docx"
        @change="onFileChange"
      >
      <button
        type="button"
        class="inst-quote-summary__doc-add"
        @click="onPickFile"
      >
        <Plus
          class="size-4"
          :stroke-width="1.75"
          aria-hidden="true"
        />
        Ajouter un document
      </button>
    </article>

    <article
      v-if="step >= 7"
      class="inst-quote-summary__card inst-quote-summary__card--secure"
    >
      <Lock
        class="size-4"
        :stroke-width="1.5"
        aria-hidden="true"
      />
      <p>Vos informations sont sécurisées et utilisées uniquement pour préparer votre devis.</p>
    </article>

    <article
      v-else-if="tips"
      class="inst-quote-summary__card inst-quote-summary__card--tips"
    >
      <Info
        class="inst-quote-summary__info-icon"
        :stroke-width="1.5"
        aria-hidden="true"
      />
      <h3>{{ tips.title }}</h3>
      <ul class="inst-quote-summary__tips">
        <li
          v-for="item in tips.items"
          :key="item"
        >
          <Check
            class="inst-quote-summary__promo-check"
            :stroke-width="1.75"
            aria-hidden="true"
          />
          <span>{{ item }}</span>
        </li>
      </ul>
    </article>

    <article
      v-else
      class="inst-quote-summary__card inst-quote-summary__card--info"
    >
      <Info
        class="inst-quote-summary__info-icon"
        :stroke-width="1.5"
        aria-hidden="true"
      />
      <h3>À propos du devis</h3>
      <p>
        Le montant final dépendra de la disponibilité des ouvrages, des remises volume et des frais de livraison confirmés par votre conseiller.
      </p>
    </article>

    <article class="inst-quote-summary__card inst-quote-summary__card--promo">
      <img
        :src="bibliothequeImage"
        alt=""
        class="inst-quote-summary__promo-image"
        width="360"
        height="200"
        loading="lazy"
        aria-hidden="true"
      >
      <div class="inst-quote-summary__promo-body">
        <template v-if="step >= 7">
          <h3>Besoin d’assistance ?</h3>
          <p class="inst-quote-summary__promo-lead">
            Un conseiller dédié peut vous accompagner avant l’envoi de votre demande.
          </p>
          <ul>
            <li>
              <Check
                class="inst-quote-summary__promo-check"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              <span>institutions@afric-educ.com</span>
            </li>
            <li>
              <Check
                class="inst-quote-summary__promo-check"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              <span>+243 81 000 00 00</span>
            </li>
          </ul>
        </template>
        <template v-else>
          <h3>Un accompagnement dédié à votre institution</h3>
          <ul>
            <li>
              <Check
                class="inst-quote-summary__promo-check"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              <span>Conseiller dédié</span>
            </li>
            <li>
              <Check
                class="inst-quote-summary__promo-check"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              <span>Devis professionnel</span>
            </li>
            <li>
              <Check
                class="inst-quote-summary__promo-check"
                :stroke-width="1.75"
                aria-hidden="true"
              />
              <span>Suivi centralisé de votre demande</span>
            </li>
          </ul>
        </template>
        <button
          type="button"
          class="inst-quote-summary__support-btn"
          @click="emit('contact')"
        >
          <Headphones
            class="size-4"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          {{ step >= 7 ? 'Nous contacter' : 'Demander un conseil' }}
        </button>
      </div>
    </article>
  </aside>
</template>

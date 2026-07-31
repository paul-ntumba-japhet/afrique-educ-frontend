<script setup lang="ts">
import {
  Check,
  ClipboardList,
  Copy,
  Headphones,
  Mail,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-vue-next'
import type { QuoteSubmissionSnapshot } from '@/types/institutional-quote'

const props = defineProps<{
  submission: QuoteSubmissionSnapshot | null
}>()

const emit = defineEmits<{
  contact: []
}>()

const copied = ref(false)

const summary = computed(() => props.submission?.summary ?? null)

const referencesLabel = computed(() => {
  const n = summary.value?.references ?? 0
  return `${n} livre${n > 1 ? 's' : ''}`
})

const quantityLabel = computed(() => {
  const n = summary.value?.quantity ?? 0
  return `${n} exemplaire${n > 1 ? 's' : ''}`
})

const servicesLabel = computed(() => {
  const n = summary.value?.services ?? 0
  if (n === 0)
    return 'Aucun sélectionné'
  return `${n} sélectionné${n > 1 ? 's' : ''}`
})

const deliveryLabel = computed(() => {
  const n = summary.value?.deliveryAddresses ?? 0
  if (n === 0)
    return 'Non définie'
  return `${n} adresse${n > 1 ? 's' : ''}`
})

const estimateLabel = computed(() => summary.value?.estimateLabel ?? '—')

const reference = computed(() => props.submission?.reference ?? '—')

async function copyReference() {
  if (!props.submission?.reference || !import.meta.client)
    return
  try {
    await navigator.clipboard.writeText(props.submission.reference)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  }
  catch {
    /* ignore */
  }
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
      <p class="inst-quote-confirm-aside__hint">
        Hors remises volume et frais de services confirmés.
      </p>
    </article>

    <article class="inst-quote-summary__card inst-quote-confirm-aside__ref">
      <p class="inst-quote-confirm-aside__ref-label">
        Numéro de référence
      </p>
      <div class="inst-quote-confirm-aside__ref-row">
        <strong>{{ reference }}</strong>
        <button
          type="button"
          class="inst-quote-confirm-aside__copy"
          :aria-label="copied ? 'Référence copiée' : 'Copier la référence'"
          @click="copyReference"
        >
          <Check
            v-if="copied"
            class="size-4"
            :stroke-width="2"
            aria-hidden="true"
          />
          <Copy
            v-else
            class="size-4"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>

    <article class="inst-quote-summary__card inst-quote-confirm-aside__help">
      <div class="inst-quote-confirm-aside__help-head">
        <Headphones
          class="size-5"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        <h3>Besoin d’assistance ?</h3>
      </div>
      <p>Votre conseiller institutions reste joignable pour toute question.</p>
      <a href="mailto:institutions@afric-educ.com">
        <Mail
          class="size-3.5"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        institutions@afric-educ.com
      </a>
      <a href="tel:+243810000000">
        <Phone
          class="size-3.5"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        +243 81 000 00 00
      </a>
      <p class="inst-quote-confirm-aside__hours">
        Lun – Ven : 08h00 – 17h00
      </p>
      <button
        type="button"
        class="inst-quote-summary__support-btn"
        @click="emit('contact')"
      >
        Nous contacter
      </button>
    </article>

    <article class="inst-quote-summary__card inst-quote-confirm-aside__secure">
      <ShieldCheck
        class="size-4"
        :stroke-width="1.5"
        aria-hidden="true"
      />
      <div>
        <h3>Vos informations sont sécurisées</h3>
        <p>Vos données sont traitées de manière confidentielle pour préparer votre devis.</p>
      </div>
    </article>
  </aside>
</template>

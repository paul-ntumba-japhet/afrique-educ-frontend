<script setup lang="ts">
import { Pencil, Plus, Settings2, Trash2 } from 'lucide-vue-next'
import DeliveryModeSelector from '~/components/institutional-quote/delivery/DeliveryModeSelector.vue'
import DeliveryAddressForm from '~/components/institutional-quote/delivery/DeliveryAddressForm.vue'
import DeliveryConstraintsForm from '~/components/institutional-quote/delivery/DeliveryConstraintsForm.vue'
import DeliverySiteModal from '~/components/institutional-quote/delivery/DeliverySiteModal.vue'
import type {
  DeliveryConstraintId,
  DeliveryModeId,
  QuoteDeliverySite,
  QuoteDeliveryState,
  QuoteInstitutionInfo,
  QuoteContactPerson,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteDeliveryState
  institution?: QuoteInstitutionInfo | null
  contact?: QuoteContactPerson | null
  totalBookCount?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteDeliveryState]
}>()

const siteModalOpen = ref(false)
const siteModalMode = ref<'create' | 'edit'>('create')
const editingSite = ref<QuoteDeliverySite | null>(null)

const showAddress = computed(() =>
  props.modelValue.mode !== 'pickup'
  && props.modelValue.mode !== 'partner',
)

function patch(partial: Partial<QuoteDeliveryState>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function onMode(mode: DeliveryModeId) {
  const next: Partial<QuoteDeliveryState> = { mode }
  if (mode === 'multi' && props.modelValue.sites.length === 0)
    next.sites = [buildPrimarySite()]
  patch(next)
}

function buildPrimarySite(): QuoteDeliverySite {
  const address = props.modelValue.address
  const contact = props.contact
  const institution = props.institution
  const parts = [
    address.address,
    address.district,
    address.city,
  ].filter(Boolean)
  return {
    id: `site-primary-${Date.now()}`,
    name: institution?.organizationName
      ? `${institution.organizationName} (Site principal)`
      : 'Site principal',
    address: parts.join(', ') || 'Adresse à préciser',
    bookCount: props.totalBookCount ?? 0,
    contact: [
      address.contactName
      || [contact?.firstName, contact?.lastName].filter(Boolean).join(' '),
      address.contactPhone || contact?.phone,
    ].filter(Boolean).join(' · ') || '—',
    isPrimary: true,
  }
}

function ensurePrimaryFromAddress() {
  if (props.modelValue.mode !== 'multi')
    return
  if (props.modelValue.sites.length)
    return
  patch({ sites: [buildPrimarySite()] })
}

watch(
  () => props.modelValue.mode,
  () => ensurePrimaryFromAddress(),
)

function openCreateSiteModal() {
  siteModalMode.value = 'create'
  editingSite.value = null
  siteModalOpen.value = true
}

function openEditSiteModal(id: string) {
  const site = props.modelValue.sites.find(item => item.id === id)
  if (!site)
    return
  siteModalMode.value = 'edit'
  editingSite.value = site
  siteModalOpen.value = true
}

function closeSiteModal() {
  siteModalOpen.value = false
  editingSite.value = null
}

function onSaveSite(payload: Omit<QuoteDeliverySite, 'id' | 'isPrimary'> & {
  id?: string
  isPrimary?: boolean
}) {
  if (siteModalMode.value === 'edit' && payload.id) {
    patch({
      sites: props.modelValue.sites.map(item =>
        item.id === payload.id
          ? {
              ...item,
              name: payload.name,
              address: payload.address,
              bookCount: payload.bookCount,
              contact: payload.contact,
            }
          : item,
      ),
    })
  }
  else {
    const site: QuoteDeliverySite = {
      id: `site-${Date.now()}`,
      name: payload.name,
      address: payload.address,
      bookCount: payload.bookCount,
      contact: payload.contact,
      isPrimary: false,
    }
    patch({ sites: [...props.modelValue.sites, site] })
  }
  closeSiteModal()
}

function removeSite(id: string) {
  patch({ sites: props.modelValue.sites.filter(site => site.id !== id) })
}

function setConstraints(constraints: DeliveryConstraintId[]) {
  patch({ constraints })
}
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-delivery-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          05.
        </p>
        <h2
          id="inst-quote-step-delivery-heading"
          class="inst-quote-step__title"
        >
          Livraison et contraintes
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Indiquez comment et où vous souhaitez recevoir vos ouvrages. Précisez également les contraintes logistiques pour faciliter la livraison.
      </p>
    </header>

    <DeliveryModeSelector
      :model-value="modelValue.mode"
      @update:model-value="onMode"
    />

    <DeliveryAddressForm
      v-if="showAddress"
      :model-value="modelValue.address"
      @update:model-value="patch({ address: $event })"
    />

    <DeliveryConstraintsForm
      :constraints="modelValue.constraints"
      :desired-date="modelValue.desiredDate"
      :deadline-date="modelValue.deadlineDate"
      :comments="modelValue.comments"
      @update:constraints="setConstraints"
      @update:desired-date="patch({ desiredDate: $event })"
      @update:deadline-date="patch({ deadlineDate: $event })"
      @update:comments="patch({ comments: $event })"
    />

    <section
      class="inst-quote-deliv-sites"
      aria-labelledby="inst-quote-deliv-sites-heading"
    >
      <header class="inst-quote-deliv-sites__head">
        <div class="inst-quote-deliv-sites__title-wrap">
          <Settings2
            class="inst-quote-deliv-sites__icon"
            :stroke-width="1.5"
            aria-hidden="true"
          />
          <div>
            <h3 id="inst-quote-deliv-sites-heading">
              Répartition sur plusieurs sites
              <span class="inst-quote-deliv-sites__optional">(facultatif)</span>
            </h3>
            <p>
              Si vos ouvrages doivent être livrés à plusieurs établissements ou sites, ajoutez-les ici.
            </p>
          </div>
        </div>
        <button
          type="button"
          class="inst-quote-deliv-sites__add"
          @click="openCreateSiteModal"
        >
          <Plus
            class="size-4"
            :stroke-width="2"
            aria-hidden="true"
          />
          Ajouter un site
        </button>
      </header>

      <div class="inst-quote-deliv-sites__table-wrap">
        <table class="inst-quote-deliv-sites__table">
          <thead>
            <tr>
              <th>Site / Établissement</th>
              <th>Adresse</th>
              <th>Nombre d’ouvrages</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="site in modelValue.sites"
              :key="site.id"
            >
              <td>
                <strong>{{ site.name }}</strong>
                <span
                  v-if="site.isPrimary"
                  class="inst-quote-deliv-sites__badge"
                >Principal</span>
              </td>
              <td>{{ site.address }}</td>
              <td>{{ site.bookCount.toLocaleString('fr-FR') }}</td>
              <td>{{ site.contact }}</td>
              <td>
                <div class="inst-quote-deliv-sites__actions">
                  <button
                    type="button"
                    class="inst-quote-deliv-sites__action"
                    aria-label="Modifier le site"
                    @click="openEditSiteModal(site.id)"
                  >
                    <Pencil
                      class="size-3.5"
                      :stroke-width="1.75"
                    />
                  </button>
                  <button
                    type="button"
                    class="inst-quote-deliv-sites__action inst-quote-deliv-sites__action--danger"
                    aria-label="Supprimer le site"
                    :disabled="site.isPrimary && modelValue.sites.length === 1"
                    @click="removeSite(site.id)"
                  >
                    <Trash2
                      class="size-3.5"
                      :stroke-width="1.75"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="!modelValue.sites.length">
              <td
                colspan="5"
                class="inst-quote-deliv-sites__empty"
              >
                Aucun site ajouté pour le moment.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <DeliverySiteModal
      :open="siteModalOpen"
      :mode="siteModalMode"
      :initial="editingSite"
      @close="closeSiteModal"
      @save="onSaveSite"
    />
  </section>
</template>

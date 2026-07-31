<script setup lang="ts">
import BudgetForm from '~/components/institutional-quote/billing/BudgetForm.vue'
import BillingInformationForm from '~/components/institutional-quote/billing/BillingInformationForm.vue'
import PaymentPreferenceForm from '~/components/institutional-quote/billing/PaymentPreferenceForm.vue'
import type {
  QuoteBillingState,
  QuoteContactPerson,
  QuoteInstitutionInfo,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteBillingState
  institution?: QuoteInstitutionInfo | null
  contact?: QuoteContactPerson | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteBillingState]
}>()

const hydrated = ref(false)

onMounted(() => {
  prefillsFromInstitution()
})

function patch(partial: Partial<QuoteBillingState>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function prefillsFromInstitution() {
  if (hydrated.value)
    return
  const billing = props.modelValue.billing
  const institution = props.institution
  const contact = props.contact
  if (!institution && !contact) {
    hydrated.value = true
    return
  }

  const next = { ...billing }
  let changed = false

  if (!next.legalName && institution?.organizationName) {
    next.legalName = institution.organizationName
    changed = true
  }
  if (!next.adminReference && institution?.adminReference) {
    next.adminReference = institution.adminReference
    changed = true
  }
  if (!next.billingAddress && institution) {
    const parts = [institution.address, institution.city, institution.country].filter(Boolean)
    if (parts.length) {
      next.billingAddress = parts.join(', ')
      changed = true
    }
  }
  if (!next.billingEmail && contact?.email) {
    next.billingEmail = contact.email
    changed = true
  }
  if (!next.officePhone && contact?.phone) {
    next.officePhone = contact.phone
    changed = true
  }
  if (!next.paymentContactName && contact) {
    const name = [contact.firstName, contact.lastName].filter(Boolean).join(' ')
    if (name) {
      next.paymentContactName = name
      changed = true
    }
  }
  if (!next.paymentContactTitle && contact?.jobTitle) {
    next.paymentContactTitle = contact.jobTitle
    changed = true
  }
  if (!next.paymentContactEmail && contact?.email) {
    next.paymentContactEmail = contact.email
    changed = true
  }

  if (changed)
    patch({ billing: next })
  hydrated.value = true
}
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-billing-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          06.
        </p>
        <h2
          id="inst-quote-step-billing-heading"
          class="inst-quote-step__title"
        >
          Budget, facturation et paiement envisagé
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Indiquez vos contraintes budgétaires et vos préférences de facturation. Aucun paiement n’est effectué à cette étape.
      </p>
    </header>

    <div class="inst-quote-bill-stack">
      <BudgetForm
        :model-value="modelValue.budget"
        @update:model-value="patch({ budget: $event })"
      />
      <BillingInformationForm
        :model-value="modelValue.billing"
        @update:model-value="patch({ billing: $event })"
      />
      <PaymentPreferenceForm
        :model-value="modelValue.payment"
        @update:model-value="patch({ payment: $event })"
      />
    </div>
  </section>
</template>

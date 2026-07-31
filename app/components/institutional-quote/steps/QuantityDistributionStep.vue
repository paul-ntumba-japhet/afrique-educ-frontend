<script setup lang="ts">
import {
  Copy,
  FileSpreadsheet,
  Layers,
  Minus,
  Plus,
  SplitSquareHorizontal,
  Trash2,
} from 'lucide-vue-next'
import {
  buildQuantityLinesFromSelection,
  deliverySites,
  quantityQuickActions,
} from '@/data/institutional-quote'
import type {
  QuoteBookSelection,
  QuoteQuantityLine,
  QuoteQuantityState,
} from '@/types/institutional-quote'

const props = defineProps<{
  modelValue: QuoteQuantityState
  bookSelection: QuoteBookSelection
}>()

const emit = defineEmits<{
  'update:modelValue': [value: QuoteQuantityState]
}>()

const synced = ref(false)

onMounted(() => {
  ensureLines()
})

watch(
  () => props.bookSelection,
  () => {
    synced.value = false
    ensureLines()
  },
  { deep: true },
)

function patch(partial: Partial<QuoteQuantityState>) {
  emit('update:modelValue', { ...props.modelValue, ...partial })
}

function ensureLines() {
  if (synced.value && props.modelValue.lines.length)
    return
  if (props.modelValue.lines.length) {
    synced.value = true
    return
  }
  const lines = buildQuantityLinesFromSelection(props.bookSelection)
  patch({ lines, selectedLineId: lines[0]?.id ?? null })
  synced.value = true
}

function updateLine(id: string, partial: Partial<QuoteQuantityLine>) {
  patch({
    lines: props.modelValue.lines.map(line =>
      line.id === id ? { ...line, ...partial } : line,
    ),
  })
}

function setQuantity(id: string, value: number) {
  updateLine(id, { quantity: Math.max(1, value) })
}

function selectLine(id: string) {
  patch({ selectedLineId: id })
}

function removeLine(id: string) {
  const lines = props.modelValue.lines.filter(line => line.id !== id)
  patch({
    lines,
    selectedLineId: props.modelValue.selectedLineId === id
      ? (lines[0]?.id ?? null)
      : props.modelValue.selectedLineId,
  })
}

function duplicateLine(id: string) {
  const source = props.modelValue.lines.find(line => line.id === id)
  if (!source)
    return
  const copy: QuoteQuantityLine = {
    ...source,
    id: `${source.id}-copy-${Date.now()}`,
    comment: source.comment ? `${source.comment} (copie)` : 'Ligne dupliquée',
  }
  const index = props.modelValue.lines.findIndex(line => line.id === id)
  const lines = [...props.modelValue.lines]
  lines.splice(index + 1, 0, copy)
  patch({ lines, selectedLineId: copy.id })
}

function addLine() {
  const line: QuoteQuantityLine = {
    id: `qty-manual-${Date.now()}`,
    title: 'Nouvel ouvrage',
    author: 'À préciser',
    format: 'Broché',
    quantity: 1,
    siteId: deliverySites[0]?.id ?? 'central',
    comment: '',
    coverTone: '#1a3020',
    unitPrice: 12000,
  }
  patch({
    lines: [...props.modelValue.lines, line],
    selectedLineId: line.id,
  })
}

function runQuickAction(id: string) {
  if (id === 'same-qty') {
    const base = props.modelValue.lines.find(line => line.id === props.modelValue.selectedLineId)
      ?? props.modelValue.lines[0]
    if (!base)
      return
    patch({
      lines: props.modelValue.lines.map(line => ({ ...line, quantity: base.quantity })),
    })
    return
  }
  if (id === 'duplicate' && props.modelValue.selectedLineId) {
    duplicateLine(props.modelValue.selectedLineId)
    return
  }
  if (id === 'split-sites') {
    const selected = props.modelValue.lines.find(line => line.id === props.modelValue.selectedLineId)
    if (!selected)
      return
    const nextSite = deliverySites.find(site => site.id !== selected.siteId) ?? deliverySites[0]
    const half = Math.max(1, Math.floor(selected.quantity / 2))
    updateLine(selected.id, { quantity: selected.quantity - half })
    const copy: QuoteQuantityLine = {
      ...selected,
      id: `${selected.id}-site-${Date.now()}`,
      quantity: half,
      siteId: nextSite.id,
      comment: 'Répartition multi-sites',
    }
    patch({
      lines: [...props.modelValue.lines, copy],
      selectedLineId: copy.id,
    })
  }
}

const totalReferences = computed(() => props.modelValue.lines.length)
const totalQuantity = computed(() =>
  props.modelValue.lines.reduce((sum, line) => sum + line.quantity, 0),
)
const provisionalEstimate = computed(() =>
  props.modelValue.lines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0),
)
const potentialDiscount = computed(() => {
  if (totalQuantity.value >= 200)
    return 18
  if (totalQuantity.value >= 100)
    return 12
  if (totalQuantity.value >= 40)
    return 8
  return 5
})

function formatMoney(value: number) {
  if (props.modelValue.currency === 'EUR')
    return `${Math.round(value / 650).toLocaleString('fr-FR')} €`
  return `${value.toLocaleString('fr-FR')} FCFA`
}

function siteCity(siteId: string) {
  return deliverySites.find(site => site.id === siteId)?.city ?? ''
}

const quickIcons = {
  'same-qty': Layers,
  duplicate: Copy,
  'split-sites': SplitSquareHorizontal,
  'import-qty': FileSpreadsheet,
} as const
</script>

<template>
  <section
    class="inst-quote-step"
    aria-labelledby="inst-quote-step-quantities-heading"
  >
    <header class="inst-quote-step__head">
      <div class="inst-quote-step__heading">
        <p
          class="inst-quote-step__number"
          aria-hidden="true"
        >
          03.
        </p>
        <h2
          id="inst-quote-step-quantities-heading"
          class="inst-quote-step__title"
        >
          Quantités et répartition
        </h2>
      </div>
      <p class="inst-quote-step__desc">
        Ajustez les volumes par titre et indiquez la destination de chaque lot.
      </p>
    </header>

    <div class="inst-quote-qty-actions">
      <button
        v-for="action in quantityQuickActions"
        :key="action.id"
        type="button"
        class="inst-quote-qty-actions__card"
        @click="runQuickAction(action.id)"
      >
        <span
          class="inst-quote-qty-actions__icon"
          aria-hidden="true"
        >
          <component
            :is="quickIcons[action.id]"
            class="size-4"
            :stroke-width="1.5"
          />
        </span>
        <span class="inst-quote-qty-actions__copy">
          <span class="inst-quote-qty-actions__title">{{ action.title }}</span>
          <span class="inst-quote-qty-actions__desc">{{ action.description }}</span>
        </span>
      </button>
    </div>

    <div class="inst-quote-qty-toolbar">
      <p class="inst-quote-qty-toolbar__count">
        Nombre total de références :
        <strong>{{ totalReferences }}</strong>
      </p>
      <span class="inst-quote-qty-toolbar__badge">
        {{ totalReferences }} référence{{ totalReferences > 1 ? 's' : '' }}
      </span>
      <label class="inst-quote-qty-toolbar__currency">
        <span class="sr-only">Devise</span>
        <select
          class="inst-quote-field__input inst-quote-field__select"
          :value="modelValue.currency"
          @change="patch({ currency: ($event.target as HTMLSelectElement).value as QuoteQuantityState['currency'] })"
        >
          <option value="FCFA">
            FCFA
          </option>
          <option value="EUR">
            EUR
          </option>
        </select>
      </label>
    </div>

    <div class="inst-quote-books-table-wrap inst-quote-qty-table-wrap">
      <table class="inst-quote-books-table inst-quote-qty-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Livre</th>
            <th scope="col">Format</th>
            <th scope="col">Quantité totale</th>
            <th scope="col">Répartition / destination</th>
            <th scope="col">Commentaire</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(line, index) in modelValue.lines"
            :key="line.id"
            :class="{ 'inst-quote-qty-table__row--selected': modelValue.selectedLineId === line.id }"
            @click="selectLine(line.id)"
          >
            <td>{{ index + 1 }}</td>
            <td>
              <div class="inst-quote-books-table__book">
                <span
                  class="inst-quote-books-table__cover"
                  :style="{ background: line.coverTone }"
                  aria-hidden="true"
                />
                <span>
                  <strong>{{ line.title }}</strong>
                  <small class="inst-quote-qty-table__author">{{ line.author }}</small>
                </span>
              </div>
            </td>
            <td>{{ line.format }}</td>
            <td>
              <div class="inst-quote-qty-stepper">
                <button
                  type="button"
                  class="inst-quote-qty-stepper__btn"
                  aria-label="Diminuer la quantité"
                  @click.stop="setQuantity(line.id, line.quantity - 1)"
                >
                  <Minus class="size-3.5" />
                </button>
                <input
                  class="inst-quote-qty-stepper__input"
                  type="number"
                  min="1"
                  :value="line.quantity"
                  @click.stop
                  @input="setQuantity(line.id, Number(($event.target as HTMLInputElement).value) || 1)"
                >
                <button
                  type="button"
                  class="inst-quote-qty-stepper__btn"
                  aria-label="Augmenter la quantité"
                  @click.stop="setQuantity(line.id, line.quantity + 1)"
                >
                  <Plus class="size-3.5" />
                </button>
              </div>
            </td>
            <td>
              <div class="inst-quote-qty-site">
                <select
                  class="inst-quote-field__input inst-quote-field__select"
                  :value="line.siteId"
                  @click.stop
                  @change="updateLine(line.id, { siteId: ($event.target as HTMLSelectElement).value })"
                >
                  <option
                    v-for="site in deliverySites"
                    :key="site.id"
                    :value="site.id"
                  >
                    {{ site.label }}
                  </option>
                </select>
                <span class="inst-quote-qty-site__city">{{ siteCity(line.siteId) }}</span>
              </div>
            </td>
            <td>
              <input
                class="inst-quote-field__input"
                type="text"
                :value="line.comment"
                placeholder="Note interne"
                @click.stop
                @input="updateLine(line.id, { comment: ($event.target as HTMLInputElement).value })"
              >
            </td>
            <td>
              <div class="inst-quote-qty-row-actions">
                <button
                  type="button"
                  class="inst-quote-qty-row-actions__btn"
                  aria-label="Dupliquer la ligne"
                  @click.stop="duplicateLine(line.id)"
                >
                  <Copy class="size-4" />
                </button>
                <button
                  type="button"
                  class="inst-quote-qty-row-actions__btn inst-quote-qty-row-actions__btn--danger"
                  aria-label="Supprimer la ligne"
                  @click.stop="removeLine(line.id)"
                >
                  <Trash2 class="size-4" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="inst-quote-qty-add"
        @click="addLine"
      >
        <Plus class="size-4" />
        Ajouter un ouvrage
      </button>
    </div>

    <div class="inst-quote-qty-stats">
      <article class="inst-quote-qty-stats__card">
        <p class="inst-quote-qty-stats__label">Quantité totale demandée</p>
        <p class="inst-quote-qty-stats__value">{{ totalQuantity }}</p>
      </article>
      <article class="inst-quote-qty-stats__card">
        <p class="inst-quote-qty-stats__label">Nombre total de références</p>
        <p class="inst-quote-qty-stats__value">{{ totalReferences }}</p>
      </article>
      <article class="inst-quote-qty-stats__card">
        <p class="inst-quote-qty-stats__label">Estimation provisoire</p>
        <p class="inst-quote-qty-stats__value">{{ formatMoney(provisionalEstimate) }}</p>
      </article>
      <article class="inst-quote-qty-stats__card">
        <p class="inst-quote-qty-stats__label">Remise potentielle</p>
        <p class="inst-quote-qty-stats__value">jusqu’à -{{ potentialDiscount }}%</p>
      </article>
    </div>
  </section>
</template>

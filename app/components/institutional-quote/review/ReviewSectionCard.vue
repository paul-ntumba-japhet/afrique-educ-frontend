<script setup lang="ts">
import { Check, Pencil } from 'lucide-vue-next'
import type { Component } from 'vue'

const props = defineProps<{
  title: string
  icon: Component
  lines: string[]
  listItems?: string[]
  listExpandLabel?: string
}>()

defineEmits<{
  edit: []
}>()

const expanded = ref(false)

const visibleListItems = computed(() => {
  const items = props.listItems ?? []
  if (expanded.value || !props.listExpandLabel)
    return items
  return items.slice(0, 4)
})

const showExpand = computed(() =>
  Boolean(props.listExpandLabel) && !expanded.value && (props.listItems?.length ?? 0) > 4,
)
</script>

<template>
  <article class="inst-quote-review-card">
    <header class="inst-quote-review-card__head">
      <div class="inst-quote-review-card__title-row">
        <span
          class="inst-quote-review-card__icon"
          aria-hidden="true"
        >
          <component
            :is="icon"
            class="size-5"
            :stroke-width="1.5"
          />
        </span>
        <h3>{{ title }}</h3>
      </div>
      <button
        type="button"
        class="inst-quote-review-card__edit"
        @click="$emit('edit')"
      >
        <Pencil
          class="size-3.5"
          :stroke-width="1.75"
          aria-hidden="true"
        />
        Modifier
      </button>
    </header>

    <ul
      v-if="listItems?.length"
      class="inst-quote-review-card__checks"
    >
      <li
        v-for="item in visibleListItems"
        :key="item"
      >
        <Check
          class="size-3.5"
          :stroke-width="2"
          aria-hidden="true"
        />
        <span>{{ item }}</span>
      </li>
    </ul>

    <button
      v-if="showExpand"
      type="button"
      class="inst-quote-review-card__more"
      @click="expanded = true"
    >
      {{ listExpandLabel }}
    </button>

    <ul
      v-if="lines.length"
      class="inst-quote-review-card__lines"
    >
      <li
        v-for="(line, index) in lines"
        :key="`${index}-${line}`"
      >
        {{ line }}
      </li>
    </ul>
  </article>
</template>

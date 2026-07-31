<script setup lang="ts">
import { advancedSearchFields } from '@/data/categories-page'
import { ChevronDown, Search } from 'lucide-vue-next'

defineProps<{
  contentHeight?: number
}>()

const router = useRouter()

const formValues = reactive<Record<string, string>>(
  Object.fromEntries(advancedSearchFields.map(field => [field.param, ''])),
)

function handleSubmit() {
  const query: Record<string, string> = {}

  for (const field of advancedSearchFields) {
    const value = formValues[field.param]
    if (value)
      query[field.param] = value
  }

  router.push({ path: '/catalogue', query })
}
</script>

<template>
  <div class="advanced-search">
    <SectionTitle
      heading-id="advanced-search-heading"
      index="08"
      title="Recherche avancée"
    />

    <form
      class="advanced-search__form"
      :class="{ 'advanced-search__form--synced': contentHeight }"
      :style="contentHeight ? { '--advanced-search-height': `${contentHeight}px` } : undefined"
      @submit.prevent="handleSubmit"
    >
      <div class="advanced-search__grid">
        <div
          v-for="field in advancedSearchFields"
          :key="field.id"
          class="advanced-search__field"
        >
          <label
            :for="`advanced-search-${field.id}`"
            class="sr-only"
          >
            {{ field.label }}
          </label>
          <div class="advanced-search__select-wrap">
            <select
              :id="`advanced-search-${field.id}`"
              v-model="formValues[field.param]"
              class="advanced-search__select"
              :class="{ 'advanced-search__select--placeholder': !formValues[field.param] }"
            >
              <option
                v-for="option in field.options"
                :key="option.value || 'all'"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <ChevronDown
              class="advanced-search__chevron"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="advanced-search__submit"
      >
        Rechercher
        <Search
          class="size-4"
          aria-hidden="true"
        />
      </button>
    </form>
  </div>
</template>

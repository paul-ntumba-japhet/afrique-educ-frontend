<script setup lang="ts">
import { ChevronDown, Search } from 'lucide-vue-next'
import {
  locationAvailabilityOptions,
  locationDurationOptions,
  locationTypeOptions,
} from '@/data/location-page'

const query = ref('')
const type = ref('all')
const availability = ref('all')
const duration = ref('all')

const emit = defineEmits<{
  search: [payload: {
    query: string
    type: string
    availability: string
    duration: string
  }]
}>()

function onSubmit() {
  emit('search', {
    query: query.value.trim(),
    type: type.value,
    availability: availability.value,
    duration: duration.value,
  })
}
</script>

<template>
  <section
    class="location-search"
    aria-label="Recherche de livres à louer ou emprunter"
  >
    <div class="page-container">
      <form
        class="location-search__bar"
        @submit.prevent="onSubmit"
      >
        <label class="location-search__field location-search__field--query">
          <span class="sr-only">Rechercher</span>
          <Search
            class="location-search__icon"
            :stroke-width="1.75"
            aria-hidden="true"
          />
          <input
            v-model="query"
            type="search"
            name="q"
            placeholder="Rechercher un livre, un auteur, un ISBN..."
            autocomplete="off"
          >
        </label>

        <label class="location-search__field">
          <span class="sr-only">Type</span>
          <select v-model="type">
            <option
              v-for="option in locationTypeOptions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="location-search__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </label>

        <label class="location-search__field">
          <span class="sr-only">Disponibilité</span>
          <select v-model="availability">
            <option
              v-for="option in locationAvailabilityOptions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="location-search__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </label>

        <label class="location-search__field">
          <span class="sr-only">Durée</span>
          <select v-model="duration">
            <option
              v-for="option in locationDurationOptions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="location-search__chevron"
            :stroke-width="1.75"
            aria-hidden="true"
          />
        </label>

        <button
          type="submit"
          class="location-btn location-btn--accent"
        >
          Rechercher
        </button>
      </form>
    </div>
  </section>
</template>

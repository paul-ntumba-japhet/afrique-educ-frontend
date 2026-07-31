<script setup lang="ts">
import { ArrowLeft, Clock3, Save, ShieldCheck, UserRound } from 'lucide-vue-next'
import { quoteValueProps } from '@/data/institutional-quote'

defineProps<{
  compact?: boolean
}>()

defineEmits<{
  saveDraft: []
}>()
</script>

<template>
  <header class="inst-quote-header">
    <div class="inst-quote-header__top">
      <NuxtLink
        to="/partenaires/bibliotheques/commandes"
        class="inst-quote-header__back"
      >
        <ArrowLeft
          class="size-3.5"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        Retour aux commandes
      </NuxtLink>

      <button
        type="button"
        class="inst-quote-header__draft"
        @click="$emit('saveDraft')"
      >
        <Save
          class="size-3.5"
          :stroke-width="1.5"
          aria-hidden="true"
        />
        Enregistrer le brouillon
      </button>
    </div>

    <template v-if="!compact">
      <h1 class="inst-quote-header__title">
        Demander un devis institutionnel
      </h1>
      <p class="inst-quote-header__lead">
        Décrivez votre besoin en volumes : nous préparons une proposition adaptée à votre organisation, sans engagement.
      </p>

      <ul class="inst-quote-header__props">
        <li
          v-for="item in quoteValueProps"
          :key="item.id"
        >
          <span
            class="inst-quote-header__prop-icon"
            aria-hidden="true"
          >
            <Clock3
              v-if="item.id === 'response'"
              class="size-4"
              :stroke-width="1.5"
            />
            <ShieldCheck
              v-else-if="item.id === 'free'"
              class="size-4"
              :stroke-width="1.5"
            />
            <UserRound
              v-else
              class="size-4"
              :stroke-width="1.5"
            />
          </span>
          {{ item.label }}
        </li>
      </ul>
    </template>
  </header>
</template>

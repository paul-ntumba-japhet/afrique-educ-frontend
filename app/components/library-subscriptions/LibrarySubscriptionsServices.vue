<script setup lang="ts">
import { BookText, Globe, Headphones, Megaphone, PenLine, Printer, ScanSearch, ShieldCheck, SpellCheck } from 'lucide-vue-next'

const services = [
  { id: 'isbn', label: 'ISBN', icon: ShieldCheck },
  { id: 'correction', label: 'Correction', icon: SpellCheck },
  { id: 'traduction', label: 'Traduction', icon: Globe },
  { id: 'couverture', label: 'Couverture', icon: BookText },
  { id: 'audio', label: 'Audiobook', icon: Headphones },
  { id: 'print', label: 'Impression', icon: Printer },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'ads', label: 'Publicité', icon: ScanSearch },
  { id: 'author', label: 'Coaching auteur', icon: PenLine },
] as const
</script>

<template>
  <section
    class="library-subscriptions-services"
    aria-labelledby="library-subscriptions-services-heading"
  >
    <div class="page-container">
      <div class="library-subscriptions-section-head">
        <p class="library-subscriptions-section-head__eyebrow">
          Services à la carte
        </p>
        <h2 id="library-subscriptions-services-heading">
          Ajoutez uniquement ce dont vous avez besoin
        </h2>
      </div>

      <div class="library-subscriptions-services__grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="library-subscriptions-service"
        >
          <span class="library-subscriptions-service__icon">
            <component :is="service.icon" class="size-5" :stroke-width="1.25" aria-hidden="true" />
          </span>
          <span>{{ service.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

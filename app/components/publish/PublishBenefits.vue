<script setup lang="ts">
import type { PublishBenefitIcon } from '@/data/publish-page'
import { publishBenefits } from '@/data/publish-page'
import {
  Coins,
  FileCheck,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-vue-next'

const benefitIcons = {
  'file-check': FileCheck,
  globe: Globe,
  layers: Layers,
  coins: Coins,
  shield: ShieldCheck,
  sparkles: Sparkles,
} as const

function getBenefitIcon(icon: PublishBenefitIcon) {
  return benefitIcons[icon]
}
</script>

<template>
  <section
    class="page-container publish-benefits publish-section"
    aria-label="Avantages de la plateforme"
  >
    <div class="publish-benefits__inner">
      <ul class="publish-benefits__grid">
        <li
          v-for="benefit in publishBenefits"
          :key="benefit.id"
          class="publish-benefits__item"
        >
          <div
            class="publish-benefits__icon"
            :class="`publish-benefits__icon--${benefit.tone}`"
          >
            <component
              :is="getBenefitIcon(benefit.icon)"
              class="publish-benefits__icon-svg"
              aria-hidden="true"
            />
          </div>

          <h3 class="publish-benefits__item-title">
            {{ benefit.title }}
          </h3>

          <p class="publish-benefits__item-description">
            {{ benefit.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

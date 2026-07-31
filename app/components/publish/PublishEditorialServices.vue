<script setup lang="ts">
import type { EditorialServiceIcon } from '@/data/publish-page'
import { publishEditorialServicesSection } from '@/data/publish-page'
import {
  Barcode,
  Eye,
  LayoutTemplate,
  PencilLine,
  Printer,
  Search,
} from 'lucide-vue-next'

const section = publishEditorialServicesSection

const serviceIcons = {
  search: Search,
  pencil: PencilLine,
  layout: LayoutTemplate,
  eye: Eye,
  barcode: Barcode,
  printer: Printer,
} as const

function getServiceIcon(icon: EditorialServiceIcon) {
  return serviceIcons[icon]
}
</script>

<template>
  <article
    class="publish-ai-services__panel publish-editorial-services"
    aria-labelledby="publish-editorial-services-heading"
  >
    <h2
      id="publish-editorial-services-heading"
      class="publish-ai-services__panel-title"
    >
      {{ section.title }}
    </h2>

    <ul class="publish-editorial-services__grid">
      <li
        v-for="service in section.services"
        :key="service.id"
        class="publish-editorial-services__item"
      >
        <article class="publish-editorial-services__card">
          <div
            class="publish-editorial-services__icon"
            :class="`publish-editorial-services__icon--${service.tone}`"
          >
            <component
              :is="getServiceIcon(service.icon)"
              class="publish-editorial-services__icon-svg"
              aria-hidden="true"
            />
          </div>

          <h3 class="publish-editorial-services__card-title">
            {{ service.title }}
          </h3>

          <p class="publish-editorial-services__card-description">
            {{ service.description }}
          </p>
        </article>
      </li>
    </ul>
  </article>
</template>

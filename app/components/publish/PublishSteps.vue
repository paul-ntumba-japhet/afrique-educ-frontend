<script setup lang="ts">
import type { PublishStepIcon } from '@/data/publish-page'
import { publishStepsSection } from '@/data/publish-page'
import {
  CloudUpload,
  FileText,
  PencilLine,
  ShieldCheck,
  Upload,
} from 'lucide-vue-next'

const section = publishStepsSection

const stepIcons = {
  upload: Upload,
  edit: PencilLine,
  'file-text': FileText,
  'shield-check': ShieldCheck,
  'cloud-upload': CloudUpload,
} as const

function getStepIcon(icon: PublishStepIcon) {
  return stepIcons[icon]
}
</script>

<template>
  <section
    id="etapes"
    class="publish-steps publish-section"
    aria-labelledby="publish-steps-heading"
  >
    <div class="page-container publish-steps__inner">
      <header class="publish-steps__header">
        <h2
          id="publish-steps-heading"
          class="publish-steps__title"
        >
          {{ section.title }}
        </h2>
        <p class="publish-steps__lead">
          {{ section.lead }}
        </p>
      </header>

      <div class="publish-steps__flow">
        <div
          class="publish-steps__timeline"
          aria-hidden="true"
        >
          <div class="publish-steps__timeline-track" />

          <ol class="publish-steps__timeline-markers">
            <li
              v-for="step in section.steps"
              :key="`marker-${step.id}`"
              class="publish-steps__timeline-marker"
              :class="`publish-steps__timeline-marker--${step.tone}`"
            >
              <span class="publish-steps__timeline-marker-dot">
                {{ step.number }}
              </span>
            </li>
          </ol>
        </div>

        <ol class="publish-steps__cards">
          <li
            v-for="step in section.steps"
            :key="step.id"
            class="publish-steps__card-wrap"
          >
            <article
              class="publish-steps__card"
              :class="`publish-steps__card--${step.tone}`"
            >
              <header class="publish-steps__card-header">
                <div
                  class="publish-steps__card-icon"
                  :class="`publish-steps__card-icon--${step.tone}`"
                >
                  <component
                    :is="getStepIcon(step.icon)"
                    class="publish-steps__card-icon-svg"
                    aria-hidden="true"
                  />
                </div>

                <div class="publish-steps__card-heading">
                  <span class="publish-steps__card-index">
                    Étape {{ step.number }}
                  </span>
                  <h3 class="publish-steps__card-title">
                    {{ step.title }}
                  </h3>
                </div>
              </header>

              <div class="publish-steps__card-body">
                <p class="publish-steps__card-description">
                  {{ step.description }}
                </p>

                <ul
                  v-if="step.details?.length"
                  class="publish-steps__card-list"
                >
                  <li
                    v-for="detail in step.details"
                    :key="detail"
                  >
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

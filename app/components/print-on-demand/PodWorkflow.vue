<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { podWorkflow } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-workflow"
    aria-labelledby="pod-workflow-heading"
  >
    <div class="page-container">
      <div class="pod-section-head pod-section-head--center">
        <h2 id="pod-workflow-heading">
          Imprimez uniquement lorsqu’un lecteur commande
        </h2>
        <p>
          De la commande à la livraison, chaque étape est déclenchée à la demande —
          sans stock immobilisé, avec un suivi transparent pour l’auteur.
        </p>
      </div>

      <ol class="pod-workflow__row">
        <li
          v-for="(step, index) in podWorkflow"
          :key="step.id"
          class="pod-workflow__item"
        >
          <span class="pod-workflow__dot">{{ index + 1 }}</span>
          <span>{{ step.label }}</span>
          <ArrowRight
            v-if="index < podWorkflow.length - 1"
            class="pod-workflow__arrow size-4"
            :stroke-width="1.5"
            aria-hidden="true"
          />
        </li>
      </ol>

      <p class="pod-workflow__note">
        Disponible en RDC et dans plusieurs pays grâce à notre réseau de partenaires.
      </p>
    </div>
  </section>
</template>

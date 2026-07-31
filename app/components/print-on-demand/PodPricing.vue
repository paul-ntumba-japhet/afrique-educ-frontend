<script setup lang="ts">
import { Info, Percent } from 'lucide-vue-next'
import { podExtraServices, podPricingTiers } from '@/data/print-on-demand'
</script>

<template>
  <section
    class="pod-pricing"
    aria-labelledby="pod-pricing-heading"
  >
    <div class="page-container pod-pricing__grid">
      <div>
        <div class="pod-section-head">
          <h2 id="pod-pricing-heading">
            Tarifs dégressifs
          </h2>
        </div>

        <div class="pod-pricing__table-wrap">
          <table class="pod-pricing__table">
            <thead>
              <tr>
                <th>Quantité</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="tier in podPricingTiers"
                :key="tier.qty"
              >
                <td>{{ tier.qty }}</td>
                <td>{{ tier.use }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul class="pod-pricing__notes">
          <li>
            <Info class="size-4" :stroke-width="1.5" aria-hidden="true" />
            Le prix final dépend de la configuration exacte de votre livre.
          </li>
          <li>
            <Percent class="size-4" :stroke-width="1.5" aria-hidden="true" />
            Remises progressives dès 25 exemplaires.
          </li>
        </ul>
      </div>

      <div>
        <div class="pod-section-head">
          <h2>
            Services complémentaires
          </h2>
        </div>

        <div class="pod-pricing__services">
          <article
            v-for="service in podExtraServices"
            :key="service.id"
            class="pod-pricing__service"
          >
            <span class="pod-icon-badge">
              <component
                :is="service.icon"
                class="size-5"
                :stroke-width="1.25"
                aria-hidden="true"
              />
            </span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

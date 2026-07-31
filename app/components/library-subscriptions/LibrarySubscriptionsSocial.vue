<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { librarySubscriptionsFaq, librarySubscriptionsTestimonials } from '@/data/library-subscriptions'

const openItemId = ref<string | null>(librarySubscriptionsFaq[0]?.id ?? null)

function toggleItem(id: string) {
  openItemId.value = openItemId.value === id ? null : id
}
</script>

<template>
  <section
    class="library-subscriptions-social"
    aria-labelledby="library-subscriptions-social-heading"
  >
    <div class="page-container library-subscriptions-social__grid">
      <div>
        <div class="library-subscriptions-section-head">
          <p class="library-subscriptions-section-head__eyebrow">
            Témoignages
          </p>
          <h2 id="library-subscriptions-social-heading">
            Ils nous font confiance
          </h2>
        </div>

        <div class="library-subscriptions-testimonials">
          <article
            v-for="item in librarySubscriptionsTestimonials"
            :key="item.id"
            class="library-subscriptions-testimonial"
          >
            <p class="library-subscriptions-testimonial__quote">
              {{ item.quote }}
            </p>
            <strong>{{ item.name }}</strong>
            <span>{{ item.role }}</span>
          </article>
        </div>
      </div>

      <div>
        <div class="library-subscriptions-section-head">
          <p class="library-subscriptions-section-head__eyebrow">
            FAQ
          </p>
          <h2>
            Questions fréquentes
          </h2>
        </div>

        <div class="library-subscriptions-faq">
          <div
            v-for="item in librarySubscriptionsFaq"
            :key="item.id"
            class="library-subscriptions-faq__item"
            :class="{ 'library-subscriptions-faq__item--open': openItemId === item.id }"
          >
            <h3>
              <button
                type="button"
                class="library-subscriptions-faq__trigger"
                :aria-expanded="openItemId === item.id"
                :aria-controls="`library-subscriptions-faq-panel-${item.id}`"
                @click="toggleItem(item.id)"
              >
                <span>{{ item.question }}</span>
                <Plus class="library-subscriptions-faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              :id="`library-subscriptions-faq-panel-${item.id}`"
              class="library-subscriptions-faq__panel"
              role="region"
              :aria-hidden="openItemId !== item.id"
            >
              <div class="library-subscriptions-faq__panel-inner">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

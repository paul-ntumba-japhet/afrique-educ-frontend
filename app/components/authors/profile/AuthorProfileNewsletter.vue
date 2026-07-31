<script setup lang="ts">
import { Mail } from 'lucide-vue-next'

const email = ref('')
const submitted = ref(false)

function onSubmit() {
  if (!email.value.trim())
    return
  submitted.value = true
}
</script>

<template>
  <section
    id="newsletter"
    class="author-profile-newsletter"
    aria-labelledby="author-newsletter-heading"
  >
    <div class="author-profile-newsletter__inner">
      <div class="author-profile-newsletter__copy">
        <Mail
          class="author-profile-newsletter__icon"
          aria-hidden="true"
        />
        <div>
          <h2
            id="author-newsletter-heading"
            class="author-profile-newsletter__title"
          >
            Ne manquez aucune sortie
          </h2>
          <p class="author-profile-newsletter__text">
            Recevez les nouveautés, des contenus exclusifs et les prochaines dates de conférence.
          </p>
        </div>
      </div>

      <form
        class="author-profile-newsletter__form"
        @submit.prevent="onSubmit"
      >
        <label class="sr-only" for="author-newsletter-email">Adresse e-mail</label>
        <input
          id="author-newsletter-email"
          v-model="email"
          type="email"
          required
          placeholder="Votre adresse e-mail"
          class="author-profile-newsletter__input"
          autocomplete="email"
        >
        <button
          type="submit"
          class="author-profile-newsletter__btn"
        >
          {{ submitted ? 'Inscrit ✓' : 'S\'abonner' }}
        </button>
      </form>
    </div>
  </section>
</template>

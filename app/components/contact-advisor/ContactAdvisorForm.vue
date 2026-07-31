<script setup lang="ts">
import { Send, ShieldCheck } from 'lucide-vue-next'
import { contactAdvisorFormFields } from '@/data/contact-advisor'

const form = reactive({
  name: '',
  organization: '',
  role: '',
  phone: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const submitting = ref(false)

function handleSubmit() {
  if (submitting.value)
    return
  submitting.value = true
  window.setTimeout(() => {
    submitted.value = true
    submitting.value = false
  }, 450)
}
</script>

<template>
  <article
    id="contact-form"
    class="contact-advisor-form"
    aria-labelledby="contact-advisor-form-heading"
  >
    <h2 id="contact-advisor-form-heading">
      Envoyez-nous votre demande
    </h2>

    <p
      v-if="submitted"
      class="contact-advisor-form__success"
      role="status"
    >
      Merci. Votre demande a bien été enregistrée. Un conseiller vous répondra sous 24 heures ouvrées.
    </p>

    <form
      v-else
      class="contact-advisor-form__body"
      @submit.prevent="handleSubmit"
    >
      <div class="contact-advisor-form__grid">
        <label
          v-for="field in contactAdvisorFormFields"
          :key="field.id"
          class="contact-advisor-form__field"
          :class="{ 'contact-advisor-form__field--full': field.id === 'email' }"
        >
          <span>
            {{ field.label }}
            <abbr
              v-if="field.required"
              title="obligatoire"
            >*</abbr>
          </span>
          <input
            v-model="form[field.id as keyof typeof form]"
            :type="field.type"
            :name="field.id"
            :required="field.required"
            :autocomplete="field.autocomplete"
            :placeholder="field.label"
          >
        </label>

        <label class="contact-advisor-form__field contact-advisor-form__field--full">
          <span>
            Votre demande
            <abbr title="obligatoire">*</abbr>
          </span>
          <textarea
            v-model="form.message"
            name="message"
            rows="5"
            required
            placeholder="Décrivez votre besoin, volumes estimés, délais…"
          />
        </label>
      </div>

      <button
        type="submit"
        class="contact-advisor-form__submit"
        :disabled="submitting"
      >
        <Send
          class="size-4"
          :stroke-width="1.75"
          aria-hidden="true"
        />
        {{ submitting ? 'Envoi…' : 'Envoyer ma demande' }}
      </button>

      <p class="contact-advisor-form__privacy">
        <ShieldCheck
          class="size-3.5"
          :stroke-width="1.75"
          aria-hidden="true"
        />
        Vos informations restent confidentielles et ne sont utilisées que pour traiter votre demande.
      </p>
    </form>
  </article>
</template>

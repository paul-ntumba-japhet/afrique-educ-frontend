<script setup lang="ts">
import { partnershipProposal } from '@/data/partenariat'

const form = reactive({
  organization: '',
  contactName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  organizationType: '',
  partnershipType: '',
  presentation: '',
  objectives: '',
  privacy: false,
})

const fileName = ref('')
const submitted = ref(false)
const submitting = ref(false)

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  fileName.value = file?.name ?? ''
}

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
  <section
    id="partenariat-proposition"
    class="partnership-proposal"
    aria-labelledby="partnership-proposal-heading"
  >
    <div class="page-container partnership-proposal__layout">
      <article class="partnership-proposal__form-wrap">
        <h2 id="partnership-proposal-heading">
          {{ partnershipProposal.title }}
        </h2>

        <p
          v-if="submitted"
          class="partnership-proposal__success"
          role="status"
        >
          Merci. Votre proposition a bien été enregistrée. Notre équipe l’étudie et vous recontactera rapidement.
        </p>

        <form
          v-else
          class="partnership-proposal__form"
          @submit.prevent="handleSubmit"
        >
          <div class="partnership-proposal__grid">
            <label class="partnership-proposal__field">
              <span>Nom de l’organisation <abbr title="obligatoire">*</abbr></span>
              <input
                v-model="form.organization"
                type="text"
                name="organization"
                required
                autocomplete="organization"
              >
            </label>

            <label class="partnership-proposal__field">
              <span>Nom et prénom(s) responsable <abbr title="obligatoire">*</abbr></span>
              <input
                v-model="form.contactName"
                type="text"
                name="contactName"
                required
                autocomplete="name"
              >
            </label>

            <label class="partnership-proposal__field">
              <span>Adresse e-mail professionnelle <abbr title="obligatoire">*</abbr></span>
              <input
                v-model="form.email"
                type="email"
                name="email"
                required
                autocomplete="email"
              >
            </label>

            <label class="partnership-proposal__field">
              <span>Numéro de téléphone <abbr title="obligatoire">*</abbr></span>
              <input
                v-model="form.phone"
                type="tel"
                name="phone"
                required
                autocomplete="tel"
              >
            </label>

            <label class="partnership-proposal__field">
              <span>Pays <abbr title="obligatoire">*</abbr></span>
              <select
                v-model="form.country"
                name="country"
                required
              >
                <option
                  disabled
                  value=""
                >
                  Sélectionner un pays
                </option>
                <option
                  v-for="country in partnershipProposal.countries"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </label>

            <label class="partnership-proposal__field">
              <span>Ville <abbr title="obligatoire">*</abbr></span>
              <input
                v-model="form.city"
                type="text"
                name="city"
                required
                autocomplete="address-level2"
              >
            </label>

            <label class="partnership-proposal__field">
              <span>Type d’organisation <abbr title="obligatoire">*</abbr></span>
              <select
                v-model="form.organizationType"
                name="organizationType"
                required
              >
                <option
                  disabled
                  value=""
                >
                  Sélectionner
                </option>
                <option
                  v-for="type in partnershipProposal.organizationTypes"
                  :key="type"
                  :value="type"
                >
                  {{ type }}
                </option>
              </select>
            </label>

            <label class="partnership-proposal__field">
              <span>Type de partenariat recherché <abbr title="obligatoire">*</abbr></span>
              <select
                v-model="form.partnershipType"
                name="partnershipType"
                required
              >
                <option
                  disabled
                  value=""
                >
                  Sélectionner
                </option>
                <option
                  v-for="type in partnershipProposal.partnershipTypes"
                  :key="type"
                  :value="type"
                >
                  {{ type }}
                </option>
              </select>
            </label>

            <label class="partnership-proposal__field partnership-proposal__field--full">
              <span>Présentation de l’organisation <abbr title="obligatoire">*</abbr></span>
              <textarea
                v-model="form.presentation"
                name="presentation"
                rows="4"
                required
              />
            </label>

            <label class="partnership-proposal__field partnership-proposal__field--full">
              <span>Objectifs de la collaboration <abbr title="obligatoire">*</abbr></span>
              <textarea
                v-model="form.objectives"
                name="objectives"
                rows="4"
                required
              />
            </label>

            <div class="partnership-proposal__field partnership-proposal__field--full partnership-proposal__file">
              <span>Document de présentation (facultatif)</span>
              <div class="partnership-proposal__file-row">
                <label class="partnership-proposal__file-btn">
                  Choisir un fichier
                  <input
                    type="file"
                    name="document"
                    accept=".pdf,.ppt,.pptx,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                    @change="onFileChange"
                  >
                </label>
                <span class="partnership-proposal__file-meta">
                  {{ fileName || partnershipProposal.fileHint }}
                </span>
              </div>
            </div>
          </div>

          <label class="partnership-proposal__privacy">
            <input
              v-model="form.privacy"
              type="checkbox"
              name="privacy"
              required
            >
            <span>
              {{ partnershipProposal.privacyLabel }}
              <abbr title="obligatoire">*</abbr>
              —
              <NuxtLink :to="partnershipProposal.privacyHref">
                Politique de confidentialité
              </NuxtLink>
            </span>
          </label>

          <button
            type="submit"
            class="partnership-proposal__submit"
            :disabled="submitting"
          >
            {{ partnershipProposal.submitLabel }}
          </button>
        </form>
      </article>

      <aside
        class="partnership-proposal__aside"
        aria-labelledby="partnership-proposal-aside-heading"
      >
        <h3 id="partnership-proposal-aside-heading">
          {{ partnershipProposal.aside.title }}
        </h3>

        <ul class="partnership-proposal__aside-list">
          <li
            v-for="item in partnershipProposal.aside.items"
            :key="item.id"
          >
            <span class="partnership-proposal__aside-icon">
              <component
                :is="item.icon"
                class="size-5"
                :stroke-width="1.35"
                aria-hidden="true"
              />
            </span>
            <span>{{ item.label }}</span>
          </li>
        </ul>

        <NuxtLink
          :to="partnershipProposal.aside.ctaHref"
          class="partnership-proposal__aside-btn"
        >
          {{ partnershipProposal.aside.ctaLabel }}
        </NuxtLink>
      </aside>
    </div>
  </section>
</template>

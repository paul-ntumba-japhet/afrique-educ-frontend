<script setup lang="ts">
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-vue-next'
import {
  footerColumns,
  footerContact,
  footerSocialLinks,
} from '@/data/footer'

const year = new Date().getFullYear()
const newsletterEmail = ref('')
const newsletterStatus = ref<'idle' | 'sent'>('idle')

const socialIcons = {
  linkedin: Linkedin,
  x: null,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
} as const

function onNewsletterSubmit() {
  if (!newsletterEmail.value.trim()) return
  newsletterStatus.value = 'sent'
  newsletterEmail.value = ''
}
</script>

<template>
  <footer class="site-footer" aria-labelledby="site-footer-brand">
    <div class="page-container site-footer__inner">
      <div class="site-footer__brand-block">
        <p class="site-footer__eyebrow">
          Plateforme éditoriale
        </p>
        <NuxtLink
          id="site-footer-brand"
          to="/"
          class="site-footer__brand"
        >
          <span class="site-footer__brand-accent">Afric</span>-Educ
        </NuxtLink>
        <p class="site-footer__tagline">
          {{ footerContact.tagline }}
        </p>

        <div class="site-footer__cta-row">
          <NuxtLink
            to="/inscription"
            class="site-footer__cta site-footer__cta--primary"
          >
            Créer un compte
            <ArrowRight class="size-4" :stroke-width="1.5" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink
            to="/partenaires/services/contact"
            class="site-footer__cta site-footer__cta--ghost"
          >
            Contacter un conseiller
          </NuxtLink>
        </div>
      </div>

      <div class="site-footer__grid">
        <FooterNav :columns="footerColumns" />

        <div class="site-footer__aside">
          <form
            class="site-footer__newsletter"
            @submit.prevent="onNewsletterSubmit"
          >
            <p class="site-footer__aside-title">
              Newsletter
            </p>
            <p class="site-footer__aside-text">
              Nouveautés, auteurs et offres — une fois par mois.
            </p>
            <label class="sr-only" for="site-footer-newsletter-email">
              Adresse e-mail
            </label>
            <div class="site-footer__newsletter-row">
              <input
                id="site-footer-newsletter-email"
                v-model="newsletterEmail"
                type="email"
                name="email"
                autocomplete="email"
                required
                placeholder="votre@email.com"
                class="site-footer__newsletter-input"
              >
              <button
                type="submit"
                class="site-footer__newsletter-btn"
              >
                S’inscrire
              </button>
            </div>
            <p
              v-if="newsletterStatus === 'sent'"
              class="site-footer__newsletter-status"
              role="status"
            >
              Merci — inscription enregistrée.
            </p>
          </form>

          <div class="site-footer__contact">
            <p class="site-footer__aside-title">
              Nous écrire
            </p>
            <a
              :href="`mailto:${footerContact.email}`"
              class="site-footer__mail"
            >
              <Mail class="size-4" :stroke-width="1.25" aria-hidden="true" />
              {{ footerContact.email }}
            </a>
            <a
              :href="`mailto:${footerContact.support}`"
              class="site-footer__mail site-footer__mail--muted"
            >
              {{ footerContact.support }}
            </a>
          </div>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copy">
          © {{ year }} Afric-Educ. Tous droits réservés.
        </p>

        <ul class="site-footer__social" aria-label="Réseaux sociaux">
          <li
            v-for="item in footerSocialLinks"
            :key="item.id"
          >
            <a
              :href="item.href"
              class="site-footer__social-link"
              :aria-label="item.label"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component
                :is="socialIcons[item.id as keyof typeof socialIcons]"
                v-if="item.id !== 'x'"
                class="size-4"
                :stroke-width="1.25"
                aria-hidden="true"
              />
              <span
                v-else
                class="site-footer__social-x"
                aria-hidden="true"
              >𝕏</span>
              <span class="sr-only">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

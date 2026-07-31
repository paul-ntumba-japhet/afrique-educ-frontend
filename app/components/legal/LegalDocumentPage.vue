<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type {
  LegalPageMeta,
  LegalRelatedLink,
  LegalSection,
} from '@/data/legal'

const props = defineProps<{
  meta: LegalPageMeta
  sections: LegalSection[]
  relatedLinks: LegalRelatedLink[]
  headingId?: string
}>()

const headingId = computed(() => props.headingId ?? 'legal-document-heading')
const activeId = ref(props.sections[0]?.id ?? '')
let sectionObserver: IntersectionObserver | null = null

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  activeId.value = id
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target?.id)
        activeId.value = visible.target.id
    },
    {
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0.1, 0.35, 0.6],
    },
  )

  for (const section of props.sections) {
    const el = document.getElementById(section.id)
    if (el) sectionObserver.observe(el)
  }
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  sectionObserver = null
})
</script>

<template>
  <div class="legal-page">
    <AppHeader />

    <main class="legal-page__main">
      <section
        class="legal-page__hero"
        :aria-labelledby="headingId"
      >
        <div class="page-container">
          <div class="legal-page__hero-card">
            <p class="legal-page__eyebrow">
              Documents légaux
            </p>
            <h1 :id="headingId">
              {{ meta.title }}
            </h1>
            <p class="legal-page__lead">
              {{ meta.description }}
            </p>
            <dl class="legal-page__meta">
              <div>
                <dt>Entrée en vigueur</dt>
                <dd>{{ meta.effectiveAt }}</dd>
              </div>
              <div>
                <dt>Dernière mise à jour</dt>
                <dd>{{ meta.updatedAt }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section class="legal-page__body">
        <div class="page-container legal-page__layout">
          <aside
            class="legal-page__toc"
            aria-label="Sommaire"
          >
            <p class="legal-page__toc-title">
              Sommaire
            </p>
            <nav>
              <ul>
                <li
                  v-for="section in sections"
                  :key="section.id"
                >
                  <a
                    :href="`#${section.id}`"
                    class="legal-page__toc-link"
                    :class="{ 'legal-page__toc-link--active': activeId === section.id }"
                    @click.prevent="scrollToSection(section.id)"
                  >
                    {{ section.title }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <article class="legal-page__article">
            <section
              v-for="section in sections"
              :id="section.id"
              :key="section.id"
              class="legal-page__section"
            >
              <h2>{{ section.title }}</h2>
              <p
                v-for="(paragraph, index) in section.paragraphs"
                :key="`${section.id}-p-${index}`"
              >
                {{ paragraph }}
              </p>
              <ul v-if="section.bullets?.length">
                <li
                  v-for="(bullet, index) in section.bullets"
                  :key="`${section.id}-b-${index}`"
                >
                  {{ bullet }}
                </li>
              </ul>
            </section>

            <aside
              class="legal-page__related"
              aria-label="Documents associés"
            >
              <h2>Documents associés</h2>
              <ul>
                <li
                  v-for="link in relatedLinks"
                  :key="link.href"
                >
                  <NuxtLink
                    :to="link.href"
                    class="legal-page__related-link"
                  >
                    {{ link.label }}
                    <ArrowUpRight
                      class="size-4"
                      :stroke-width="1.5"
                      aria-hidden="true"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </aside>
          </article>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

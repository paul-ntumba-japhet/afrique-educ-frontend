<script setup lang="ts">
import type { MegaMenuConfig } from '@/config/navigation'
import { getFeaturedHref } from '@/config/navigation'
import type { Component } from 'vue'
import mockupBook2 from '~/assets/images/mockups/mockup_book_2.png'
import mockupBook4 from '~/assets/images/mockups/mockup_book_4.png'
import micheeRemove from '~/assets/images/miche/michee_remove.png'
import libraryPhoto from '~/assets/images/library.jpg'
import { BookMarked, Handshake, LibraryBig, Printer } from 'lucide-vue-next'

const props = defineProps<{
  menu: MegaMenuConfig
}>()

const emit = defineEmits<{
  close: []
}>()

const featuredHref = computed(() => getFeaturedHref(props.menu))

const featuredMedia = computed(() =>
  props.menu.id === 'auteurs'
    ? micheeRemove
    : props.menu.id === 'partenaires'
      ? libraryPhoto
    : props.menu.id === 'categories'
      ? mockupBook4
      : mockupBook2,
)

const featuredMediaAlt = computed(() =>
  props.menu.id === 'auteurs'
    ? 'Portrait de l’auteur Michee'
    : props.menu.id === 'partenaires'
      ? 'Bibliothèque partenaire'
    : 'Mockup livre premium',
)

const partenairesColumnIcons: Record<string, Component> = {
  Bibliothèques: LibraryBig,
  Librairies: BookMarked,
  Imprimeries: Printer,
  'Services & support': Handshake,
}

function getColumnIcon(columnTitle: string) {
  if (props.menu.id !== 'partenaires')
    return null
  return partenairesColumnIcons[columnTitle] ?? null
}
</script>

<template>
  <div
    class="mega-menu-panel relative z-[110] pt-0"
    role="menu"
  >
    <div class="page-container mega-menu-panel__wrap">
      <div class="mega-menu-panel__frame">
        <div
          class="mega-menu-panel__layout"
          :class="menu.featured ? 'mega-menu-panel__layout--featured' : ''"
        >
          <!-- Colonnes -->
          <div
            class="mega-menu-panel__columns"
            :class="menu.columns.length > 4 ? 'mega-menu-panel__columns--5' : ''"
          >
            <div
              v-for="column in menu.columns"
              :key="column.title"
              class="mega-menu-panel__column"
            >
              <NuxtLink
                v-if="column.href"
                :to="column.href"
                class="mega-menu-panel__column-title"
                @click="emit('close')"
              >
                <component
                  :is="getColumnIcon(column.title)"
                  v-if="getColumnIcon(column.title)"
                  class="mega-menu-panel__column-icon"
                  aria-hidden="true"
                />
                {{ column.title }}
              </NuxtLink>
              <p
                v-else
                class="mega-menu-panel__column-title"
              >
                <component
                  :is="getColumnIcon(column.title)"
                  v-if="getColumnIcon(column.title)"
                  class="mega-menu-panel__column-icon"
                  aria-hidden="true"
                />
                {{ column.title }}
              </p>

              <ul
                class="mega-menu-panel__links"
                role="none"
              >
                <li
                  v-for="link in column.links"
                  :key="link.href"
                  role="none"
                >
                  <NuxtLink
                    :to="link.href"
                    class="mega-menu-panel__link"
                    role="menuitem"
                    @click="emit('close')"
                  >
                    <span class="block">{{ link.label }}</span>
                    <span
                      v-if="link.description"
                      class="mega-menu-panel__link-description"
                    >
                      {{ link.description }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- Carte mise en avant -->
          <aside
            v-if="menu.featured"
            class="mega-menu-panel__featured shrink-0 lg:w-[17.5rem] xl:w-80"
          >
            <NuxtLink
              :to="featuredHref"
              class="mega-menu-panel__featured-card group/featured flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300"
              @click="emit('close')"
            >
              <div
                class="mega-menu-panel__featured-media relative aspect-[16/10] overflow-hidden"
              >
                <div class="absolute inset-0 flex items-center justify-center p-2">
                  <img
                    :src="featuredMedia"
                    :alt="featuredMediaAlt"
                    class="mega-menu-panel__featured-image block max-h-full w-auto max-w-full scale-105 object-contain"
                    loading="lazy"
                    decoding="async"
                  >
                </div>
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-30"
                  aria-hidden="true"
                />
                <div
                  class="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-soft-gold/20 blur-2xl transition-opacity duration-300 group-hover/featured:opacity-100"
                  aria-hidden="true"
                />
                <div
                  class="pointer-events-none absolute -bottom-6 -left-6 size-24 rounded-full bg-ai-violet/10 blur-2xl"
                  aria-hidden="true"
                />
                <div class="absolute inset-0 flex items-end p-5">
                  <span class="mega-menu-panel__featured-badge">
                    À la une
                  </span>
                </div>
              </div>

              <div class="mega-menu-panel__featured-body flex flex-1 flex-col">
                <h3 class="font-heading text-base font-semibold leading-snug tracking-tight">
                  {{ menu.featured.title }}
                </h3>
                <p class="mt-2 flex-1 text-[0.95rem] leading-relaxed">
                  {{ menu.featured.description }}
                </p>
                <span
                  class="mega-menu-panel__featured-cta mt-5"
                >
                  {{ menu.featured.cta ?? 'En savoir plus' }}
                </span>
              </div>
            </NuxtLink>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

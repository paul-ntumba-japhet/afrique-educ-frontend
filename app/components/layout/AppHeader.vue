<script setup lang="ts">
import {
  megaMenus,
  mainNavLinks,
  getFeaturedHref,
} from '@/config/navigation'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const activeMenuId = ref<string | null>(null)
const mobileOpen = ref(false)
const mobileExpanded = ref<string | null>(null)

const loginAction = { label: 'Log in', href: '/connexion' }
const signupAction = { label: 'Sign up', href: '/inscription' }

const activeMenu = computed(() =>
  megaMenus.find(m => m.id === activeMenuId.value) ?? null,
)

function openMenu(id: string) {
  activeMenuId.value = id
}

function closeMenu() {
  activeMenuId.value = null
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) {
    mobileExpanded.value = null
    closeMenu()
  }
}

function toggleMobileSection(id: string) {
  mobileExpanded.value = mobileExpanded.value === id ? null : id
}

watch(mobileOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <header class="relative sticky top-0 z-[100] bg-background/95 backdrop-blur-xl">
    <div class="page-container">
      <div class="header-bar">
        <NuxtLink
          to="/"
          class="header-bar__brand"
          aria-label="Afric-Educ — Accueil"
        >
          <span class="text-gradient-gold">Afric</span><span>-Educ</span>
        </NuxtLink>

        <div class="header-bar__desktop">
          <nav
            class="header-bar__nav"
            aria-label="Navigation principale"
          >
            <MegaMenu
              v-for="menu in megaMenus"
              :key="menu.id"
              :menu="menu"
              :open="activeMenuId === menu.id"
              @open="openMenu(menu.id)"
              @close="closeMenu"
            />
            <NuxtLink
              v-for="link in mainNavLinks"
              :key="link.href"
              :to="link.href"
              class="header-text-link"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <div
            class="header-bar__actions"
            aria-label="Actions utilisateur"
          >
            <CartNavButton />
            <span
              class="header-bar__divider"
              aria-hidden="true"
            />
            <NuxtLink
              :to="loginAction.href"
              :aria-label="loginAction.label"
              class="header-login-link"
            >
              {{ loginAction.label }}
            </NuxtLink>
            <NuxtLink
              :to="signupAction.href"
              :aria-label="signupAction.label"
              class="header-signup-btn"
            >
              {{ signupAction.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center gap-1 lg:hidden">
          <CartNavButton />
          <button
            type="button"
            class="inline-flex size-8 items-center justify-center text-[#94a3b8] transition-colors hover:text-[#f8fafc]"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-nav"
            :aria-label="mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            @click="toggleMobile"
          >
            <X v-if="mobileOpen" class="size-5" />
            <Menu v-else class="size-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Voile décoratif (desktop, sans fermeture au clic) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="activeMenu"
        class="pointer-events-none fixed inset-x-0 top-14 bottom-0 z-[90] hidden bg-foreground/[0.04] backdrop-blur-[1px] lg:top-16 lg:block"
        aria-hidden="true"
      />
    </Transition>

    <!-- Panneau mega menu -->
    <Transition
      enter-active-class="transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-0.5"
    >
      <div
        v-if="activeMenu"
        class="absolute inset-x-0 top-20 z-[110] mt-1 hidden lg:top-[5.5rem] lg:z-[130] lg:mt-0 lg:block"
        @mouseleave="closeMenu"
      >
        <MegaMenuPanel
          :menu="activeMenu"
          @close="closeMenu"
        />
      </div>
    </Transition>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        id="mobile-nav"
        class="fixed inset-0 top-14 z-40 flex flex-col bg-background lg:hidden"
      >
        <div class="flex-1 overflow-y-auto px-4 py-4">
          <div class="space-y-1">
            <div
              v-for="menu in megaMenus"
              :key="menu.id"
              class="overflow-hidden rounded-2xl border border-border/50 bg-card/50"
            >
              <div
                v-if="menu.href"
                class="flex items-center"
              >
                <NuxtLink
                  :to="menu.href"
                  class="flex-1 px-4 py-3.5 font-nav text-[0.8125rem] font-medium tracking-[0.01em] leading-none text-foreground transition-colors hover:text-foreground/90"
                  @click="mobileOpen = false"
                >
                  {{ menu.label }}
                </NuxtLink>
                <button
                  type="button"
                  class="inline-flex shrink-0 items-center justify-center px-4 py-3.5 text-foreground/70 transition-colors hover:text-foreground"
                  :aria-expanded="mobileExpanded === menu.id"
                  :aria-label="`Afficher le menu ${menu.label}`"
                  @click="toggleMobileSection(menu.id)"
                >
                  <ChevronDown
                    class="size-4 transition-transform duration-200"
                    :class="mobileExpanded === menu.id && 'rotate-180'"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <button
                v-else
                type="button"
                class="flex w-full px-4 py-3.5 text-left font-nav text-[0.8125rem] font-medium tracking-[0.01em] leading-none text-foreground transition-colors"
                :class="mobileExpanded === menu.id && 'text-foreground/90'"
                :aria-expanded="mobileExpanded === menu.id"
                @click="toggleMobileSection(menu.id)"
              >
                {{ menu.label }}
              </button>
              <div
                v-show="mobileExpanded === menu.id"
                class="border-t border-border/40 px-4 pb-5 pt-2"
              >
                <NuxtLink
                  v-if="menu.featured"
                  :to="getFeaturedHref(menu)"
                  class="mb-5 mt-3 block overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-soft-gold/10 to-muted/30 p-4 transition-colors hover:border-soft-gold/30"
                  @click="mobileOpen = false"
                >
                  <p class="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                    À la une
                  </p>
                  <p class="mt-1.5 font-heading text-sm font-semibold text-foreground">
                    {{ menu.featured.title }}
                  </p>
                  <p class="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {{ menu.featured.description }}
                  </p>
                  <span class="mt-3 text-xs font-medium text-foreground">
                    {{ menu.featured.cta ?? 'En savoir plus' }}
                  </span>
                </NuxtLink>

                <div
                  v-for="column in menu.columns"
                  :key="column.title"
                  class="mt-5 first:mt-0"
                >
                  <p class="font-nav text-[0.6875rem] font-semibold tracking-[0.06em] text-muted-foreground uppercase">
                    {{ column.title }}
                  </p>
                  <ul class="mt-2 space-y-0.5">
                    <li
                      v-for="link in column.links"
                      :key="link.href"
                    >
                      <NuxtLink
                        :to="link.href"
                        class="block rounded-lg px-2 py-2 font-nav text-[0.8125rem] font-normal tracking-[0.01em] leading-none text-foreground/75 transition-colors hover:bg-muted/50 hover:text-foreground"
                        @click="mobileOpen = false"
                      >
                        {{ link.label }}
                        <span
                          v-if="link.description"
                          class="mt-0.5 mb-2 block text-xs text-muted-foreground"
                        >
                          {{ link.description }}
                        </span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <NuxtLink
              v-for="link in mainNavLinks"
              :key="link.href"
              :to="link.href"
              class="block px-4 py-3 font-nav text-[0.8125rem] font-medium tracking-[0.01em] leading-none text-foreground/80 transition-colors hover:text-foreground"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <div
            class="mt-6 flex flex-col gap-4 border-t border-border/60 px-4 pt-6"
          >
            <div class="flex items-center gap-3">
              <NuxtLink
                :to="loginAction.href"
                :aria-label="loginAction.label"
                class="inline-flex h-9 items-center rounded-md px-3.5 text-sm font-normal text-foreground/80 transition-colors hover:bg-muted/60 hover:text-foreground"
                @click="mobileOpen = false"
              >
                {{ loginAction.label }}
              </NuxtLink>
              <NuxtLink
                :to="signupAction.href"
                :aria-label="signupAction.label"
                class="inline-flex h-9 min-w-[6.25rem] items-center justify-center rounded-full bg-deep-black px-5 text-sm font-medium !text-white/95 shadow-soft transition-opacity hover:!text-white hover:opacity-90"
                @click="mobileOpen = false"
              >
                {{ signupAction.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

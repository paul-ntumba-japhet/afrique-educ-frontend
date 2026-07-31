<script setup lang="ts">
import { Facebook, Linkedin, MessageCircle, Share2 } from 'lucide-vue-next'
import { authorProfileNavLinks } from '@/data/author-profile'

defineProps<{
  activeId?: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()
</script>

<template>
  <aside
    class="author-profile-aside"
    aria-label="Navigation du profil auteur"
  >
    <nav class="author-profile-aside__nav">
      <ul class="author-profile-aside__list">
        <li
          v-for="link in authorProfileNavLinks"
          :key="link.id"
        >
          <a
            :href="link.href"
            class="author-profile-aside__link"
            :class="{ 'author-profile-aside__link--active': activeId === link.id }"
            @click="emit('navigate', link.id)"
          >
            <component
              :is="link.icon"
              class="author-profile-aside__icon"
              aria-hidden="true"
            />
            <span>{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="author-profile-aside__share">
      <p class="author-profile-aside__share-label">
        Partager
      </p>
      <div class="author-profile-aside__share-row">
        <a
          href="#"
          class="author-profile-aside__share-btn"
          aria-label="Facebook"
        >
          <Facebook
            class="size-4"
            aria-hidden="true"
          />
        </a>
        <a
          href="#"
          class="author-profile-aside__share-btn"
          aria-label="X"
        >
          <Share2
            class="size-4"
            aria-hidden="true"
          />
        </a>
        <a
          href="#"
          class="author-profile-aside__share-btn"
          aria-label="LinkedIn"
        >
          <Linkedin
            class="size-4"
            aria-hidden="true"
          />
        </a>
        <a
          href="#"
          class="author-profile-aside__share-btn"
          aria-label="WhatsApp"
        >
          <MessageCircle
            class="size-4"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </aside>
</template>

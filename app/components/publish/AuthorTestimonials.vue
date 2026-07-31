<script setup lang="ts">
import { publishTestimonialsSection } from '@/data/publish-page'
import marcAvatar from '~/assets/images/publier/marc.webp'
import alissatouAvatar from '~/assets/images/publier/alissatou.webp'
import jeanineAvatar from '~/assets/images/publier/jeanine.webp'

const section = publishTestimonialsSection

const avatarMap: Record<string, string> = {
  'marc.webp': marcAvatar,
  'alissatou.webp': alissatouAvatar,
  'jeanine.webp': jeanineAvatar,
}

function getAvatar(filename: string) {
  return avatarMap[filename] ?? marcAvatar
}
</script>

<template>
  <article
    class="publish-testimonials-faq__panel publish-testimonials"
    aria-labelledby="publish-testimonials-heading"
  >
    <h2
      id="publish-testimonials-heading"
      class="publish-testimonials-faq__title"
    >
      {{ section.title }}
    </h2>

    <ul class="publish-testimonials__list">
      <li
        v-for="item in section.items"
        :key="item.id"
        class="publish-testimonials__item"
      >
        <div class="publish-testimonials__card-top">
          <img
            :src="getAvatar(item.avatar)"
            :alt="`${item.name}, ${item.role} — ${item.location}`"
            class="publish-testimonials__avatar"
            width="64"
            height="64"
            loading="lazy"
            decoding="async"
          >

          <blockquote class="publish-testimonials__quote">
            <p>{{ item.quote }}</p>
          </blockquote>
        </div>

        <p class="publish-testimonials__author">
          <span class="publish-testimonials__author-name">{{ item.name }}</span>
          <span class="publish-testimonials__author-meta">{{ item.role }} — {{ item.location }}</span>
        </p>
      </li>
    </ul>
  </article>
</template>

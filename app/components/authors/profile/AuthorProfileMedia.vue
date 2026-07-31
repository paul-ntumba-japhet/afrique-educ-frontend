<script setup lang="ts">
import { Play } from 'lucide-vue-next'
import { authorProfile } from '@/data/author-profile'
</script>

<template>
  <section
    id="medias"
    class="author-profile-media"
    aria-label="Médias de l'auteur"
  >
    <div class="author-profile-media__grid">
      <article class="author-profile-media__card">
        <h2 class="author-profile-media__heading">
          Interviews & Articles
        </h2>
        <img
          :src="authorProfile.media.interview.image"
          alt=""
          class="author-profile-media__image"
          width="480"
          height="280"
          loading="lazy"
        >
        <h3 class="author-profile-media__title">
          {{ authorProfile.media.interview.title }}
        </h3>
        <p class="author-profile-media__excerpt">
          {{ authorProfile.media.interview.excerpt }}
        </p>
        <a
          :href="authorProfile.media.interview.href"
          class="author-profile-media__link"
        >
          {{ authorProfile.media.interview.cta }} →
        </a>
      </article>

      <article class="author-profile-media__card">
        <h2 class="author-profile-media__heading">
          Vidéos
        </h2>
        <a
          :href="authorProfile.media.video.href"
          class="author-profile-media__thumb"
        >
          <img
            :src="authorProfile.media.video.image"
            :alt="authorProfile.media.video.title"
            class="author-profile-media__image"
            width="480"
            height="280"
            loading="lazy"
          >
          <span
            class="author-profile-media__play"
            aria-hidden="true"
          >
            <Play class="size-6" />
          </span>
        </a>
        <h3 class="author-profile-media__title">
          {{ authorProfile.media.video.title }}
        </h3>
        <a
          :href="authorProfile.media.video.href"
          class="author-profile-media__link"
        >
          {{ authorProfile.media.video.cta }} →
        </a>
      </article>

      <article class="author-profile-media__card">
        <h2 class="author-profile-media__heading">
          Podcasts
        </h2>
        <a
          :href="authorProfile.media.podcast.href"
          class="author-profile-media__thumb"
        >
          <img
            :src="authorProfile.media.podcast.image"
            :alt="authorProfile.media.podcast.title"
            class="author-profile-media__image"
            width="480"
            height="280"
            loading="lazy"
          >
          <span
            class="author-profile-media__play"
            aria-hidden="true"
          >
            <Play class="size-6" />
          </span>
        </a>
        <h3 class="author-profile-media__title">
          {{ authorProfile.media.podcast.title }}
        </h3>
        <a
          :href="authorProfile.media.podcast.href"
          class="author-profile-media__link"
        >
          {{ authorProfile.media.podcast.cta }} →
        </a>
      </article>
    </div>
  </section>
</template>

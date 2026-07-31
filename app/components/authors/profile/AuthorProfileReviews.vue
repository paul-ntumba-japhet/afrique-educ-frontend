<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import { authorProfile } from '@/data/author-profile'
</script>

<template>
  <section
    id="avis"
    class="author-profile-reviews"
    aria-labelledby="author-reviews-heading"
  >
    <h2
      id="author-reviews-heading"
      class="author-profile-reviews__title"
    >
      Avis des lecteurs
    </h2>

    <ul class="author-profile-reviews__list">
      <li
        v-for="review in authorProfile.reviews"
        :key="review.id"
        class="author-profile-reviews__card"
      >
        <div class="author-profile-reviews__head">
          <img
            :src="review.avatar"
            :alt="`Avatar de ${review.name}`"
            class="author-profile-reviews__avatar"
            width="44"
            height="44"
            loading="lazy"
          >
          <div>
            <p class="author-profile-reviews__name">
              {{ review.name }}
            </p>
            <p class="author-profile-reviews__date">
              {{ review.date }}
            </p>
          </div>
        </div>
        <p
          class="author-profile-reviews__stars"
          :aria-label="`${review.rating} étoiles sur 5`"
        >
          <Star
            v-for="n in 5"
            :key="n"
            class="author-profile-reviews__star"
            :class="{ 'author-profile-reviews__star--on': n <= review.rating }"
            aria-hidden="true"
          />
        </p>
        <p class="author-profile-reviews__text">
          {{ review.text }}
        </p>
      </li>
    </ul>
  </section>
</template>

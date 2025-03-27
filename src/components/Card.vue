<script setup lang="ts">
import { computed } from "vue";
import type { IMovie } from "../types/movies";
interface ICardProps {
  movie: IMovie;
  isHoverAnim: boolean;
}
const { movie, isHoverAnim } = defineProps<ICardProps>();
const yearAndGenres = computed(() => {
  const genresAsString = movie.genres?.join(", ");
  return `${movie.year} ${genresAsString}`;
});
const directors = computed(() => {
  if (!movie.directors) return "";
  const directorsAsString = movie.directors.join(", ");
  const title = movie.directors.length > 1 ? "режиссёры" : "режиссёр";
  return `${title}: ${directorsAsString}`;
});
const actors = computed(() => {
  if (!movie.actors) return "";
  const actorsAsString = movie.actors.join(", ");
  return actorsAsString;
});
</script>
<template>
  <article class="container" :class="{ container_hover: isHoverAnim }">
    <div class="poster">
      <img :src="movie.poster" :alt="movie.title" class="poster__img" />
    </div>
    <div class="info">
      <h3 class="info__title">{{ movie.title }}</h3>
      <p class="info__text_accent info__text_genres">{{ yearAndGenres }}</p>
      <p class="info__text_accent info__text_directors">{{ directors }}</p>
      <p>
        <span class="info__text_accent">Актёры:</span><span class="info__text_actors">{{ actors }}</span>
      </p>
      <p class="info__text_description">{{ movie.description }}</p>
    </div>
  </article>
</template>
<style scoped lang="scss">
@use "../styles/font.scss";
@use "../styles/layout.scss";

.container {
  display: grid;
  grid-template-columns: 168px 1fr;
  background-color: #4d4747;
  box-shadow: 0px 4px 4px 0px #00000040;
  transition: translate 0.2s ease-out, box-shadow 0.2s ease-out;
  cursor: pointer;
  position: relative;

  &_hover:hover {
    translate: 0 -8px;
    box-shadow: 0px 8px 20px 0px #00000059;
  }
}

.poster {
  @include layout.flex(row, center, center);
  background-color: #c4c4c4;
  inline-size: 168px;

  &__img {
    inline-size: 112px;
    block-size: 168px;
    object-fit: cover;
  }
}

.info {
  padding: 32px 0 32px 24px;

  &__title {
    @include font.cardTitle();
    margin-block-end: 12px;
  }

  &__text {
    &_accent {
      @include font.cardAccent();
    }

    &_genres,
    &_directors {
      margin-block-end: 8px;
    }

    &_description {
      @include font.CardDescription();
      margin-block-start: 14px;
    }

    &_actors {
      @include font.cardActors();
    }
  }
}
</style>

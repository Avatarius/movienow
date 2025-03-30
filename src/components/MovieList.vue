<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import { useMoviesStore } from "../store/store";
import { storeToRefs } from "pinia";
import Card from "./Card.vue";
import Loader from "./Loader.vue";
import { useRouter } from "vue-router";
import type { IMovie } from "../types/movies";
import MovieNotFound from "./MovieNotFound.vue";
const store = useMoviesStore();
const router = useRouter();
const { resultList, isLoading, isError } = storeToRefs(store);
const ulRef = useTemplateRef("list");
const liArrayRef = useTemplateRef("li");

function redirect(movie: IMovie) {
  if (ulRef.value && liArrayRef.value?.length) {
    const ulOffset = ulRef.value.offsetTop
    const liElement = liArrayRef.value.find((el) => {
      const id = Number(el.getAttribute('data-id'));
      if (id === movie.id) {
        return el;
      }
    });
    if (!liElement) return;
    const liOffset = liElement.offsetTop;
    const resultOffset = ((ulOffset - liOffset) * -1) + 45;
    store.storeOffsetY(resultOffset);
    
  }
  router.push({ name: "MovieDetails", params: { id: movie.id } });
}

onMounted(() => {
  store.fetchMovies();
});

</script>
<template>
  <section>
    <Loader v-if="isLoading" />
    <MovieNotFound v-else-if="isError"/>
    <ul class="list" v-else ref="list">
      <li v-for="(movie, index) in resultList" :key="movie.id" ref="li" :data-id="movie.id">
        <Card :movie="movie" :is-hover-anim="true" @click="redirect(movie)" />
      </li>
    </ul>
  </section>


</template>
<style scoped lang="scss">
@use "../styles/layout.scss";

.list {@include layout.flex(column, center, stretch, 24px);
}
</style>

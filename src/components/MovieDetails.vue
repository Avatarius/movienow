<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "../store/store";
import Card from "./Card.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import MovieDetailsPanel from "./MovieDetailsPanel.vue";
const store = useMoviesStore();
const { getMovieById } = storeToRefs(store);
const route = useRoute();
const movie = computed(() => {
  return getMovieById.value(Number(route.params.id));
});
</script>
<template>
  <MovieDetailsPanel/>
  <section>
    <Card v-if="movie" :movie="movie" :is-hover-anim="false" />
  </section>
</template>
<style scoped></style>

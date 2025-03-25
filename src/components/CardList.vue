<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useMoviesStore } from "../store/store";
import { storeToRefs } from "pinia";
import Card from "./Card.vue";
const store = useMoviesStore();
const { resultList } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
});
</script>
<template>
  <ul class="list">
    <li v-for="movie in resultList" :key="movie.id">
      <Card :movie="movie" />
    </li>
  </ul>
</template>
<style scoped lang="scss">
@use "../styles/layout.scss";
.list {
  @include layout.flex(column, center, stretch, 24px);
}
</style>

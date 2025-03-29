<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "../store/store";
import Card from "./Card.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MovieDetailsPanel from "./MovieDetailsPanel.vue";
import Loader from "./Loader.vue";
const store = useMoviesStore();
const { getMovieById, movieList, currentMovie, offsetY, isLoading } = storeToRefs(store);

const styles = ref({translate: `0 ${offsetY.value}px`});

const route = useRoute();

const movie = computed(() => {
  if (movieList.value.length) {
    return getMovieById.value(Number(route.params.id));
  } else if (currentMovie.value) {
    return currentMovie.value;
  } else {
    return undefined;
  }
});
onMounted(() => {
  if (!movieList.value.length) {
    store.fetchMovieByid(Number(route.params.id));
  }
});
</script>
<template>
  <div>
    <MovieDetailsPanel />
    <section>
      <Loader v-if="isLoading" />
      <template v-else>
        <Card v-if="movie" :movie="movie" :is-hover-anim="false" :style="styles"/>
      </template>

    </section>
  </div>

</template>
<style scoped>
.loader-container {}
</style>

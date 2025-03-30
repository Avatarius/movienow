<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "../store/store";
import Card from "./Card.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Loader from "./Loader.vue";
const store = useMoviesStore();
const { getMovieById, movieList, currentMovie, offsetY, isLoading } = storeToRefs(store);

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
const styles = computed(() => {
  return {translate: `0 200px`};
})
onMounted(() => {
  if (!movieList.value.length) {
    store.fetchMovieByid(Number(route.params.id));
  }
});
/* watchEffect(() => {
  if (movie.value && !isLoading.value) {
    setTimeout(() => {
      store.storeOffsetY(0);
    }, 100);
  }
}) */
</script>
<template>
  <section>
    <Loader v-if="isLoading" />
    <template v-else>
      <Card v-if="movie" :movie="movie" :is-hover-anim="false" :style="styles" />
    </template>

  </section>

</template>
<style scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "../store/store";
import Card from "./Card.vue";
import { computed, nextTick, onMounted, ref, useTemplateRef, watchEffect } from "vue";
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
  return { translate: `0 ${offsetY.value}px` };
})
onMounted(() => {
  if (!movieList.value.length) {
    store.fetchMovieByid(Number(route.params.id));
  }
});
watchEffect(() => {
  if (movie.value && !isLoading.value) {
    setTimeout(() => {
      store.storeOffsetY(0);
    }, 100);
  }
})

</script>
<template>
  <section>
    <Loader v-if="isLoading" />
    <template v-else>
      <div class="container" :style="styles">
        <Card v-if="movie" :movie="movie" :is-hover-anim="false" />
      </div>

    </template>

  </section>

</template>
<style scoped>
.container {
  position: absolute;
  inset-inline: 0;
  inset-block-start: 40px;
  z-index: 3;
  transition: translate 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>

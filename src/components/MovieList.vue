<script setup lang="ts">
import { onMounted } from "vue";
import { useMoviesStore } from "../store/store";
import { storeToRefs } from "pinia";
import Card from "./Card.vue";
import ControlPanel from "./ControlPanel.vue";
import Loader from "./Loader.vue";
const store = useMoviesStore();
const { resultList, isLoading } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
});
</script>
<template>
  <div>
    <ControlPanel />
    <section>
      <Loader v-if="isLoading" />
      <ul class="list" v-else>
        <li v-for="movie in resultList" :key="movie.id">
          <RouterLink :to="{ name: 'MovieDetails', params: { id: movie.id } }">
            <Card :movie="movie" :is-hover-anim="true" />
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>


</template>
<style scoped lang="scss">
@use "../styles/layout.scss";

.list {
  @include layout.flex(column, center, stretch, 24px);
}
</style>

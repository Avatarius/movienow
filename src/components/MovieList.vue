<script setup lang="ts">
import { onMounted } from "vue";
import { useMoviesStore } from "../store/store";
import { storeToRefs } from "pinia";
import Card from "./Card.vue";
import ControlPanel from "./ControlPanel.vue";
const store = useMoviesStore();
const { resultList } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
});
</script>
<template>
  <ControlPanel />
  <section>
    <ul class="list">
      <li v-for="movie in resultList" :key="movie.id">
        <RouterLink :to="{ name: 'MovieDetails', params: { id: movie.id } }">
          <Card :movie="movie" :is-hover-anim="true" />
        </RouterLink>
      </li>
    </ul>
  </section>

</template>
<style scoped lang="scss">
@use "../styles/layout.scss";

.list {
  @include layout.flex(column, center, stretch, 24px);
}
</style>

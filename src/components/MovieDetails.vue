<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMoviesStore } from '../store/store';
import Card from './Card.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const store = useMoviesStore();
const {getMovieById} = storeToRefs(store);
const route = useRoute();
const movie = computed(() => {
  return getMovieById.value(Number(route.params.id));
})
</script>
<template>
  <div>
    <Card v-if="movie" :movie="movie"/>
  </div>
</template>
<style scoped>
</style>
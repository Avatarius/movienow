import { defineStore } from "pinia";
import type { IMovie } from "../types/movies";
import { fetchMoviesApi } from "../api/movies";
import { ref } from "vue";

export const useMoviesStore = defineStore("movies", () => {
  const movieList = ref<IMovie[]>([]);
  const isError = ref<string | null>(null);
  async function fetchMovies() {
    console.log("fetc");
    try {
      const data = await fetchMoviesApi();
      movieList.value = data.data;
      isError.value = null;
    } catch (err) {
      isError.value = "error";
    }
  }
  return { movieList, isError, fetchMovies, print };
});

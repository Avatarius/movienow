import { defineStore } from "pinia";
import type { IMovie } from "../types/movies";
import { fetchMoviesApi } from "../api/movies";
import { computed, ref } from "vue";

export const useMoviesStore = defineStore("movies", () => {
  const movieList = ref<IMovie[]>([]);
  const isError = ref<string | null>(null);
  const isLoading = ref<boolean>(true);
  const isSortedByName = ref<boolean>(false);
  const isSortedByYear = ref<boolean>(false);
  const resultList = computed(() => {
    const array = [...movieList.value];
    if (isSortedByName.value) {
      return array.sort((firstMove, secondMovie) =>
        firstMove.title.localeCompare(secondMovie.title, "en")
      );
    } else if (isSortedByYear.value) {
      return array.sort(
        (firstMove, secondMovie) => firstMove.year - secondMovie.year
      );
    }
    return movieList.value;
  });
  const getMovieById = computed(() => {
    return (id: number) => movieList.value.find((movie) => movie.id === id);
  });
  async function fetchMovies() {
    try {
      const data = await fetchMoviesApi();
      movieList.value = data.data;
      isError.value = null;
    } catch (err) {
      isError.value = "error";
    } finally {
      // isLoading.value = false;
    }
  }
  return {
    movieList,
    isError,
    isLoading,
    isSortedByName,
    isSortedByYear,
    resultList,
    getMovieById,
    fetchMovies,
    print,
  };
});

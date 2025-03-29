import { defineStore } from "pinia";
import type { IMovie } from "../types/movies";
import { fetchMovieByIdApi, fetchMoviesApi } from "../api/movies";
import { computed, ref } from "vue";

export const useMoviesStore = defineStore("movies", () => {
  const movieList = ref<IMovie[]>([]);
  const currentMovie = ref<IMovie | null>(null);
  const isLoading = ref<boolean>(true);
  const isSortedByName = ref<boolean>(false);
  const isSortedByYear = ref<boolean>(false);
  const offsetY = ref<number>(0);

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
    } catch (err) {
    } finally {
      isLoading.value = false;
    }
  }
  async function fetchMovieByid(id: number) {
    try {
      const data = await fetchMovieByIdApi(id);
      currentMovie.value = data.data;
    } catch (err) {
    } finally {
      isLoading.value = false;
    }
  }
  function storeOffsetY(offset: number) {
    offsetY.value = offset;
  }

  return {
    movieList,
    currentMovie,
    isLoading,
    isSortedByName,
    isSortedByYear,
    offsetY,
    resultList,
    getMovieById,
    fetchMovies,
    fetchMovieByid,
    storeOffsetY,
  };
});

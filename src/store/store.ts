import { defineStore } from "pinia";
import type { IMovie } from "../types/movies";
import { fetchMovieByIdApi, fetchMoviesApi } from "../api/movies";
import { computed, ref } from "vue";

export const useMoviesStore = defineStore("movies", () => {
  const movieList = ref<IMovie[]>([]);
  const currentMovie = ref<IMovie | null>(null);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);
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
      if (data.data) {
        movieList.value = data.data;
        isError.value = false;
      } else {
        isError.value = true;
      }
    } catch (err) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  }
  async function fetchMovieByid(id: number) {
    try {
      const data = await fetchMovieByIdApi(id);
      if (data.data) {
        currentMovie.value = data.data;
        isError.value = false;
      } else {
        isError.value = true;
      }
    } catch (err) {
      isError.value = true;
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
    isError,
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

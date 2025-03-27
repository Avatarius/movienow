import axios from "axios";
import type { IMovieData, IMovieListData } from "../types/movies";

const API_BASE_URL = "https://mashroom-movies-api.netlify.app/api";

export function request<T>(url: string) {
  return axios
    .get<T>(url, {
      headers: {
        accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export function fetchMoviesApi() {
  return request<IMovieListData>(`${API_BASE_URL}/movies`);
}

export function fetchMovieByIdApi(id: number) {
  return request<IMovieData>(`${API_BASE_URL}/movie/${id}`);
}

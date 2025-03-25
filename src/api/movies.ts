import axios from "axios";
import type { IMovieData } from "../types/movies";

const API_BASE_URL = "https://mashroom-movies-api.netlify.app/api/movies";

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
  return request<IMovieData>(`${API_BASE_URL}`);
}

/* export function fetchMovieById(id: number) {
  return request<IMovie>(`${API_BASE_URL}/${id}`);
}
 */
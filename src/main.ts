import { createApp } from "vue";
import App from "./App.vue";
import "./fonts/font.scss";
import "./styles/reset.scss";
import "./styles/style.scss";
import { createPinia } from "pinia";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import MovieDetails from "./components/MovieDetails.vue";
import MovieList from "./components/MovieList.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: MovieList },
  { path: "/movie/:id", name: "MovieDetails", component: MovieDetails },
];

const router = createRouter({ history: createWebHistory(), routes: routes });

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");

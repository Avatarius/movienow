import { createApp } from "vue";
import App from "./App.vue";
import "./styles/variables.scss";
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
import ControlPanel from "./components/ControlPanel.vue";
import MovieDetailsPanel from "./components/MovieDetailsPanel.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    components: {
      panel: ControlPanel,
      default: MovieList,
    },
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    components: { panel: MovieDetailsPanel, default: MovieDetails },
  },
];

const router = createRouter({ history: createWebHistory(), routes: routes });

const pinia = createPinia();
const app = createApp(App);

router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transition = toDepth < fromDepth ? "card-list-opacity" : "card-list-";
});

app.use(pinia);
app.use(router);
app.mount("#app");

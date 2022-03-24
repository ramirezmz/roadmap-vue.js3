import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BrazilView from "../views/BrazilView.vue";
import HawaiiView from "../views/HawaiiView.vue";
import PanamaView from "../views/PanamaView.vue";
import JamaicaView from "../views/JamaicaView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: BrazilView,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: HawaiiView,
  },
  {
    path: "/panama",
    name: "panama",
    component: PanamaView,
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: JamaicaView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

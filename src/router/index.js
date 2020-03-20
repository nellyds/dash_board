import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Protected from "../views/Protected.vue";
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
      beforeEnter: authGuard
  },
  {
    path: "/protected",
    name: "Protected",
    component: Protected,
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

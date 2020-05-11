import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogEdit from "../views/BlogEdit.vue";
import ImageUpload from "../components/ImageUpload.vue";
import DisplayEdit from "../views/DisplayEdit.vue";
import Create from "../views/Create.vue";
import Welcome from "../views/Welcome.vue";

function routeGuard(next) {
  window.alert("hi");
  localStorage.getItem("isAuth") === "true"
    ? next()
    : window.alert("not authenticated");
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/upload",
    name: "Upload",
    component: ImageUpload
  },
  {
    path: "/display",
    name: "Display",
    component: DisplayEdit
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    beforeEnter: routeGuard
  },
  {
    path:"/create",
    name: "Create",
    component: Create
  },
  {
    path: "/newsEdit",
    name: "NewsEdit",
    component: () => import("../views/NewsEdit.vue"),
    beforeEnter: routeGuard
  },
  {
    path: "/blogEdit",
    name: "BlogEdit",
    component: BlogEdit,
    beforeEnter: (to, from, next) => {
      localStorage.getItem("isAuth") === "true"
        ? next()
        : window.alert("not authenticated");
    }
  },
  {
    path: "/welcome",
    name: "Welcome", 
    component: Welcome
  }
];
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

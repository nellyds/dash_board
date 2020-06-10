import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DisplayEdit from "../views/DisplayEdit.vue";
import Create from "../views/Create.vue";
import Welcome from "../views/Welcome.vue";
import Email from "../views/Email.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/display",
    name: "Display",
    component: DisplayEdit,
    beforeEnter: (to, from, next) => {
      console.log(localStorage.isAuth);
      if (localStorage.isAuth === "Authenticated") {
        next();
      } else {
        window.alert("Are you sure you logged in? I don't beleive you");
        next({ name: "Home" });
      }
    }
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
    beforeEnter: (to, from, next) => {
      console.log(localStorage.isAuth);
      if (localStorage.isAuth === "Authenticated") {
        next();
      } else {
        window.alert("Are you sure you logged in? I don't beleive you");
        next({ name: "Home" });
      }
    }
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("../views/About.vue")
  // },
  {
    path: "/create",
    name: "Create",
    component: Create,
    beforeEnter: (to, from, next) => {
      console.log(localStorage.isAuth);
      if (localStorage.isAuth === "Authenticated") {
        next();
      } else {
        window.alert("Are you sure you logged in? I don't beleive you");
        next({ name: "Home" });
      }
    }
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
    beforeEnter: (to, from, next) => {
      console.log(localStorage.isAuth);
      if (localStorage.isAuth === "Authenticated") {
        next();
      } else {
        window.alert("Are you sure you logged in? I don't beleive you");
        next({ name: "Home" });
      }
    }
  }
];
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

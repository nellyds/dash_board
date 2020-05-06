import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogEdit from "../views/BlogEdit.vue";
import ImageUpload from "../components/ImageUpload.vue";

function routeGuard(next)
{
  window.alert('hi');
 localStorage.getItem('isAuth') === 'true' ? next() : window.alert('not authenticated')

}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/upload",
    name:"Upload",
    component: ImageUpload
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
    beforeEnter: routeGuard
  },{
  path: "/newsEdit",
  name: "NewsEdit",
  component: () =>
    import("../views/NewsEdit.vue"),
  beforeEnter: routeGuard
  },
  {
    path:"/blogEdit",
    name:"BlogEdit", 
    component: BlogEdit,
beforeEnter:( to, from, next) =>{
  window.alert(localStorage.getItem('isAuth'))
  localStorage.getItem('isAuth') === 'true' ?  next() : window.alert('not authenticated')
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

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import Cloudinary from 'cloudinary-vue';
Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "demo"
  }
});
new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

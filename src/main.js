import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import Cloudinary from "cloudinary-vue";
import "v-markdown-editor/dist/v-markdown-editor.css";
import Editor from "v-markdown-editor";
import VuePageTransition from "vue-page-transition";
Vue.config.productionTip = false;
Vue.use(Editor);
Vue.use(VuePageTransition);
Vue.use(VuePaginate);
import CKEditor from "@ckeditor/ckeditor5-vue";
import VuePaginate from "vue-paginate";
Vue.use(VuePaginate);
Vue.use(CKEditor);
Vue.prototype.$http = axios;

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "demo"
  }
});
new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

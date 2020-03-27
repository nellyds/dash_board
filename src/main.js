import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {domain, clientId} from "./auth/auth_config.json";
import { Auth0Plugin} from "./auth";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
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

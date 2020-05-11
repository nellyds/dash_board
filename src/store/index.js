import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://127.0.0.1:5000",
    jwt: "",
    isAuthenticated: null,
    user: "",
    database: 'WellNessOne',
    imageUrl: ""
  },
  mutations: {
    storeJwt(state, argument) {
      this.state.jwt = argument.jwt;
      this.state.user = argument.user;
      this.state.database = argument.database;
      if (argument.status === "logged in") {
        this.state.isAuthenticated = true;
        localStorage.setItem("isAuth", this.state.isAuthenticated);
      }
      window.alert(this.state.database);
    },
    removeJwt() {
      (this.state.jwt = null),
        (this.state.user = null),
        localStorage.removeItem("isAuth");
    },
    addImageUrl(state, argument) {
      this.state.imageUrl = argument.imageUrl;
      window.alert(this.state.imageUrl)
    }
  },
  actions: {},
  modules: {}
});

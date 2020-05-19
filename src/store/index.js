import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "https://nelsondsilva.pythonanywhere.com/",
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
        localStorage.setItem("isAuth", "Authenticated");
        window.alert(localStorage.isAuth)
      }
      
    },
    removeJwt() {
      window.alert('reached')
      this.state.jwt = null
        this.state.user = null
        this.state.isAuthenticated = null

        localStorage.removeItem("isAuth");
        console.log(this.state)
    },
    addImageUrl(state, argument) {
      this.state.imageUrl = argument.imageUrl;
    },
    removeImageUrl() {
      this.state.imageUrl = null
    }
  },
  actions: {},
  modules: {}
});

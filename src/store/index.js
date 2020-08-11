import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "https://nelsondsilva.pythonanywhere.com/",
    // apiUrl: "http://127.0.0.1:5000",
    jwt: "",
    isAuthenticated: null,
    user: "",
    database: "",
    imageUrl: "",
    artAssets: [
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594841021/flower.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594842455/house-enter.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1588264760/WellNessOne/noy5st43m6vd9ftz3fcc.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594913029/HoC/fieldSquare.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594913001/HoC/cross.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594913086/HoC/houseBlank.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594912946/HoC/mentalColor.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594913221/HoC/flower.png",
      "https://res.cloudinary.com/nelsondsilva/image/upload/v1594912981/HoC/mountain.png"
    ],
    hocImage1: null,
    hocImage2: null,
    hocImage3: null
  },
  mutations: {
    storeJwt(state, argument) {
      this.state.jwt = argument.jwt;
      this.state.user = argument.user;
      this.state.database = argument.user;
      if (argument.status === "logged in") {
        this.state.isAuthenticated = true;
        localStorage.setItem("isAuth", "Authenticated");
        window.alert(localStorage.isAuth);
      }
    },
    removeJwt() {
      this.state.jwt = null;
      this.state.user = null;
      this.state.isAuthenticated = null;

      localStorage.removeItem("isAuth");
      console.log(this.state);
    },
    addImageUrl(state, argument) {
      this.state.imageUrl = argument.imageUrl;
    },
    setHocImage(state, argument) {
      console.log(argument);
      if (argument.number === "1") {
        this.state.hocImage1 = argument.url;
      }
      if (argument.number === "2") {
        this.state.hocImage2 = argument.url;
      }
      if (argument.number === "3") {
        this.state.hocImage3 = argument.url;
      }
    },
    removeImageUrl() {
      this.state.imageUrl = null;
    }
  },
  actions: {},
  modules: {}
});

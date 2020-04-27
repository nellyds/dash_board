import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: 'http://127.0.0.1:5000',
    jwt: '',
    isAuthenticated: null,
    user: ''
  },
  mutations: {
    storeJwt(state, argument){
      this.state.jwt = argument.jwt;
      this.state.user = argument.user;
      if (argument.status === "logged in"){
        this.state.isAuthenticated = true;
        localStorage.setItem('isAuth', this.state.isAuthenticated)
        window.alert(this.state.isAuthenticated)
      }
    },
    removeJwt(state, argument){
      window.alert(argument.message);
      window.alert('before :'+localStorage.getItem('isAuth'))
      this.state.jwt = null,
      this.state.user = null,
      localStorage.removeItem('isAuth');
      window.alert('after :'+localStorage.getItem('isAuth'))
    }

  },
  actions: {},
  modules: {}
});

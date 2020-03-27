import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiRoute: 'http://127.0.0.1:5000/getSection',
    WellNessOne: [
      'WellNessNews',
      'Services',
      'Pharmacies'
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";
import api from "../modules/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
  },
  state: () => ({
    user: {},
    isAuth: false,
  }),
  mutations: {
    createUser(data) {
      this.user = data;
    },
  },
  actions: {
    async registerUser({ commit }, data) {
      console.log(data);
      const result = await api("user/store", "POST", data);
      console.log(result);
      commit("createUser", result);
    },
  },
  getters: {},
});

export default store;

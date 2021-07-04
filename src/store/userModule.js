import Vue from "vue";
import Vuex from "vuex";
import api from "../modules/api";

Vue.use(Vuex);

const userModule = new Vuex.Store({
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
    async registerUser(data) {
      const result = await api("register", "POST", data);
      console.log(result);
      this.commit("createUser", result);
    },
  },
  getters: {},
});

export default userModule;

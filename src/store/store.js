import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";
import deskModule from "./deskModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
    deskModule
  },
});

export default store;

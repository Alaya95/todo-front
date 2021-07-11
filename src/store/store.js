import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";
import taskModule from "./taskModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
    taskModule
  },
});

export default store;

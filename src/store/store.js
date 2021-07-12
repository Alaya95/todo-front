import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";
import taskModule from "./taskModule";
import deskModule from "./deskModule";



Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
    deskModule,
    taskModule
  },
});

export default store;

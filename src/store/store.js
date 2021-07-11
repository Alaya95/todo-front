import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";

import deskModule from "./deskModule";

import taskModule from "./taskModule";


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,

    deskModule,

    taskModule

  },
});

export default store;

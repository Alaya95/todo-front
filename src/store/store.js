import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";
import taskModule from "./taskModule";
import deskModule from "./deskModule";
import taskFormModule from "./taskFormModule";
import accountModule from "./accountModule";
import boardModule from "./boardModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
    taskModule,
    deskModule,
    taskFormModule,
    accountModule,
    boardModule,
  },
});

export default store;

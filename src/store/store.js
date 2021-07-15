import Vue from "vue";
import Vuex from "vuex";

import userModule from "./userModule";
import taskModule from "./taskModule";
import deskModule from "./deskModule";
import taskFormModule from "./taskFormModule";
import accountModule from "./accountModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userModule,
    taskModule,
    deskModule,
    taskFormModule,
    accountModule,
  },
});

export default store;

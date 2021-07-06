import Vue from "vue";
import Router from "vue-router";
import Index from "../pages/Index";
import Account from "../pages/Account";
import Board from "../pages/Board";

Vue.use(Router);

let router = new Router({
  routes: [
    { path: "/", name: "main", component: Index },
    { path: "/account", name: "account", component: Account },
    { path: "/board", name: "board", component: Board },
  ],
});

export default router;

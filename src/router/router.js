import Vue from "vue";
import Router from "vue-router";
import Index from "../pages/Index";
import Account from "../pages/Account";
import Board from "../pages/Board";
import TaskForm from "../components/tasks/TaskForm";
import MoreDetailed from "../pages/MoreDetailed";

Vue.use(Router);

let router = new Router({
//hashbang:false,
//mode: 'history',
  routes: [
    { path: "/", name: "main", component: Index },
    { path: "/account", name: "account", component: Account },
    { path: "/board", name: "board", component: Board },
    { path: "/tasks", name: "tasks", component: TaskForm },
    { path: "/detailsTasks", name: "detailsTasks", component: MoreDetailed },
  ],
});

export default router;

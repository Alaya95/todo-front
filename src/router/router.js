import Vue from "vue";
import Router from "vue-router";
import Index from "../pages/Index";
import Account from "../pages/Account";
import Board from "../pages/Board";
import TaskForm from "../components/tasks/TaskForm";
import MoreDetailed from "../pages/MoreDetailed";
//import MoreGroups from "../pages/MoreGroups";
import MoreBoards from "../pages/MoreBoards";
import AccountSettings from "../pages/AccountSettings";

Vue.use(Router);

let router = new Router({
    hashbang: false,
    mode: 'history',
    routes: [
        {path: "/", name: "main", component: Index},
        {path: "/account", name: "account", component: Account},
        {path: "/board/:id", name: "board", component: Board},
        {path: "/board/task/:id", name: "task", component: TaskForm},
     //   {path: "/usergroups", name: "usergroups", component: MoreGroups},
        {path: "/userboards", name: "userboards", component: MoreBoards},
        {path: "/detailsTasks", name: "detailsTasks", component: MoreDetailed},
        {path: "/accountSettings", name: "accountSettings", component: AccountSettings},

    ],
});

export default router;

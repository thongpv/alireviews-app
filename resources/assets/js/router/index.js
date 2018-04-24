import Vue from "vue";
import Router from "vue-router";

import HomeView from "../views/Home";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/home",
            name: "ProductModule",
            component: HomeView
        }
    ]
});

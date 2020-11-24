import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Identify from "./views/Identify.vue";
import Browse from "./views/Browse.vue";
import Bird from "./views/Bird.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/identify",
            name: "identify",
            component: Identify
        },
        {
            path: "/browse",
            name: "browse",
            component: Browse
        },
        {
            path: "/browse/:id",
            name: "bird",
            component: Bird,
        }
    ]
})
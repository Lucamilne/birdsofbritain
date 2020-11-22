import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Birds from "./views/Birds.vue";
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
            path: "/browse",
            name: "browse",
            component: Birds
        },
        {
            path: "/browse/:id",
            name: "bird",
            component: Bird,
        }
    ]
})
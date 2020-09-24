import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Birds from "./views/Birds.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/birds",
            name: "birds",
            component: Birds
        }
    ]
})
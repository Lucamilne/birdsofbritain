import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Identify from "./views/Identify.vue";
import Browse from "./views/Browse.vue";
import Bird from "./views/Bird.vue";
import Habitat from "./views/Habitat.vue";
import Family from "./views/Family.vue";
import Favourites from "./views/Favourites.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
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
            path: "/habitats/:id",
            name: "habitats",
            component: Habitat
        },
        {
            path: "/families/:id",
            name: "families",
            component: Family,
        },
        {
            path: "/favourites",
            name: "favourites",
            component: Favourites,
        },
        {
            path: "/birds/:id",
            name: "birds",
            component: Bird,
        }
    ]
})
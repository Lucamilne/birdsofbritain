import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Identify from "./views/Identify";
import Browse from "./views/Browse";
import Bird from "./views/Bird";
import Species from "./components/Species"
import Habitats from "./components/Habitats";
import Families from "./components/Families";
import Habitat from "./components/Habitat";
import Family from "./components/Family";
import Favourites from "./views/Favourites";
import Results from "./views/Results"

Vue.use(Router);

export default new Router({
    // mode: 'history',
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
            path: "/identify/results",
            name: "results",
            component: Results
        },
        {
            path: "/browse/",
            name: "browse",
            redirect: "browse/species",
            component: Browse,
            children: [
                {
                    path: "species",
                    name: "species",
                    component: Species
                },
                {
                    path: "habitats",
                    name: "habitats",
                    component: Habitats,
                },
                {
                    path: "habitats/:id",
                    name: "habitat",
                    component: Habitat
                },
                {
                    path: "family",
                    name: "famililes",
                    component: Families
                },
                {
                    path: "family/:id",
                    name: "family",
                    component: Family
                },
            ]
        },
        {
            path: "/browse/species/:id",
            name: "birds",
            component: Bird,
        },
        {
            path: "/favourites",
            name: "favourites",
            component: Favourites,
        }
    ]
})
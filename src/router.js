import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import(/* webpackChuckName: "Home" */ "./views/Home")
        },
        {
            path: "/identify",
            name: "identify",
            component: () => import(/* webpackChuckName: "Identify" */ "./views/Identify")
        },
        {
            path: "/identify/results",
            name: "results",
            component: () => import(/* webpackChuckName: "Results" */ "./views/Results")
        },
        {
            path: "/browse/",
            name: "browse",
            redirect: "browse/species",
            component: () => import(/* webpackChuckName: "Browse" */ "./views/Browse"),
            children: [
                {
                    path: "species",
                    name: "species",
                    component: () => import(/* webpackChuckName: "Species" */ "./components/Species")
                },
                {
                    path: "habitat",
                    name: "habitats",
                    component: () => import(/* webpackChuckName: "Habitats" */ "./components/Habitats")
                },
                {
                    path: "habitat/:id",
                    name: "habitat",
                    component: () => import(/* webpackChuckName: "Habitat" */ "./components/Habitat")
                },
                {
                    path: "family",
                    name: "families",
                    component: () => import(/* webpackChuckName: "Families" */ "./components/Families")
                },
                {
                    path: "family/:id",
                    name: "family",
                    component: () => import(/* webpackChuckName: "Family" */ "./components/Family")
                },
            ]
        },
        {
            path: "/browse/species/:id",
            name: "birds",
            component: () => import(/* webpackChuckName: "Bird" */ "./views/Bird")
        },
        {
            path: "/favourites",
            name: "favourites",
            component: () => import(/* webpackChuckName: "Favourites" */ "./views/Favourites")
        },
        {
            path: "/404",
            name: "not-found",
            component: () => import(/* webpackChuckName: "NotFound" */ "./views/NotFound")
        },
        {
            path: "*",
            component: () => import(/* webpackChuckName: "NotFound" */ "./views/NotFound")
        }
    ]
})
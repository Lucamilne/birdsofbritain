<template>
    <v-container class="py-0">
        <v-breadcrumbs large :items="breadcrumbs">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :disabled="item.disabled">
                    <router-link style="text-decoration: none; color: inherit" :to="item.path">
                        {{ item.text }}
                    </router-link>
                </v-breadcrumbs-item>
            </template>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
    </v-container>
</template>

<script>
import utils from "../common/utils";

export default {
    name: "Breadcrumbs",
    computed: {
        breadcrumbs() {
            let breadcrumbs = new Array();
            let currentHref = new Array();

            let route = this.$route.path.split("/");

            route.forEach((crumb, index) => {
                if (crumb) {
                    currentHref.push("/" + crumb);

                    breadcrumbs.push({
                        text: this.getCapatalisedCrumbFromPath(crumb),
                        disabled: index !== route.length - 1 ? false : true,
                        path: currentHref.join(""),
                    });
                } else {
                    breadcrumbs.push({
                        text: "Home",
                        disabled: false,
                        path: "/",
                    });
                }
            });

            return breadcrumbs;
        },
    },
    methods: {
        getCapatalisedCrumbFromPath(crumb) {
            return Array.from(crumb.split("-"), (el) => utils.capitalise(el)).join(" ");
        },
    },
};
</script>

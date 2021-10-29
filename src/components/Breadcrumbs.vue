<template>
    <v-breadcrumbs :items="breadcrumbs">
        <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
        </template>
    </v-breadcrumbs>
</template>

<script>
import common from "../common/utils";

export default {
    name: "Breadcrumbs",
    computed: {
        breadcrumbs() {
            let breadcrumbs = new Array();
            let route = this.$route.path.split("/");
            route.shift();
            
            route.forEach((crumb, index) => {
                breadcrumbs.push({
                    text: this.getCapatalisedCrumbFromPath(crumb),
                    disabled: index !== route.length - 1 ? false : true,
                    href: this.$route.path,
                });
            });

            return breadcrumbs;
        },
    },
    methods: {
        getCapatalisedCrumbFromPath(crumb) {
            return Array.from(crumb.split('-'), el => common.capitalise(el)).join(' ')
        }
    }
};
</script>

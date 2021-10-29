<template>
    <div>
        <v-tabs centered dark background-color="secondary">
            <v-tab v-for="tab in tabs" :key="tab.label" :to="tab.path">
                {{ tab.label }}
            </v-tab>
        </v-tabs>
        <v-container>
            <Breadcrumbs />
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
import Species from "../components/Species.vue";
import Habitats from "../components/Habitats.vue";
import Families from "../components/Families.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

export default {
    name: "Browse",
    components: {
        Breadcrumbs,
    },
    data: () => ({
        tabs: [
            { label: "Species", component: Species, path: "/browse/species" },
            { label: "Habitat", component: Habitats, path: "/browse/habitats" },
            { label: "Family", component: Families, path: "/browse/family" },
        ],
    }),
};
</script>

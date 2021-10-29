<template>
    <div>
        <v-tabs centered>
            <v-tab v-for="tab in tabs" :key="tab.label" :to="tab.path">
                {{ tab.label }}
            </v-tab>
        </v-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
import Species from "../components/Species";
import Habitats from "../components/Habitats";
import Families from "../components/Families";

export default {
    name: "Browse",
    data: function () {
        return {
            tabs: [
                { label: "Species", component: Species, path: "/browse/species" },
                { label: "Habitat", component: Habitats, path: "/browse/habitats" },
                { label: "Family", component: Families, path: "/browse/family" },
            ],
        };
    },
};
</script>

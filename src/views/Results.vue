<template>
    <div>
        <Breadcrumbs />
        <v-container>
            <v-list v-if="results.length > 0">
                <v-row>
                    <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfResults" :key="birds[bird].name">
                        <BirdTile :bird="bird" />
                    </v-col>
                </v-row>
                <div class="text-center" v-if="results.length > resultsPerPage">
                    <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
                </div>
            </v-list>
            <v-card flat v-else min-height="450" class="d-flex align-center justify-center">
                <v-card-subtitle>No matches found</v-card-subtitle>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "../components/BirdTile.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

export default {
    name: "results",
    components: {
        BirdTile,
        Breadcrumbs,
    },
    data: () => ({
        page: 1,
        resultsPerPage: 24,
        birds: birds.data,
        search: birds.searchCharacteristics,
    }),
    computed: {
        results() {
            const query = this.$route.query;

            if (query.habitat && query.featherColor && query.beak) {
                return this.search(query.habitat, query.featherColor.split(","), query.beak);
            }

            return [];
        },
        sliceOfResults() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return this.results.slice(start, end);
        },
        numberOfPages() {
            return Math.ceil(this.results.length / this.resultsPerPage);
        },
    },
};
</script>

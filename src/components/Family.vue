<template>
    <v-list v-if="family">
        <v-row>
            <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                <BirdTile :bird="bird" />
            </v-col>
        </v-row>
    </v-list>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "./BirdTile.vue";

export default {
    name: "Family",
    components: {
        BirdTile,
    },
    data: () => ({
        resultsPerPage: 24,
        birds: birds.data,
        birdsByFamily: birds.birdsByFamily(),
    }),
    computed: {
        family() {
            return birds.familyByPath()[this.$route.params.id];
        },
        page: {
            get: function () {
                if (this.$route.query.page && this.numberOfPages > 1) {
                    return parseInt(this.$route.query.page);
                }

                this.$router.replace({
                    name: "family",
                    query: { page: 1 },
                });

                return 1;
            },
            set: function (newValue) {
                this.$router.push({
                    name: "family",
                    query: { page: newValue },
                });
            },
        },
        sliceOfBirdList() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return this.birdsByFamily[this.family].slice(start, end);
        },
    },
    updated() {
        if (!this.family) {
            this.$router.replace({ name: "not-found" });
        }
    },
};
</script>

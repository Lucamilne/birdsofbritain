<template>
    <div v-if="habitat">
        <v-list>
            <v-row>
                <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                    <BirdTile :bird="bird" />
                </v-col>
            </v-row>
        </v-list>

        <div class="text-center">
            <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
        </div>
    </div>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "./BirdTile.vue";

export default {
    name: "Habitat",
    components: {
        BirdTile
    },
    data: () => ({
        resultsPerPage: 24,
        birds: birds.data,
        birdsByHabitat: birds.birdsByHabitat(),
    }),
    computed: {
        habitat() {
            return birds.habitatByPath()[this.$route.params.id];
        },
        page: {
            get: function () {
                if (this.$route.query.page && this.numberOfPages > 1) {
                    return parseInt(this.$route.query.page);
                }

                this.$router.replace({
                    name: "habitat",
                    query: { page: 1 },
                });

                return 1;
            },
            set: function (newValue) {
                this.$router.push({
                    name: "habitat",
                    query: { page: newValue },
                });
            },
        },
        sliceOfBirdList() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return this.birdsByHabitat[this.habitat].slice(start, end);
        },
        numberOfPages() {
            return Math.ceil(this.birdsByHabitat[this.habitat].length / this.resultsPerPage);
        },
    },
    updated() {
        if (!this.habitat) {
            this.$router.replace({ name: "not-found" });
        }
    },
};
</script>
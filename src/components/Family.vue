<template>
    <v-list>
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
        page: 1,
        resultsPerPage: 24,
        birds: birds.data,
        birdsByFamily: birds.birdsByFamily(),
    }),
    computed: {
        family() {
            return birds.familyByPath()[this.$route.params.id];
        },
        sliceOfBirdList() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return this.birdsByFamily[this.family].slice(start, end);
        },
    },
};
</script>

<template>
    <div>
        <v-row>
            <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                <BirdTile :bird="bird" />
            </v-col>
        </v-row>
        <div class="text-center">
            <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
        </div>
    </div>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "./BirdTile.vue";

export default {
    name: "Species",
    components: {
        BirdTile,
    },
    data: () => ({
        page: 1,
        resultsPerPage: 24,
        birds: birds.data,
    }),
    computed: {
        sliceOfBirdList() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return birds.listOfBirds().slice(start, end);
        },
        numberOfPages() {
            return Math.ceil(Object.keys(birds.data).length / this.resultsPerPage);
        },
    },
};
</script>
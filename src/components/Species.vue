<template>
    <div>
        <v-row>
            <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                <BirdTile :bird="bird" />
            </v-col>
        </v-row>
        <div class="text-center">
            <v-pagination class="mt-3" v-model="page" :length="numberOfPages"></v-pagination>
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
        resultsPerPage: 24,
        birds: birds.data,
    }),
    computed: {
        page: {
            get: function () {
                if (this.$route.query.page && this.numberOfPages > 1) {
                    return parseInt(this.$route.query.page);
                }

                this.$router.replace({
                    name: "species",
                    query: { page: 1 }
                })

                return 1;
            },
            set: function (newValue) {
                this.$router.push({
                    name: "species",
                    query: { page: newValue },
                });
            },
        },
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
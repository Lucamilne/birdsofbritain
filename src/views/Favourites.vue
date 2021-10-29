<template>
    <v-container>
        <Breadcrumbs />
        <v-list v-if="localFavourites.length > 0">
            <v-row>
                <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                    <BirdTile :bird="bird" />
                </v-col>
            </v-row>
        </v-list>

        <div class="text-center" v-if="localFavourites.length > resultsPerPage">
            <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
        </div>

        <v-card v-if="localFavourites.length === 0" flat class="text-center">
            <v-card-subtitle>No favourites added</v-card-subtitle>
        </v-card>
    </v-container>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "../components/BirdTile.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue"

export default {
    name: "Favourites",
    components: {
        BirdTile,
        Breadcrumbs
    },
    data: () => ({
        localFavourites: localStorage.getItem("favouriteBirds")
            ? JSON.parse(localStorage.getItem("favouriteBirds"))
            : [],
        page: 1,
        resultsPerPage: 24,
        birds: birds.data,
    }),
    computed: {
        sliceOfBirdList() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return this.localFavourites.slice(start, end);
        },
        numberOfPages() {
            return Math.ceil(this.localFavourites.length / this.resultsPerPage);
        },
    },
};
</script>
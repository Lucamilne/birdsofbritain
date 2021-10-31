<template>
    <div v-if="localFavourites.length > 0">
        <Breadcrumbs />
        <v-container>
            <v-list>
                <v-row>
                    <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                        <BirdTile :bird="bird" />
                    </v-col>
                </v-row>
            </v-list>

            <div class="text-center" v-if="localFavourites.length > resultsPerPage">
                <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
            </div>
        </v-container>
    </div>
    <NotFound
        title="No favourites added"
        subtitle="Save a bird to favourites by clicking the heart icon on it's profile."
        v-else
    />
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "../components/BirdTile.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import NotFound from "../views/NotFound.vue";

export default {
    name: "Favourites",
    components: {
        BirdTile,
        Breadcrumbs,
        NotFound,
    },
    data: () => ({
        localFavourites: localStorage.getItem("favouriteBirds")
            ? JSON.parse(localStorage.getItem("favouriteBirds"))
            : [],
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
                    name: "favourites",
                    query: { page: 1 },
                });

                return 1;
            },
            set: function (newValue) {
                this.$router.push({
                    name: "favourites",
                    query: { page: newValue },
                });
            },
        },
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
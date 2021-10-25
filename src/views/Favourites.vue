<template>
    <v-container>
        <v-list v-if="localFavourites.length > 0">
            <v-list-item-subtitle>Your favourite birds</v-list-item-subtitle>
            <v-row>
                <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds[bird].name">
                    <v-card tile>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">
                                    {{ birds[bird].population.type }}
                                </div>
                                <v-list-item-title class="headline mb-1">
                                    {{ birds[bird].name }}
                                </v-list-item-title>
                                <v-list-item-subtitle>{{ birds[bird].scientificName }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <router-link :to="`/birds/${toKebabCase(bird)}`">
                                <v-list-item-avatar tile size="120" color="grey lighten-4">
                                    <img
                                        :src="require(`../assets/birds/${birds[bird].images[0]}`)"
                                        :alt="birds[bird].name"
                                    />
                                </v-list-item-avatar>
                            </router-link>
                        </v-list-item>
                        <v-card-actions>
                            <v-btn
                                text
                                color="primary"
                                :to="`/birds/${toKebabCase(bird)}`"
                                >Learn more</v-btn
                            >
                        </v-card-actions>
                        <FavouriteToggle :bird="bird" class="position-absolute bottom right ma-2" />
                    </v-card>
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
import FavouriteToggle from "@/components/FavouriteToggle.vue";

export default {
    name: "Favourites",
    components: {
        FavouriteToggle,
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
    methods: {
        toKebabCase(bird) {
            return bird.toLowerCase().replaceAll(" ", "-");
        },
    },
};
</script>

<style scoped>
.v-avatar img {
    object-fit: cover;
}
.position-absolute {
    position: absolute;
}
.bottom {
    bottom: 0;
}
.right {
    right: 0;
}
</style>

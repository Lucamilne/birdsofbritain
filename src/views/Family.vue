<template>
    <v-container>
        <v-list>
            <v-list-item-title class="mb-4 text-center">{{ family }}</v-list-item-title>
            <v-row>
                <v-col cols="12" md="6" lg="4" xl="3" v-for="bird in sliceOfBirdList" :key="birds.data[bird].name">
                    <v-card tile>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4">
                                    {{ birds.data[bird].population.type }}
                                </div>
                                <v-list-item-title class="headline mb-1">
                                    {{ birds.data[bird].name }}
                                </v-list-item-title>
                                <v-list-item-subtitle>{{ birds.data[bird].scientificName }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <router-link :to="`/birds/${toKebabCase(bird)}`">
                                <v-list-item-avatar tile size="120" color="grey lighten-4">
                                    <img
                                        :src="require(`../assets/birds/${birds.data[bird].images[0]}`)"
                                        :alt="birds.data[bird].name"
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
                    </v-card>
                </v-col>
            </v-row>
        </v-list>

        <div class="text-center" v-if="birds.birdsByFamily[family].length > resultsPerPage">
            <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
        </div>
    </v-container>
</template>

<script>
import birds from "@/common/birds.js";

export default {
    name: "Family",
    data: () => ({
        page: 1,
        resultsPerPage: 24,
        birds: birds,
    }),
    computed: {
        family() {
            return birds.familyByPath()[this.$route.params.id];
        },
        sliceOfBirdList() {
            const start = (this.page - 1) * this.resultsPerPage;
            const end = this.page * this.resultsPerPage;

            return birds.birdsByFamily[this.family].slice(start, end);
        },
        numberOfPages() {
            return Math.ceil(birds.birdsByFamily[this.family].length / this.resultsPerPage);
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
</style>

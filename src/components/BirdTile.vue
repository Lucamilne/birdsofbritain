<template>
    <v-card tile :to="`/browse/species/${toKebabCase(bird)}`">
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">
                    {{ birds[bird].population.type }}
                </div>
                <v-list-item-title class="headline">
                    {{ birds[bird].name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ birds[bird].scientificName }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="120" color="grey lighten-4">
                <img :src="require(`../assets/birds/${birds[bird].images[0]}`)" :alt="birds[bird].name" />
            </v-list-item-avatar>
        </v-list-item>
        <v-card-text>
            <span class="text-button secondary--text">Learn More</span>
        </v-card-text>
    </v-card>
</template>

<script>
import birds from "@/common/birds.js";
import utils from "@/common/utils.js";

export default {
    name: "BirdTile",
    props: ["bird"],
    data: () => ({
        birds: birds.data,
    }),
    methods: {
        toKebabCase(bird) {
            return utils.toKebabCase(bird);
        },
    },
};
</script>

<style scoped>
.v-avatar img {
    object-fit: cover;
}
</style>


<template>
    <v-card tile :to="`/birds/${toKebabCase(bird)}`">
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
            <v-list-item-avatar tile size="120" color="grey lighten-4">
                <img :src="require(`../assets/birds/${birds[bird].images[0]}`)" :alt="birds[bird].name" />
            </v-list-item-avatar>
        </v-list-item>
        <v-card-text>
            <span class="text-button" color="primary">Learn More</span>
        </v-card-text>
    </v-card>
</template>

<script>
import birds from "@/common/birds.js";
import common from "@/common/utils.js";

export default {
    name: "BirdTile",
    props: ["bird"],
    data: () => ({
        birds: birds.data,
    }),
    methods: {
        toKebabCase(bird) {
            return common.toKebabCase(bird);
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


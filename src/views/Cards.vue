<template>
    <v-container>
        <v-row>
            <v-col cols="3"><DeckOfCards /></v-col>
            <v-col cols="3"><DeckOfCards /></v-col>
        </v-row>
        <v-row class="mt-0">
            <v-col cols-sm="3" offset-sm="6"><DeckOfCards /></v-col>
            <v-col cols-sm="3"><DeckOfCards /></v-col>
        </v-row>
    </v-container>
</template>

<script>
// import draggable from "vuedraggable";
import birds from "@/common/birds.js";
import DeckOfCards from "../components/DeckOfCards.vue";

export default {
    name: "Cards",
    components: {
        DeckOfCards,
    },
    data: () => ({
        birds: birds.data,
        playerDeck: [],
        houseDeck: [],
    }),
    methods: {
        sortDecksIntoTwo() {
            const arrayOfBirds = birds.listOfBirds();
            this.playerDeck = arrayOfBirds.sort(() => Math.random() - 0.5);
            this.houseDeck = this.playerDeck.splice(0, arrayOfBirds.length >> 1);
        },
    },
    created() {
        this.sortDecksIntoTwo();
    },
};
</script>

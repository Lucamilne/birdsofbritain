<template>
  <v-container>
      <p>{{ playerDeck }}</p>
      <p>{{ houseDeck }}</p>
  </v-container>
</template>

<script>
// import draggable from "vuedraggable";
import birds from "@/common/birds.js";

export default {
  name: "Cards",
  //   components: {
  //     draggable,
  //   },
  data: () => ({
    birds: birds.data,
    playerDeck: [],
    houseDeck: [],
  }),
  methods: {
    sortDecksIntoTwo() {
      const arrayOfBirds = birds.listOfBirds();
      this.playerDeck = arrayOfBirds.sort(() => Math.random() - 0.5)
      this.houseDeck = this.playerDeck.splice(0, arrayOfBirds.length >> 1);
    },
  },
  created() {
    this.sortDecksIntoTwo();
  },
};
</script>

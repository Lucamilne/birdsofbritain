<template>
  <v-container>
    <v-list>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          v-for="bird in sliceOfBirdList"
          :key="birds[bird].name"
        >
        <BirdTile :bird="bird" />
        </v-col>
      </v-row>
    </v-list>

    <div class="text-center">
      <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "./BirdTile.vue"

export default {
  name: "Habitat",
  components: {
    BirdTile
  },
  data: () => ({
    page: 1,
    resultsPerPage: 24,
    birds: birds.data,
    birdsByHabitat: birds.birdsByHabitat(),
  }),
  computed: {
    habitat() {
      return birds.habitatByPath()[this.$route.params.id];
    },
    sliceOfBirdList() {
      const start = (this.page - 1) * this.resultsPerPage;
      const end = this.page * this.resultsPerPage;

      return this.birdsByHabitat[this.habitat].slice(start, end);
    },
    numberOfPages() {
      return Math.ceil(this.birdsByHabitat[this.habitat].length / this.resultsPerPage);
    },
  },
};
</script>
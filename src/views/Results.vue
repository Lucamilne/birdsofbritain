<template>
  <v-container>
    <div v-if="results.length > 0">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          v-for="bird in sliceOfResults"
          :key="birds[bird].name"
        >
          <BirdTile :bird="bird" />
        </v-col>
      </v-row>
      <div class="text-center" v-if="results.length > resultsPerPage">
        <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
      </div>
    </div>
    <v-card flat v-else min-height="450" class="d-flex align-center justify-center">
      <v-card-subtitle>{{
        results ? "No matches found" : "Please resubmit features"
      }}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";
import BirdTile from "../components/BirdTile.vue";

export default {
  name: "results",
  components: {
    BirdTile,
  },
  data: () => ({
    model: 0,
    page: 1,
    resultsPerPage: 9,
    birds: birds.data,
    search: birds.searchCharacteristics,
    loading: true,
    results: "",
  }),
  computed: {
    sliceOfResults() {
      const start = (this.page - 1) * this.resultsPerPage;
      const end = this.page * this.resultsPerPage;

      return this.results.slice(start, end);
    },
    numberOfPages() {
      return Math.ceil(this.results.length / this.resultsPerPage);
    },
  },
  created() {
    const params = this.$route.params;

    if (params.habitat && params.featherColor && params.beak) {
      this.results = this.search(params.habitat, params.featherColor, params.beak);
      this.loading = false;
    } else {
      this.loading = false;
    }
  },
};
</script>

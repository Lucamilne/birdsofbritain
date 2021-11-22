<template>
  <div>
    <v-row>
      <v-col
        v-for="family in sliceOfFamilies"
        :key="family"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card
          style="height: 100%"
          @click="
            $router.push({
              name: 'family',
              params: { id: toKebabCase(family) },
            })
          "
          class="d-flex flex-column justify-space-between"
        >
          <div>
            <v-toolbar flat color="secondary" dark>
              <v-toolbar-title><span class="text-truncate">{{ family }}</span></v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <p class="mb-0">
                {{ families[family].description }}
              </p>
            </v-card-text>
          </div>
          <v-card-text class="pt-0">
            <span class="text-button secondary--text">Browse</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
    </div>
  </div>
</template>

<script>
import birds from "@/common/birds.js";
import utils from "@/common/utils.js";

export default {
  name: "Families",
  data: () => ({
    resultsPerPage: 24,
    birds: birds.data,
    families: birds.families,
    listOfFamilies: Object.keys(birds.families)
  }),
  computed: {
    page: {
      get: function () {
        if (this.$route.query.page && this.numberOfPages > 1) {
          return parseInt(this.$route.query.page);
        }

        this.$router.replace({
          name: "families",
          query: { page: 1 },
        });

        return 1;
      },
      set: function (newValue) {
        this.$router.push({
          name: "families",
          query: { page: newValue },
        });
      },
    },
    sliceOfFamilies() {
      const start = (this.page - 1) * this.resultsPerPage;
      const end = this.page * this.resultsPerPage;

      return this.listOfFamilies.slice(start, end);
    },
    numberOfPages() {
      return Math.ceil(this.listOfFamilies.length / this.resultsPerPage);
    },
  },
  methods: {
    toKebabCase(family) {
      return utils.toKebabCase(family);
    },
  },
};
</script>
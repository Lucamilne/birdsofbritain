<template>
  <v-autocomplete
    v-model="value"
    dense
    hide-details
    single-line
    append-outer-icon="mdi-magnify"
    :items="listOfBirds"
    label="Search"
    outlined
  >
  </v-autocomplete>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "Search",
  data: function() {
    return {
      value: null
    }
  },
  computed: {
    listOfBirds() {
      return Object.keys(birds.data);
    },
  },
};
</script>

<template>
  <v-autocomplete
    v-model="value"
    dense
    filled
    hide-details
    single-line
    append-icon="mdi-magnify"
    :items="listOfBirds"
    label="Search"
    outlined
    @input="
      $router.push({
        name: 'bird',
        params: { id: toKebabCase(value) },
      }).catch(() => {})
    "
  >
  </v-autocomplete>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "Search",
  data: function () {
    return {
      value: null,
    };
  },
  computed: {
    listOfBirds() {
      return Object.keys(birds.data);
    },
  },
  methods: {
    toKebabCase(bird) {
      return bird.toLowerCase().replace(" ", "-");
    },
  },
};
</script>

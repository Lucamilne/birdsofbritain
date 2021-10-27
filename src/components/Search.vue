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
        name: 'birds',
        params: { id: toKebabCase(value) },
      }).catch(() => {})
    "
  >
  </v-autocomplete>
</template>

<script>
import birds from "@/common/birds.js";
import common from "@/common/utils.js";

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
      return common.toKebabCase(bird);
    },
  },
};
</script>

<style>
  .v-autocomplete.v-select--is-menu-active .v-input__icon--append .v-icon {
    transform: none;
  }
</style>

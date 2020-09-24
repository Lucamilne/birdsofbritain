<template>
    <v-list two-line>
        <v-list-item
          v-for="bird in getListOfBirds"
          :key="bird"
        >
          <v-list-item-content>
            <v-list-item-title v-html="bird"></v-list-item-title>
            <v-list-item-subtitle v-html="birds[bird].scientificName"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "Birds",
  data: () => ({
    birds: birds.data
  }),
  computed: {
      getListOfBirds() {
        return Object.keys(birds.data)
      },
    }
};
</script>
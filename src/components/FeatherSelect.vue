<template>
  <v-item-group v-model="selected" multiple>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            tile
            :color="active ? colors[item] : 'white'"
            class="d-flex align-center"
            :dark="active ? true : false"
            @click="toggle"
          >
            <v-responsive :aspect-ratio="4 / 3" class="d-flex align-center">
              <div class="overline text-center">
                {{ item }}
              </div>
            </v-responsive>
          </v-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "FeatherSelect",
  data: function () {
    return {
      exampleBird: "Bullfinch",
      birds: birds.data,
      items: birds.listOfFeatures.featherColor,
      selected: [],
      colors: {
        Black: "black",
        Brown: "brown darken-2",
        Cream: "brown lighten-4",
        White: "grey lighten-1",
        Grey: "grey darken-2",
        Orange: "orange darken-2",
        Red: "red darken-2",
        Blue: "blue darken-2",
        Yellow: "amber darken-2",
        Green: "green darken-2",
        "Pink/Purple": "pink darken-2",
      },
    };
  },
  computed: {
    colorsToString() {
      return birds.data[this.exampleBird].features.featherColor
        .join(", ")
        .toLowerCase();
    },
  },
  methods: {
    randomBird() {
      const numberOfBirds = birds.listOfBirds().length;
      const randomNumber = Math.floor(Math.random() * numberOfBirds);

      this.exampleBird = birds.listOfBirds()[randomNumber];
    },
  },
};
</script>
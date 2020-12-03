<template>
  <v-item-group multiple v-model="selected">
    <v-row>
      <v-col v-for="item in items" :key="item" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            tile
            :color="active ? colors[item] : 'white'"
            :class="`d-flex align-center ${active ? 'background' : ''}`"
            :dark="active ? true : false"
            @click="toggle"
          >
            <v-responsive
              :aspect-ratio="4 / 3"
              class="d-flex align-center text-center"
            >
              <div class="overline">
                {{ item }}
              </div>
            </v-responsive>
          </v-card>
        </v-item>
      </v-col>
    </v-row>
    Selected: {{ selected }}
  </v-item-group>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "FeatherSelect",
  data: function () {
    return {
      birds: birds.data,
      items: birds.listOfFeatures.featherColor,
      featherColors: [],
      colors: {
        Black: "black",
        Blue: "indigo",
        Brown: "brown darken-2",
        Cream: "brown lighten-3",
        Green: "green",
        Grey: "grey darken-2",
        Orange: "orange darken-1",
        "Pink/Purple": "pink accent-4",
        Red: "red",
        Yellow: "yellow darken-1",
        White: "grey lighten-2",
      },
    };
  },
  computed: {
    colorsToString() {
      return birds.data[this.exampleBird].features.featherColor
        .join(", ")
        .toLowerCase();
    },
    selected: {
      get: function () {
        const indexes = [];

        this.featherColors.forEach((color) => {
          indexes.push(this.items.indexOf(color));
        });

        console.log(indexes)
        return indexes;
      },
      set: function (newValue) {
        const arr = [];

        newValue.forEach((index) => {
          arr.push(this.items[index]);
        });

        console.log(arr);
        return arr;
      },
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

<style scoped>
.background {
  background-image: url("https://www.transparenttextures.com/patterns/foggy-birds.png");
}
</style>
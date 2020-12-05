<template>
  <v-item-group
    multiple
    v-model="selected"
    @change="$emit('feather-color', indexFeatherColors())"
  >
    <v-row>
      <v-col v-for="item in items" :key="item" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            tile
            :color="active ? 'primary' : 'white'"
            class="d-flex align-center"
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
      selected: [],
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
  methods: {
    randomBird() {
      const numberOfBirds = birds.listOfBirds().length;
      const randomNumber = Math.floor(Math.random() * numberOfBirds);

      this.exampleBird = birds.listOfBirds()[randomNumber];
    },
    indexFeatherColors() {
      if (this.selected.length < 1) {
        return null;
      }

      return this.selected.map((index) => {
        return this.items[index];
      });
    },
  },
};
</script>


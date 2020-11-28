<template>
  <v-row>
    <v-col cols="12" md="8">
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
                <v-responsive :aspect-ratio="1 / 1" class="d-flex align-center">
                  <div class="overline text-center">
                    {{ item }}
                  </div>
                </v-responsive>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-col>
    <v-col cols="12" md="4" class="d-flex align-center">
      <v-card class="mx-auto" max-width="300">
        <v-card-text>
          <div>Example:</div>
          <p class="display-1 text--primary">{{ birds[exampleBird].name }}</p>
          <p>{{ birds[exampleBird].scientificName }}</p>
          <v-img
            class="mb-3"
            contain
            max-height="300"
            :src="require(`../assets/birds/${birds[exampleBird].images[0]}`)"
          >
          </v-img>
          <div class="text--primary">
            The {{ exampleBird }} plumage colour could be described as including
            {{ colorsToString }}.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click.prevent="randomBird">More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
<template>
  <v-item-group v-model="featherColor" multiple>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            tile
            :color="active ? color[item] : 'white'"
            class="d-flex align-center"
            :dark="active ? true : false"
            height="200"
            @click="toggle"
          >
            <v-scroll-y-transition>
              <div class="overline flex-grow-1 text-center">
                {{ item }}
              </div>
            </v-scroll-y-transition>
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
      items: birds.listOfFeatures.featherColor,
      featherColor: [],
      color: {
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
};
</script>
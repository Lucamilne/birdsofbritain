<template>
  <v-item-group
    multiple
    v-model="selected"
    @change="$emit('feather-color', indexFeatherColors())"
  >
    <v-row>
      <v-col v-for="item in items" :key="item" cols="6" sm="4" lg="3">
        <v-item v-slot="{ active, toggle }">
          <v-card tile v-ripple="false" class="pointer">
            <v-responsive v-ripple @click="toggle" class="text-center">
              <v-img
                contain
                :aspect-ratio="16 / 10"
                :src="
                  require(`../assets/feathers/${item
                    .replace('/', '')
                    .toLowerCase()}.webp`)
                "
              />
              <span class="overline">{{ item }}</span>
              <v-scroll-y-transition>
                <v-icon
                  v-if="active"
                  dark
                  color="green"
                  class="position-absolute top-right background ma-2"
                >
                  mdi-check-circle
                </v-icon>
              </v-scroll-y-transition>
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
        Blue: "light-blue accent-3",
        Brown: "brown",
        Cream: "brown lighten-3",
        Green: "light-green darken-1",
        Grey: "grey",
        Orange: "orange darken-1",
        "Pink/Purple": "deep-purple accent-1",
        Red: "red lighten-1",
        Yellow: "yellow accent-2",
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

<style scoped>
.position-absolute {
  position: absolute;
}
.top-right {
  top: 0;
  right: 0;
}
.background {
  background-color: white;
  border-radius: 50%;
}
.pointer {
  cursor: pointer;
}
.alpha {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
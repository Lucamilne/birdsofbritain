<template>
  <v-item-group v-model="selected" @change="$emit('habitat', indexToHabitat())">
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6" lg="4" xl="3">
        <v-item v-slot="{ active, toggle }">
            <v-img
              v-ripple
              @click="toggle"
              :aspect-ratio="4 / 3"
              :src="
                require(`../assets/habitats/${toKebabCase(
                  item
                )}.jpg`)
              "
              class="d-flex align-center text-center pointer"
            >
              <span class="overline white--text">
                {{ item.replaceAll(" and ", " & ") }}
              </span>
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
            </v-img>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script>
import birds from "@/common/birds.js";
import common from "@/common/utils.js";

export default {
  name: "HabitatSelect",
  data: function () {
    return {
      selected: null,
      items: birds.listOfFeatures.habitats,
    };
  },
  methods: {
    indexToHabitat() {
      return this.items[this.selected];
    },
    toKebabCase(item) {
      return common.toKebabCase(item);
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
</style>
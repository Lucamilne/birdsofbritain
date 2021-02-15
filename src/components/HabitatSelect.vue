<template>
  <v-item-group v-model="selected" @change="$emit('habitat', indexToHabitat())">
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            flat
            class="d-flex align-center"
            :dark="active ? true : false"
            @click="toggle"
          >
            <v-img
                :aspect-ratio="4 / 3"
                :src="require(`../assets/habitats/thumbnails/${toKebabCase(item)}.jpg`)"
                class="d-flex align-center text-center"
              >
                <span class="overline white--text"> {{ item.replaceAll(" and ", " & ") }} </span>
                <!-- <v-badge v-if="active" class="ml-1 position-absolute center" color="green" icon="mdi-check" /> -->
                  <v-icon v-if="active" dark color="green" class="position-absolute top-right background">
                    mdi-check-circle
                  </v-icon>
              </v-img>
          </v-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script>
import birds from "@/common/birds.js";

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
      return item.toLowerCase().replaceAll(" ", "-");
    },
  }
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
</style>
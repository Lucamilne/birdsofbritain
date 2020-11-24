<template>
  <v-container>
    <v-item-group v-model="selected">
      <v-subheader>Location Spotted</v-subheader>
      <v-row>
        <v-col v-for="(item, i) in items.habitats" :key="i" cols="6" md="3">
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'secondary'"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div class="display-1 flex-grow-1 text-center">
                  {{ item }}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "Identify",
  data: function () {
    return {
      items: {
        habitats: birds.listOfFeatures.habitat,
        feathers: birds.listOfFeatures.featherColor,
        beaks: birds.listOfFeatures.beak,
        legs: birds.listOfFeatures.legColor,
      },
      selected: [],
    };
  },
};
</script>
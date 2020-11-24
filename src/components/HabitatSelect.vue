<template>
  <v-item-group v-model="habitat">
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            tile
            :color="active ? 'primary' : 'white'"
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
  name: "HabitatSelect",
  data: function () {
    return {
      items: birds.listOfFeatures.habitat,
      habitat: null,
    };
  },
};
</script>
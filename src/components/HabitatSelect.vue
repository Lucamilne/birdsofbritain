<template>
  <v-item-group>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6" md="3">
        <v-item v-slot="{ active, toggle }">
          <v-card
            tile
            :color="active ? 'primary' : 'white'"
            class="d-flex align-center"
            :dark="active ? true : false"
            @click="
              toggle;
              $emit('habitat', item);
            "
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
  name: "HabitatSelect",
  data: function () {
    return {
      items: birds.listOfFeatures.habitat,
    };
  },
};
</script>
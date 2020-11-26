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
            @click="
              toggle;
              $emit('selected');
            "
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
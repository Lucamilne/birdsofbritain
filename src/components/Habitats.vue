<template>
  <v-card flat>
    <v-card-text>
      <v-item-group v-model="selected">
        <v-row>
          <v-col v-for="(habitat, i) in habitats" :key="i" cols="6" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-card
                tile
                :color="active ? 'primary' : 'white'"
                class="d-flex align-center"
                :dark="active ? true : false"
                @click="
                  toggle;
                  $router.push({
                    name: 'habitats',
                    params: { id: toKebabCase(habitat) },
                  });
                "
              >
                <v-responsive :aspect-ratio="4 / 3" class="d-flex align-center">
                  <div class="overline text-center">
                    {{ habitat }}
                  </div>
                </v-responsive>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-card-text>
  </v-card>
</template>

<script>
import birds from "@/common/birds.js";

export default {
  name: "BirdsByHabitat",
  data: function () {
    return {
      selected: null,
      birds: birds.data,
      habitats: birds.listOfFeatures.habitats,
      birdsByHabitat: birds.birdsByHabitat,
    };
  },
  methods: {
    toKebabCase(habitat) {
      return habitat.toLowerCase().replaceAll(" ", "-");
    },
  },
};
</script>

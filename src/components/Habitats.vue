<template>
  <v-container>
    <v-item-group v-model="selected">
      <v-row>
        <v-col
          v-for="(habitat, i) in habitats"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              flat
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
              <v-img
                :aspect-ratio="4 / 3"
                :src="require(`../assets/habitats/thumbnails/${toKebabCase(habitat)}.jpg`)"
                class="d-flex align-center text-center"
              >
                <span class="overline white--text"> {{ habitat.replaceAll(" and ", " & ") }} </span>
              </v-img>
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
  name: "Habitats",
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
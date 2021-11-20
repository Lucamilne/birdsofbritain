<template>
  <v-container>
    <v-card class="mx-auto" max-width="980">
      <v-card-title>{{ bird.name }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ bird.scientificName }}</v-card-subtitle>
      <v-carousel
        v-model="model"
        :show-arrows="bird.images.length > 1"
        :progress="bird.images.length > 1"
        :hide-delimiters="true"
        height="100%"
      >
        <v-carousel-item v-for="(image, i) in bird.images" :key="i" eager>
          <v-img :src="require(`../assets/birds/${image}`)" contain eager>
            <v-chip
              v-if="getImageMetadata(image)"
              label
              small
              color="secondary"
              class="position-absolute bottom left ma-4"
            >
              <v-icon small left> mdi-label </v-icon>
              {{ getImageMetadata(image) }}
            </v-chip>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <FavouriteToggle
        class="position-absolute top right ma-4"
        :bird="bird.name"
      />
      <v-divider></v-divider>
      <v-card-text class="text--primary position-relative">
        <v-card-title class="overline position-absolute top right mr-3">
          {{ bird.population.type }}
        </v-card-title>
        <template v-for="(section, index) in sections">
          <v-subheader class="px-0" :key="section.label">{{
            section.label
          }}</v-subheader>
          <p :key="index">{{ bird[section.value] }}</p>
        </template>
        <v-subheader class="px-0">When to find</v-subheader>
        <MonthsActive
          v-if="bird.monthsActive"
          :monthsActive="bird.monthsActive"
        />
        <div v-if="bird.features">
          <v-subheader class="px-0">{{
            bird.features.habitat.length > 1 ? "Habitats" : "Habitat"
          }}</v-subheader>
          <v-chip
            v-for="habitat in bird.features.habitat"
            :key="habitat"
            class="mr-2 mb-2"
            color="primary"
            label
            outlined
            :to="'/browse/habitat/' + toKebabCase(habitat)"
          >
            {{ habitat }}
          </v-chip>
        </div>
      </v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="item in items" :key="item.label">
              <td>{{ item.label }}</td>
              <td>{{ bird[item.value] }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <vuetify-audio
        v-if="bird.audio"
        :file="bird.audio"
        flat
        color="primary"
        :key="bird.name"
      ></vuetify-audio>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary" text @click.stop="$router.push('/browse')"
          >Browse</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import FavouriteToggle from "./FavouriteToggle.vue";
import MonthsActive from "./MonthsActive.vue";
import utils from "@/common/utils.js";

export default {
  name: "BirdProfile",
  props: ["bird"],
  components: {
    VuetifyAudio: () => import("vuetify-audio"),
    FavouriteToggle,
    MonthsActive,
  },
  data: function () {
    return {
      model: 0,
      sections: [
        { label: "Family", value: "family" },
        { label: "Description", value: "description" },
        { label: "Where to find", value: "found" },
      ],
      items: [
        { label: "Diet", value: "diet" },
        { label: "Length", value: "length" },
        { label: "Wingspan", value: "wingspan" },
        { label: "Weight", value: "weight" },
      ],
    };
  },
  methods: {
    toKebabCase(habitat) {
      return utils.toKebabCase(habitat);
    },
    getImageMetadata(image) {
      let metadata;

      if (image.includes("male")) {
        metadata = "Male";
      }
      if (image.includes("female")) {
        metadata = "Female";
      }
      if (image.includes("adult")) {
        metadata = "Adult";
      }
      if (image.includes("juvenile")) {
        metadata = "Juvenile";
      }

      return metadata;
    },
  },
};
</script>

<style scoped>
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.top {
  top: 0;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.bottom {
  bottom: 0;
}
</style>

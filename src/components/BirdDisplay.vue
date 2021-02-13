<template>
  <v-card class="mx-auto" max-width="980">
    <v-card-title>{{ bird.name }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ bird.scientificName }}</v-card-subtitle>
    <v-carousel
      v-model="model"
      :cycle="true"
      interval="4000"
      :show-arrows-on-hover="true"

    >
      <v-carousel-item
        v-for="(image, i) in bird.images"
        :key="i"
        :src="require(`../assets/birds/${image}`)"
      >
      </v-carousel-item>
    </v-carousel>
    <v-card-title class="overline position-absolute top right">
      {{ bird.population.type }}
    </v-card-title>
    <!-- <v-divider></v-divider> -->
    <v-card-text class="text--primary">
      <template v-for="(section, index) in sections">
        <v-subheader class="px-0" :key="section.label">{{ section.label }}</v-subheader>
        <p :key="index">{{ bird[section.value] }}</p>
      </template>
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
          @click="
            $router.push({
              name: 'habitats',
              params: { id: toKebabCase(habitat) },
            })
          "
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
    ></vuetify-audio>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" text @click.stop="$router.push('/browse')">Browse</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BirdDisplay",
  props: ["bird"],
  components: {
    VuetifyAudio: () => import("vuetify-audio"),
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
      return habitat.toLowerCase().replaceAll(" ", "-");
    },
  },
};
</script>

<style scoped>
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
</style>

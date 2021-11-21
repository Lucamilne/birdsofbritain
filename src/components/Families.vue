<template>
  <v-row>
    <v-col
      v-for="(family, index) in families"
      :key="index"
      cols="6"
      md="4"
      lg="3"
      xl="2"
    >
      <v-card
        style="height: 100%"
        @click="
          $router.push({
            name: 'family',
            params: { id: toKebabCase(index) },
          });
        "
        class="d-flex flex-column justify-space-between"
      >
        <div>
          <v-card-title
            ><span class="text-truncate">{{ index }}</span>
          </v-card-title>
          <v-card-text>
            <p class="mb-0">
              {{ family.description }}
            </p>
          </v-card-text>
        </div>
        <v-card-text class="pt-0">
          <span class="text-button secondary--text">Browse</span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import birds from "@/common/birds.js";
import utils from "@/common/utils.js";

export default {
  name: "Families",
  data: function () {
    return {
      birds: birds.data,
      families: birds.families,
    };
  },
  methods: {
    toKebabCase(family) {
      return utils.toKebabCase(family);
    },
  },
};
</script>
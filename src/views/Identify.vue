<template>
  <v-container class="fill-height">
    <v-card flat max-width="980" class="mx-auto">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle.title }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="28"
          v-text="step"
        ></v-avatar>
      </v-card-title>
      <v-card-subtitle>{{ currentTitle.subtitle }}</v-card-subtitle>

      <v-divider></v-divider>

      <v-card-text>
        <v-window v-model="step">
          <v-window-item :value="1">
            <HabitatSelect v-on:habitat="habitat = $event" />
          </v-window-item>

          <v-window-item :value="2">
            <FeatherSelect v-on:feather-color="featherColor = $event" />
          </v-window-item>

          <v-window-item :value="3">
            <BeakSelect v-on:beak="beak = $event" />
          </v-window-item>
        </v-window>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--">Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="step !== 3"
          :disabled="!currentValue"
          color="primary"
          depressed
          @click="step++"
        >
          Next
        </v-btn>
        <v-btn
          v-else-if="step === 3"
          :disabled="!currentValue"
          color="primary"
          depressed
          @click="search(habitat, featherColor, beak)"
        >
          Search
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";

import HabitatSelect from "../components/HabitatSelect";
import FeatherSelect from "../components/FeatherSelect";
import BeakSelect from "../components/BeakSelect";

export default {
  name: "Identify",
  components: {
    HabitatSelect,
    FeatherSelect,
    BeakSelect,
  },
  data: function () {
    return {
      habitat: null,
      featherColor: null,
      beak: null,
      step: 1,
      search: birds.searchCharacteristics
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return {
            title: "Where did you spot it?",
            subtitle: "Choose from the habitats listed below",
          };
        case 2:
          return {
            title: "What colours were the plumage?",
            subtitle: "The plumage is the bird's feathers collectively",
          };
        default:
          return {
            title: "How would you describe it's beak?",
            subtitle: "Choose all the options you believe to be true",
          };
      }
    },
    currentValue() {
      switch (this.step) {
        case 1:
          return this.habitat;
        case 2:
          return this.featherColor;
        default:
          return this.beak;
      }
    },
  },
};
</script>
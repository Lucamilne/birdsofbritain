<template>
  <v-container>
    <v-card flat>
      <v-card-title class="justify-space-between">
        <span>{{ currentTitle.title }}</span>
        <v-progress-circular
          :rotate="360"
          :size="52"
          :width="6"
          :value="currentProgress"
          color="primary"
        >
          <v-avatar
            color="primary lighten-2"
            class="subheading white--text d-none d-md-flex"
            size="28"
            v-text="step"
          ></v-avatar>
        </v-progress-circular>
      </v-card-title>
      <v-card-subtitle>{{ currentTitle.subtitle }}</v-card-subtitle>

      <v-progress-linear :value="currentProgress"></v-progress-linear>

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

          <v-window-item :value="4">
            <Results :results="results" />
          </v-window-item>
        </v-window>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--">Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="step < 3"
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
          @click="
            results = search(habitat, featherColor, beak);
            step++;
          "
        >
          Find
        </v-btn>
        <v-btn v-else text @click="$router.go()"> Reset </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";

import HabitatSelect from "../components/HabitatSelect";
import FeatherSelect from "../components/FeatherSelect";
import BeakSelect from "../components/BeakSelect";
import Results from "../components/Results";

export default {
  name: "Identify",
  components: {
    HabitatSelect,
    FeatherSelect,
    BeakSelect,
    Results,
  },
  data: function () {
    return {
      habitat: null,
      featherColor: null,
      beak: null,
      step: 1,
      search: birds.searchCharacteristics,
      results: null,
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
        case 3:
          return {
            title: "Describe it's beak",
            subtitle: "Choose all the options you believe to be true",
          };
        default:
          return {
            title: "Possible matches",
            subtitle: "Find the matches below based on your selections",
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
    currentProgress() {
      switch (this.step) {
        case 1:
          return 25;
        case 2:
          return 50;
        case 3:
          return 75;
        default:
          return 100;
      }
    },
  },
  methods: {
    resetIdentificationProcess() {
      this.habitat = null;
      this.featherColor = null;
      this.beak = null;
      this.step = 1;
    },
  },
};
</script>
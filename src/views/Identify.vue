<template>
  <v-container class="fill-height">
    <v-card tile outlined width="100%">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>
      <v-card-text>
        <v-window v-model="step">
          <v-window-item :value="1">
            <HabitatSelect v-on:selected="step++"/>
          </v-window-item>

          <v-window-item :value="2">
            <FeatherSelect />
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
              <span class="caption grey--text">Thanks for signing up!</span>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import HabitatSelect from "../components/HabitatSelect";
import FeatherSelect from "../components/FeatherSelect";

export default {
  name: "Identify",
  components: {
    HabitatSelect,
    FeatherSelect,
  },
  data: function () {
    return {
      selected: [],
      step: 1,
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Where did you spot it?";
        case 2:
          return "What colours are the feathers?";
        default:
          return "Account created";
      }
    },
  },
};
</script>
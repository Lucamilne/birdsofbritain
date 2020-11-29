<template>
  <v-container>
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.label">
        {{ tab.label }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab.label">
        <component :is="tab.component"></component>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import Birds from "../components/Birds";
// import BirdsByHabitat from "../components/BirdsByHabitat";

export default {
  name: "Browse",
  data: function () {
    return {
      tabs: [
        { label: "Species", icon: "", component: Birds },
        // { label: "Habitat", icon: "", component: BirdsByHabitat },
        // { label: "Habitat", icon: "", component: Birds },
      ],
    };
  },
};
</script>
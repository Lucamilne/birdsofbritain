<template>
  <v-tabs centered >
    <v-tab v-for="tab in tabs" :key="tab.label">
      {{ tab.label }}
    </v-tab>
    <v-tab-item v-for="tab in tabs" :key="tab.label">
      <component :is="tab.component"></component>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import Birds from "../components/Birds";
import Habitats from "../components/Habitats";
import Families from "../components/Families";

export default {
  name: "Browse",
  data: function () {
    return {
      tabs: [
        { label: "Species", icon: "", component: Birds },
        { label: "Habitat", icon: "", component: Habitats },
        { label: "Family", icon: "", component: Families }
      ],
    };
  },
};
</script>

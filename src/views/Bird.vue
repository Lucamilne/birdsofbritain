<template>
  <p v-if="!birds[bird]">404: doesn't exist</p>
  <v-container v-else>
    <BirdDisplay :bird="birds[bird]" />
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";
import BirdDisplay from "@/components/BirdDisplay";

export default {
  name: "Bird",
  components: {
    BirdDisplay,
  },
  data: function () {
    return {
      birds: birds.data,
    };
  },
  computed: {
    bird() {
      return birds.birdsByPath()[this.$route.params.id];
    },
  },
};
</script>
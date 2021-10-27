<template>
  <p v-if="!birds[bird]">404: doesn't exist</p>
  <v-container v-else>
    <BirdProfile :bird="birds[bird]" />
  </v-container>
</template>

<script>
import birds from "@/common/birds.js";
import BirdProfile from "@/components/BirdProfile";

export default {
  name: "Bird",
  components: {
    BirdProfile,
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

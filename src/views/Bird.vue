<template>
    <NotFound v-if="!birds[bird]" />
    <BirdProfile :bird="birds[bird]" v-else />
</template>

<script>
import birds from "@/common/birds.js";
import NotFound from "./NotFound.vue";
import BirdProfile from "@/components/BirdProfile";

export default {
    name: "Bird",
    components: {
        NotFound,
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

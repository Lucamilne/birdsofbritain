<template>
    <BirdProfile :bird="birds[bird]" v-if="bird"/>
</template>

<script>
import birds from "@/common/birds.js";
import BirdProfile from "@/components/BirdProfile";

export default {
    name: "Bird",
    components: {
        BirdProfile
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
        updated() {
        if (!this.bird) {
            this.$router.replace({ name: "not-found" });
        }
    },
};
</script>

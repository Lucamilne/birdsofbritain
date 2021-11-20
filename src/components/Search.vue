<template>
    <v-autocomplete
        v-model="value"
        dense
        filled
        hide-details
        single-line
        append-icon="mdi-magnify"
        :items="listOfBirds"
        label="Search"
        outlined
        @input="navigateTo(value)"
    >
    </v-autocomplete>
</template>

<script>
import birds from "@/common/birds.js";
import utils from "@/common/utils.js";

export default {
    name: "Search",
    data: function () {
        return {
            value: "",
        };
    },
    computed: {
        listOfBirds() {
            return Object.keys(birds.data);
        },
    },
    methods: {
        toKebabCase(bird) {
            return utils.toKebabCase(bird);
        },
        navigateTo(value) {
            if (value) {
                this.$router
                    .push({
                        name: "birds",
                        params: { id: this.toKebabCase(value) },
                    })
                    .catch(() => {});
            } else {
                return;
            }
        },
    },
};
</script>

<style>
.v-autocomplete.v-select--is-menu-active .v-input__icon--append .v-icon {
    transform: none;
}
</style>

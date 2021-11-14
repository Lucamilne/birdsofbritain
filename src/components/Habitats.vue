<template>
    <v-item-group v-model="selected">
        <v-row>
            <v-col v-for="(habitat, i) in habitats" :key="i" cols="6" lg="4" xl="3">
                <v-item v-slot="{ active, toggle }">
                    <v-card
                        flat
                        :color="active ? 'primary' : 'white'"
                        class="d-flex align-center"
                        :dark="active ? true : false"
                        @click="
                            toggle;
                            $router.push({
                                name: 'habitat',
                                params: { id: toKebabCase(habitat) },
                            });
                        "
                    >
                        <v-img
                            :aspect-ratio="4 / 3"
                            :src="require(`../assets/habitats/${toKebabCase(habitat)}.jpg`)"
                            class="d-flex align-center text-center"
                        >
                            <span class="overline white--text">
                                {{ habitat.replaceAll(" and ", " & ") }}
                            </span>
                        </v-img>
                    </v-card>
                </v-item>
            </v-col>
        </v-row>
    </v-item-group>
</template>

<script>
import birds from "@/common/birds.js";
import common from "@/common/utils.js";

export default {
    name: "Habitats",
    data: function () {
        return {
            selected: null,
            birds: birds.data,
            habitats: birds.listOfFeatures.habitats,
            birdsByHabitat: birds.birdsByHabitat,
        };
    },
    methods: {
        toKebabCase(habitat) {
            return common.toKebabCase(habitat);
        },
    },
};
</script>

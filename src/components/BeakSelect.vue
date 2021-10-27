<template>
    <v-item-group v-model="selected" @change="$emit('beak', indexToBeak())">
        <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="6" lg="4" xl="3">
                <v-item v-slot="{ active, toggle }">
                    <v-card
                        tile
                        :color="active ? 'primary' : 'white'"
                        class="d-flex align-center"
                        :dark="active ? true : false"
                        @click="toggle"
                    >
                        <v-responsive :aspect-ratio="4 / 3" class="d-flex align-center">
                            <v-img
                                :class="`icon ${active ? 'invert' : ''}`"
                                :src="require(`../assets/icons/${beaks[item]}.svg`)"
                            >
                            </v-img>

                            <div class="overline text-center">
                                {{ item }}
                            </div>
                            <v-scroll-y-transition>
                                <v-icon
                                    v-if="active"
                                    dark
                                    color="green"
                                    class="position-absolute top-right background ma-2"
                                >
                                    mdi-check-circle
                                </v-icon>
                            </v-scroll-y-transition>
                        </v-responsive>
                    </v-card>
                </v-item>
            </v-col>
        </v-row>
    </v-item-group>
</template>

<script>
import birds from "@/common/birds.js";

export default {
    name: "FeatherSelect",
    data: function () {
        return {
            birds: birds.data,
            items: birds.listOfFeatures.beak,
            selected: null,
            beaks: {
                Short: "short-beak",
                Long: "long-beak",
                Thin: "thin-beak",
                Regular: "medium-thickness",
                Chunky: "chunky-beak",
                Hooked: "hooked-beak",
                Curved: "curved-beak",
                "Duck-like": "duck-like-beak",
                Powerful: "powerful-beak",
            },
        };
    },
    methods: {
        indexToBeak() {
            return this.items[this.selected];
        },
    },
};
</script>

<style scoped>
.icon {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.15;
    width: 60%;
}
.invert {
    filter: invert(1);
    transform: scale(1.25);
    transition: all 650ms ease;
}
.position-absolute {
    position: absolute;
}
.top-right {
    top: 0;
    right: 0;
}
.background {
    background-color: white;
    border-radius: 50%;
}
</style>
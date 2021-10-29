<template>
    <v-container>
        <v-card flat width="100%">
            <v-card-title>
                {{ currentTitle.title }}
            </v-card-title>
            <v-card-subtitle>{{ currentTitle.subtitle }}</v-card-subtitle>
            <v-stepper v-model="step" tile flat>
                <v-stepper-header>
                    <v-stepper-step color="secondary" step="1" :complete="step > 1">
                        <span>Habitat</span>
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step color="secondary" step="2" :complete="step > 2">
                        <span>Plumage</span>
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step color="secondary" step="3">
                        <span>Beak</span>
                    </v-stepper-step>
                </v-stepper-header>
            </v-stepper>
            <v-window v-model="step" class="my-4">
                <v-window-item :value="1">
                    <HabitatSelect v-on:habitat="habitat = $event" />
                </v-window-item>

                <v-window-item :value="2">
                    <FeatherSelect v-on:feather-color="featherColor = $event" />
                </v-window-item>

                <v-window-item :value="3">
                    <BeakSelect v-on:beak="beak = $event" />
                </v-window-item>
            </v-window>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn :disabled="step === 1" text @click="step--">Back </v-btn>
                <v-spacer></v-spacer>
                <v-btn v-if="step < 3" :disabled="!currentValue" color="primary" depressed @click="step++">
                    Next
                </v-btn>
                <v-btn
                    v-else-if="step === 3"
                    :disabled="!currentValue"
                    color="primary"
                    depressed
                    @click="
                        $router.push({
                            name: 'results',
                            query: { habitat: habitat, featherColor: featherColor.join(), beak: beak },
                        })
                    "
                >
                    Find
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import HabitatSelect from "../components/HabitatSelect";
import FeatherSelect from "../components/FeatherSelect";
import BeakSelect from "../components/BeakSelect";

export default {
    name: "Identify",
    components: {
        HabitatSelect,
        FeatherSelect,
        BeakSelect,
    },
    data: function () {
        return {
            habitat: "",
            featherColor: "",
            beak: "",
            step: 1,
        };
    },
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return {
                        title: "Where did you spot it?",
                        subtitle: "Choose from the habitats listed below",
                    };
                case 2:
                    return {
                        title: "What colours were in the plumage?",
                        subtitle: "The plumage is the bird's feathers collectively",
                    };
                default:
                    return {
                        title: "Describe it's beak",
                        subtitle: "Choose from the options listed below",
                    };
            }
        },
        currentValue() {
            switch (this.step) {
                case 1:
                    return this.habitat;
                case 2:
                    return this.featherColor;
                default:
                    return this.beak;
            }
        },
        currentProgress() {
            switch (this.step) {
                case 1:
                    return 25;
                case 2:
                    return 50;
                default:
                    return 75;
            }
        },
    },
};
</script>

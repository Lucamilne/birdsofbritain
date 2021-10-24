<template>
    <v-container fluid class="fill-height">
        <v-card tile dark height="100%" width="100%" class="hero-background d-flex flex-column justify-space-between">
            <v-card-text class="text-overline">Discover </v-card-text>
            <v-card-text class="fadein">
                <v-img :max-width="titleWidth" :src="require('../assets/text/title.webp')"></v-img>
                <v-list-item-subtitle :class="`mt-2 text-wrap ${fontWidth}`"
                    >A comprehensive identifier of both native and migratory birds.</v-list-item-subtitle
                >
            </v-card-text>
            <v-card-actions>
                <v-btn
                    outlined
                    color="light"
                    v-for="item in items"
                    :key="item.name"
                    link
                    @click.stop="
                        $router.push(item.route).catch(() => {
                            $router.go();
                        })
                    "
                >
                    {{ item.name }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Home",
    data: function () {
        return {
            items: [
                { name: "Identify", icon: "mdi-magnify", route: "/identify" },
                { name: "Browse", icon: "mdi-binoculars", route: "/browse" },
            ],
            images: [
                { alt: "magpie", path: "magpie.jpg" },
                { alt: "robin", path: "robin.jpg" },
                { alt: "blackbird", path: "blackbird.jpg" },
                { alt: "kingfisher", path: "kingfisher.jpg" },
            ],
        };
    },
    computed: {
        titleWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case "lg":
                    return "60%";
                case "xl":
                    return "50%";
                default:
                    return "100%";
            }
        },
        fontWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case "lg":
                    return "subtitle-2";
                case "xl":
                    return "headline";
                default:
                    return "subtitle-2";
            }
        },
    },
};
</script>

<style scoped>
.hero-background {
    background-image: linear-gradient(to bottom, rgba(187, 200, 186, 0.6) 0%, rgba(84, 103, 71, 0.6) 100%),
        url("../assets/images/kingfisher.jpg");
    background-blend-mode: soft-light;
    background-size: cover;
    background-position: center center;
    padding: 2rem;
}
.fadein {
    animation: 2s ease-in fadein;
}
.hero-title {
    font-size: 12rem;
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

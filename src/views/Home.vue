<template>
    <v-container fluid class="fill-height">
        <v-card tile dark height="100%" width="100%" class="d-flex flex-column justify-space-between" :class="{ 'hero-background': isLargeScreen, 'hero-background-mobile': !isLargeScreen }">
            <video v-if="isLargeScreen" autoplay loop muted playsinline class="background-video">
                <source src="/videos/robin_compressed.mp4" type="video/mp4" /> Your browser does not support the video tag.
            </video>

            <div v-if="isLargeScreen" class="overlay"></div>

            <v-card-text class="text-overline">Discover </v-card-text>
            <v-card-text class="fadein">
                <v-img :max-width="titleWidth" :src="require('../assets/text/title.webp')"></v-img>
                <v-list-item-subtitle :class="`mt-2 text-wrap ${fontWidth}`">
                    A comprehensive identifier of both native and migratory birds.
                </v-list-item-subtitle>
            </v-card-text>
            <v-card-actions>
                <v-btn outlined color="light" v-for="item in items" :key="item.name" link :to="item.route">
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
            ]
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
        isLargeScreen() {
            return this.$vuetify.breakpoint.lgAndUp; // Applies for lg and xl screens
        }
    },
};
</script>

<style scoped>
.hero-background-mobile {
    background-image: linear-gradient(to bottom, rgba(187, 200, 186, 0.6) 0%, rgba(84, 103, 71, 0.6) 100%),
        url("../assets/images/robin.webp");
    background-blend-mode: soft-light;
    background-size: cover;
    background-position: center center;
    padding: 2rem;
}

.hero-background {
    position: relative;
    overflow: hidden;
    padding: 2rem;
    background-color: #2B331F;
}

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scaleX(-1);
    background-color: #2B331F;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(50, 60, 50, 0.75) 0%, rgba(30, 40, 30, 0.75) 100%);
    z-index: 0;
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

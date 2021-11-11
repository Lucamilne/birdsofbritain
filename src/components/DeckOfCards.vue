<template>
    <v-card rounded>
        <v-responsive :aspect-ratio="9 / 14">
            <v-sheet color="secondary" elevation="5" height="100%" class="card-back"></v-sheet>
        </v-responsive>
    </v-card>
</template>

<script>
export default {
    name: "DeckOfCards",
};
</script>

<style scoped>
.card-back {
    background-image: url("../assets/images/birds-light.png");
    background-repeat: repeat;
}
</style>
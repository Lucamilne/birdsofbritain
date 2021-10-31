<template>
    <v-container fluid class="fill-height justify-center">
        <v-card flat>
            <v-card-title class="justify-center">{{ title || "404: Not Found" }}</v-card-title>
            <v-card-subtitle class="text-center text-wrap">{{
                subtitle || "The requested page cannot be found."
            }}</v-card-subtitle>
            <v-divider v-if="btn"></v-divider>
            <v-card-actions v-if="btn" class="d-flex justify-center">
                <v-btn text color="primary" :to="'/' + btn">{{ btn }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "FullscreenMessage",
    props: ["title", "subtitle", "btn"],
};
</script>

<template>
  <v-container>
    This is the Home page
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      items: [
        { name: "Find", icon: "mdi-magnify", route: "/find" },
        { name: "Identify", icon: "mdi-binoculars", route: "/identify" },
        { name: "Birds", icon: "mdi-bird", route: "/birds" },
        { name: "Guide", icon: "mdi-book-open-outline", route: "/guide" },
      ],
    };
  },
};
</script>
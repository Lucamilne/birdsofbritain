<template>
  <v-container fluid>
    <v-card tile dark color="secondary">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Discover</div>
          <v-list-item-title class="text-h5 mb-1"> Birds of Britain. </v-list-item-title>
          <v-list-item-subtitle
            >A comprehensive identifier of both native and migratory
            birds.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn
          outlined
          color="tertiary"
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
          <v-icon right>{{ item.icon }}</v-icon>
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
    };
  },
};
</script>

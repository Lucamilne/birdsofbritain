<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="item.name">
        <v-card tile flat outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">
                Headline 5
              </v-list-item-title>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-icon dark>{{ item.icon }}</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          link
          @click.stop="$router.push(item.route)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Birds of Britain</v-toolbar-title>
      <v-spacer></v-spacer>
      <Search />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: "App",
  components: {
    Search,
  },
  data: () => ({
    drawer: false,
    value: null,
    items: [
      { name: "Identify", icon: "mdi-binoculars", route: "/identify" },
      { name: "Browse", icon: "mdi-bird", route: "/browse" },
      { name: "Guide", icon: "mdi-book-open-outline", route: "/guide" },
    ],
  }),
};
</script>

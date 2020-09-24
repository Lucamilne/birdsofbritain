<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.name" link @click.stop="$router.push(item.route)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="light-green" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Birds of Britain</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="light-green" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: () => ({
    drawer: false,
    items: [
      { name: "Home", icon: "mdi-home", route: "/" },
      { name: "Find", icon: "mdi-magnify", route: "/find" },
      { name: "Identify", icon: "mdi-binoculars", route: "/identify" },
      { name: "Birds", icon: "mdi-bird", route: "/birds" },
      { name: "Guide", icon: "mdi-book-open-outline", route: "/guide" },
    ],
  }),
};
</script>

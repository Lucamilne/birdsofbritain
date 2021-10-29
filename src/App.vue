<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          link
          :to="item.path"
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

    <v-app-bar app color="primary" dark class="app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <Search />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary" class="app-bar">
      <a v-for="link in links" :key="link.title" :href="link.href" target="_blank">
        <v-icon dark class="mr-1" :title="link.title">{{link.icon}}</v-icon> 
      </a>
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
      { name: "Home", icon: "mdi-home", path: "/" },
      { name: "Identify", icon: "mdi-magnify", path: "/identify" },
      { name: "Browse", icon: "mdi-binoculars", path: "/browse" },
      { name: "Favourites", icon: "mdi-heart", path: "/favourites" },
    ],
    links: [
      { href: "https://github.com/Lucamilne/birdsofbritain", icon: "mdi-github", title: "Github" },
      { href: "https://www.linkedin.com/in/luca-milne/", icon: "mdi-linkedin", title: "LinkedIn" },
    ]
  }),
};
</script>
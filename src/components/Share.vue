<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" color="grey" @click="shareProfile">
          <v-icon>mdi-share</v-icon>
        </v-btn>
      </template>
      <span>Share</span>
    </v-tooltip>
    <v-snackbar top v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="secondary" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
 
<script>
export default {
  name: "Share",
  props: ["bird"],
  data: () => ({
    snackbar: false,
    text: "",
    timeout: 2000,
  }),
  methods: {
    async shareProfile() {
      const shareData = {
        title: this.bird,
        text: "Learn more about this bird and more at Birds of Britain",
        url: new URL(location.href)
      };

      try {
        await navigator.share(shareData);
        this.text = "Bird shared successfully";
      } catch (err) {
        this.text = "Error: " + err;
      } finally {
        this.snackbar = true;
      }
    },
  },
};
</script>

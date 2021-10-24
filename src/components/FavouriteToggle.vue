<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          :color="localFavourites.includes(bird) ? 'red' : 'grey'"
          @click="toggleFavourite"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </template>
      <span>{{ localFavourites.includes(bird) ? 'Remove favourite' : 'Favourite' }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "FavouriteToggle",
  props: ["bird"],
  data: () => ({
    localFavourites: localStorage.getItem("favouriteBirds")
      ? JSON.parse(localStorage.getItem("favouriteBirds"))
      : [],
  }),
  methods: {
    toggleFavourite() {
      let arrayOfFavourites = this.localFavourites;
      const index = arrayOfFavourites.indexOf(this.bird);

      if (index < 0) {
        arrayOfFavourites.push(this.bird);

        localStorage.setItem(
          "favouriteBirds",
          JSON.stringify(arrayOfFavourites)
        );
      } else {
        arrayOfFavourites.splice(index, 1);

        localStorage.setItem(
          "favouriteBirds",
          JSON.stringify(arrayOfFavourites)
        );
      }

      this.localFavourites = localStorage.getItem("favouriteBirds")
        ? JSON.parse(localStorage.getItem("favouriteBirds"))
        : [];
    },
  },
};
</script>
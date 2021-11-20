<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-chip
          label
          small
          dark
          v-bind="attrs"
          v-on="on"
          :color="colours[conservationStatus]"
          class="overline"
        >
          {{ conservationStatus }}
        </v-chip>
      </template>
      <span>Conservation Status</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "conservationStatus",
  props: ["conservationStatus"],
  data: () => ({
    colours: {
      Green: "green darken-2",
      Amber: "amber darken-2",
      Red: "red",
    },
  }),
};
</script>

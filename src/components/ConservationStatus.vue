<template>
  <v-chip
    label
    small
    dark
    :color="colours[conservationStatus]"
    class="overline"
  >
    {{ conservationStatus }}
  </v-chip>
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

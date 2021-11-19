<template>
  <v-row no-gutters>
    <v-col v-for="month of months" :key="month" cols="3" sm="2" md="1">
      <v-card
        tile
        flat
      >
        <v-card-text
          :class="`py-1 px-0 overline text-center ${
            monthsActive.includes(month)
              ? 'font-weight-black secondary--text'
              : 'text--disabled'
          }`"
          >{{ month }}</v-card-text
        >
        <v-progress-linear
          bottom
          :value="monthsActive.includes(month) ? 100 : 0"
          :color="monthsActive.includes(month) ? 'secondary' : 'grey'"
        ></v-progress-linear>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MonthsActive",
  props: ["monthsActive"],
  data: () => ({
    months: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  }),
};
</script>

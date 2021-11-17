<template>
  <v-row no-gutters>
    <v-col v-for="(month, index) of months" :key="month" cols="3" sm="2" md="1">
      <v-card tile flat :color="`${monthsActive.includes(index) ? 'secondary' : 'grey'} lighten-3`">
        <v-card-text :class="`py-3 px-0 caption text-center ${monthsActive.includes(index) ? 'font-weight-black primary--text' : 'text--disabled'}`">{{ month }}</v-card-text>
        <v-progress-linear absolute bottom :value="monthsActive.includes(index) ? 100 : 0"></v-progress-linear>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MonthsActive",
  props: ["monthsActive"],
  data: () => ({
    months: {
      jan: "January",
      feb: "February",
      mar: "March",
      apr: "April",
      may: "May",
      jun: "June",
      jul: "July",
      aug: "August",
      sep: "September",
      oct: "October",
      nov: "November",
      dec: "December",
    },
  }),
};
</script>

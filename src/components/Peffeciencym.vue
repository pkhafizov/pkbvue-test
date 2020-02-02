<template>
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="portfolioEfficiencyM"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    headers: [
      { text: 'Месяц', value: 'cal_date' },
      { text: 'Эффективность %', value: 'efficiency' }
    ],
    portfolioEfficiencyM: [
      {
        cal_date: '2019-01-01',
        efficiency: 15
      }
    ],
  })
}
</script>
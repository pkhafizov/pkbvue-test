<template>
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="portfolioEfficiency"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    source: String,
  },
  data: () => ({
    headers: [
      { text: 'Название', value: 'portfolio_name' },
      { text: 'Эффективность %', value: 'percent' }
    ],
    portfolioEfficiency: [
      // {
      //   portfolio_name: 'portfolio_1',
      //   percent: 15
      // }
    ],
  }),
  mounted() {
    axios.get('/portfolios/efficiency')
      .then(res => {
        const data = res.data;
        for (const key in data) {
          const efficiency = data[key]
          this.portfolioEfficiency.push(efficiency)
        }
      })
      .catch(error => { error })
  },
}
</script>
<template>
  <v-app id="inspire">
    <v-data-table :headers="headers" :items="portfolios" :items-per-page="10" class="elevation-1"></v-data-table>
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
      { text: 'Ид', value: 'id_portfolio' },
      { text: 'Название', value: 'portfolio_name' },
      { text: 'Дата подписания', value: 'sign_date' },
      { text: 'Дата окончания', value: 'end_date' }
    ],
    portfolios: [
      // {
      //   id_portfolio: 1,
      //   portfolio_name: 'portfolio_1',
      //   sign_date: '2019-01-01',
      //   end_date: '2020-01-01'
      // }
    ],
  }),
  mounted() {
    axios.get('/portfolios')
      .then(res => {
        const data = res.data;
        for (const key in data) {
          const portfolio = data[key]
          this.portfolios.push(portfolio)
        }
      })
      .catch(error => { error })
  },
}
</script>
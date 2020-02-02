<template>
  <v-app id="inspire">
    <v-data-table :headers="headers" :items="payments" :items-per-page="10" class="elevation-1"></v-data-table>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    headers: [
      { text: 'Ид долга', value: 'id_debt' },
      { text: 'Сумма', value: 'payment_sum' },
      { text: 'Дата', value: 'date' }
    ],
    payments: [
      {
        id_debt: 1,
        payment_sum: 10,
        date: '2019-01-01'
      }
    ],
  }),
}
</script>
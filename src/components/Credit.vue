<template>
  <v-app id="inspire">
    <v-data-table :headers="headers" :items="debts" :items-per-page="10" class="elevation-1"></v-data-table>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    headers: [
      { text: 'Ид клиента', value: 'id_person' },
      { text: 'Ид долга', value: 'id_debt' },
      { text: 'Ид портфеля', value: 'id_portfolio' },
      { text: 'Сумма долга', value: 'debt_sum' }
    ],
    debts: [
      {
        id_person: 1,
        id_debt: 1,
        id_portfolio: 1,
        debt_sum: 300
      }
    ],
  })
}
</script>
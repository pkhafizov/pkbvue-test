<template>
  <v-app id="inspire">
    <v-data-table :headers="headers" :items="calendar" :items-per-page="10" class="elevation-1"></v-data-table>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    headers: [
      { text: 'Дата', value: 'cal_date' }
    ],
    calendar: [
      {
        cal_date: '2020-01-01'
      }
    ],
  })
}
</script>
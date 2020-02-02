<template>
  <v-app id="inspire">
    <v-data-table :headers="headers" :items="persons" :items-per-page="10" class="elevation-1"></v-data-table>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    source: String,
  },
  data: () => ({
    headers: [
      { text: 'ИД', value: 'id_person' },
      { text: 'ФИО', value: 'fio' }
    ],
    persons: [
      // {
      //   id_person: 1,
      //   fio: 'Иванов Иван Иванович'
      // }
    ],
  }),
  mounted() {
    axios.get('/persons')
      .then(res => {
        const data = res.data;
        for (const key in data) {
          const person = data[key]
          this.persons.push(person)
        }
      })
      .catch(error => { error })
  },
}
</script>
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import vuetify from './plugins/vuetify';
import router from './routes';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.get['Accepts'] = 'application/json';

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app');

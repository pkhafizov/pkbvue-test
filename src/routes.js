import Vue from 'vue';
import VueRouter from 'vue-router';

import Person from './components/Person.vue';
import Portfolio from './components/Portfolio.vue';
import Pmonthly from './components/Pmontly.vue';
import Peffeciency from './components/Peffeciency.vue';
import Peffeciencym from './components/Peffeciencym.vue';
import Credit from './components/Credit.vue';
import Debet from './components/Debet.vue';
import Calendar from './components/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', component: Person },
  { path: '/person', component: Person },
  { path: '/portfolio', component: Portfolio },
  { path: '/pmonthly', component: Pmonthly },
  { path: '/peffeciency', component: Peffeciency },
  { path: '/peffeciencym', component: Peffeciencym },
  { path: '/credit', component: Credit },
  { path: '/debet', component: Debet },
  { path: '/calendar', component: Calendar }
];

export default new VueRouter({ mode: 'history', routes });

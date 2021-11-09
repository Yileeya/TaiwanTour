import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/store';
import 'jquery/src/jquery';
import 'bootstrap';
import 'lodash';
import "./assets/scss/app.scss";
import './store/mixin';

import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

import 'fontawesome-4.7';
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

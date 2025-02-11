// import Vue from 'vue';
import { Vue } from 'vue-demi';
import App from './App.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

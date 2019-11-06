import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import dateFilter from "@/filters/date.filter";

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

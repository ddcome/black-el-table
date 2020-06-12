import Vue from 'vue'
import App from './App.vue'
// 插件
import './plugins/element.js';
Vue.config.productionTip = false

import BlackElTable from '../packages/index';
Vue.use(BlackElTable);

new Vue({
  render: h => h(App),
}).$mount('#app');

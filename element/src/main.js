import Vue from 'vue'
import App from './App.vue'
import WyButtom from'../packages'

Vue.config.productionTip = false
Vue.use(WyButtom);

new Vue({
  render: h => h(App),
}).$mount('#app')

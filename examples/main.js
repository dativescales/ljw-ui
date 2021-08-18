import Vue from 'vue'
import App from './App.vue'
import LjwUI from '../packages'
Vue.config.productionTip = false
Vue.use(LjwUI)
new Vue({
  render: h => h(App)
}).$mount('#app')

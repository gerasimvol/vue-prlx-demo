import Vue from 'vue'
import App from './App.vue'
import VuePrlx from 'vue-prlx'

import './assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(VuePrlx)

new Vue({
  render: h => h(App)
}).$mount('#app')

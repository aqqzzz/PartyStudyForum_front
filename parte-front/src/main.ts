import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'ant-design-icons/dist/anticons.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App as any)
}).$mount('#app')

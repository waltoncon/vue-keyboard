import Vue from 'vue'
import App from './App.vue'
import VueKeyboard from './vue-keyboard'
import './vue-keyboard/styles.scss'

Vue.use(VueKeyboard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import store from '@/vuex/store'
import './firefiles/firebase'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'

Vue.use(Vuetify)
Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

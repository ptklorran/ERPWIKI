import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './actions'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

export default store

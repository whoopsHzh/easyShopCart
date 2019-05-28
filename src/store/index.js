import actions from './action'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store

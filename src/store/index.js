import Vue from 'vue'
import Vuex from 'vuex'
import userinfo from './userinfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userinfo,
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {},
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem("token", token);
    },
    removeToken(state) {
      state.token = ''
      localStorage.removeItem("token");
    },
    setUserInfo(state, data) {
      state.userInfo = data
    },
  },
  actions: {
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo,
  }
})

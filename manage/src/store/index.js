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
      sessionStorage.setItem("token", token);
    },
    removeToken(state) {
      state.token = ''
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
    setUserInfo(state, data) {
      state.userInfo = data
      sessionStorage.setItem('userInfo', JSON.stringify(data))
    },
  },
  actions: {
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo,
  }
})

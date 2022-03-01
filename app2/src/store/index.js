// vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'
// 将 vuex 持久化到 本地缓存中
import VuexPersistence from 'vuex-persist'
import {User} from '@/api/user'


import {UniStorage} from '@/utils/uni-storage'

Vue.use(Vuex)

// 实例化 VuexPersistence 对象
const vuexLocal = new VuexPersistence({
  storage: new UniStorage()
})

export default new Vuex.Store({
  state: {
    token: '',
    userInfo:{}
  },
  mutations: {
    setToken (state, value) {
      state.token = value
    },
    removeToken(state) {
      state.token = ''
    },
    setUserInfo(state, data) {
      state.userInfo = data
    },
  },
  actions: {
    // 设置用户信息
    async setUser(context) {
      const data = await User.getAuthority()
      context.commit('setUserInfo', data)
    }
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo,
  },
  plugins: [vuexLocal.plugin]
})

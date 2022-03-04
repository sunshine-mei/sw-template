import Vue from 'vue'
import uView from 'uview-ui'

import App from '@/App'
import store from '@/store/index.js'
import {Token} from '@/utils/token-parse'

// 引入dayjs
import dayjs from 'dayjs'

// 使用引入树维pc端框架的css,并使用icon
import 'sw-ui/lib/theme-chalk/index.css'

// 注册全局组件开始
import emptyData from '@/components/common/emptyData.vue'

Vue.component('emptyData', emptyData)

// 注册全局组件结束

Vue.config.productionTip = false

Vue.prototype.$dayjs = dayjs
// 挂载 vuex 到 vue实例中
Vue.prototype.$store = store

// 引入 uView 组件
Vue.use(uView)

//uView2.x单位默认为px
uni.$u.config.unit = 'rpx'

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})


~(async () => {

  /*等待 vuex 从 本地缓存中初始化成功*/
  await app.$store.restored

  const request = uni.$u.http

  // 获取 static 静态文件夹下的域名配置信息
  let BACKEND_BASE_URL

  // #ifndef APP-PLUS
  BACKEND_BASE_URL = await request.get('/h5/static/serverConfig.json').then(({data}) => data.BACKEND_BASE_URL)
  // #endif

  // #ifdef APP-PLUS
  BACKEND_BASE_URL = '${BACKEND_BASE_URL}'
  // #endif

  // 配置请求的baseUrl
  request.setConfig((config) => {
    config.baseURL = BACKEND_BASE_URL
    config.header = {
      'content-type': 'application/json;charset=UTF-8'
    }
    return config
  })
  Vue.prototype.baseUrl = BACKEND_BASE_URL

  // 拦截器配置的挂载放在 request.setConfig() 后，防止拦截器配置被覆盖
  require('@/api/request.js')(app)

  /*处理token信息*/
  const token = await Token(BACKEND_BASE_URL) || app.$store.state.token
  if (token) {
    app.$store.commit('setToken', token)
    // app.$store.dispatch('setUser')
  }

  // #ifdef H5
  // 处理地址栏中，ticket重复，未清空的bug
  if (token) {
    const reg = RegExp(/\?ticket/)
    if (location.href.match(reg)) {
      const endIdx = location.href.indexOf('?ticket')
      history.replaceState(null, null, location.href.substring(0, endIdx))
    }
  }
  // #endif

  app.$mount()
})()

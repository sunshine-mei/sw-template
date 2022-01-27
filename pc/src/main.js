import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/http'
import api from './api/api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import SwUI from 'sw-ui';
import 'sw-ui/lib/theme-chalk/index.css';
import './assets/scss/base.scss'
import dayjs from "dayjs";

Vue.use(ElementUI)
Vue.use(SwUI);

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$message = ElementUI.Message;
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


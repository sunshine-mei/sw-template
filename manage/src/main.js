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
import dayjs from 'dayjs'
import singleSpaVue from "single-spa-vue";

Vue.use(ElementUI)
Vue.use(SwUI);

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$message = ElementUI.Message;
Vue.prototype.$dayjs = dayjs();
Vue.config.productionTip = false

if (!window.singleSpaNavigate) {
// 判断未使用single-spa
  new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App),
  });
}
// 使用 single-spa
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions: {
    router,
    store,
    render: (h) => h(App),
  },
});
export const bootstrap = vueLifecycle.bootstrap;
export const mount = vueLifecycle.mount;
export const unmount = vueLifecycle.unmount;

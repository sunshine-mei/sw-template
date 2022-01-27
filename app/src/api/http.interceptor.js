// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
import {TOKEN_INVALID_EVENT} from '@/utils/token-parse'

const install = (Vue, vm) => {
  // 此为自定义配置参数，具体参数见上方说明
  Vue.prototype.$u.http.setConfig({
    method: 'get',
    // 设置为json，返回后会对数据进行一次JSON.parse()
    dataType: 'json',
    showLoading: true, // 是否显示请求中的loading
    loadingText: '请求中...', // 请求loading中的文字提示
    loadingTime: 100, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
    loadingMask: false, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    originalData: true, // 是否返回 原数据
    // 配置请求头信息
    header: {
      'content-type': 'application/json;charset=UTF-8'
    },
  })

  // 请求拦截部分，如配置，每次请求前都会执行
  Vue.prototype.$u.http.interceptor.request = config => {
    // 引用token
    const token = vm.$store.state.token
    if (token) {
      // console.log(config);
      // 将token 存入 请求头中
      config.header['X-Id-Token'] = token
      config.header["X-Machine-Type"] = "2";
    }
    // 最后需要将config进行return
    return config
  }

  // 响应拦截，每次请求返回的数据结果都会执行本方法
  Vue.prototype.$u.http.interceptor.response = response => {
    // console.log(response);
    const {statusCode, data: {code, msg, data} = {}} = response

    if (statusCode === 403) {
      // 403 权限不足
      vm.$u.toast(msg)
      return false
    }else if (statusCode === 401) {
      // 401 表示 token 不正确 或者 过期，跳转到 登录页面
      vm.$u.toast(msg)
      vm.$emit(TOKEN_INVALID_EVENT)
      return false
    }else if (code === 200) {
      return data
    }else if(code === 400){
      uni.showModal({
        content: msg,
        showCancel: false
      })
    }else{
      vm.$u.toast('服务器错误 !!')
    }
  }
}

export default {
  install
}

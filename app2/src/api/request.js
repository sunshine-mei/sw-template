// 此vm参数为页面的实例，可以通过它引用vuex中的变量
import {TOKEN_INVALID_EVENT} from '@/utils/token-parse'

module.exports = async (vm) => {
    // 请求拦截
    uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
        // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
        config.data = config.data || {}
        // 引用token
        const token = vm.$store.state.token
        if (token) {
            // 将token 存入 请求头中
            config.header['X-Id-Token'] = token
        }
        return config
    }, config => { // 可使用async await 做异步操作
        return Promise.reject(config)
    })

    // 响应拦截
    uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
        const data = response.data
        // 自定义参数
        const custom = response.config?.custom
        if (data.code !== 200) {
            // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
            if (custom.toast !== false) {
                uni.$u.toast(data.message)
            }

            // 如果需要catch返回，则进行reject
            if (custom?.catch) {
                return Promise.reject(data)
            } else {
                // 否则返回一个pending中的promise，请求不会进入catch中
                return new Promise(() => {})
            }
        }
        return data.data === undefined ? {} : data.data
    }, (response) => {
        // console.error(response)
        const {statusCode, data: {code, msg, data} = {}} = response
        // 对响应错误做点什么 （statusCode !== 200）
        // 401 表示 token 不正确 或者 过期，跳转到 登录页面
        if (statusCode === 401) {
            vm.$emit(TOKEN_INVALID_EVENT)
        }
        vm.$u.toast(msg, 2000)
        return Promise.reject(response)
    })
}

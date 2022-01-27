import qs from 'query-string'
import Cookie from '@/utils/js-cookie'
import store from '@/store/index.js'

// 定义 token 失效的 静态变量
const TOKEN_INVALID_EVENT = 'TOKEN_INVALID_EVENT'

//跳转cas地址存储token
function getToken(casUrl) {
  // 获取token
  // location.search 表示 地址栏？后的参数
  // 有的项目中 token的key 为 token或者idToken， 这里做兼容处理
  const {token, idToken} = qs.parse(location.search)
  let tokenKey = token || idToken || Cookie.get('X-Id-Token') || Cookie.get('userToken')

  // 跳转页面到登录页
  const navigateToLogin = () => {
    location.href = `${casUrl}/cas/login?redirect_uri=${location.href}`
  }

  if (tokenKey) {
    // 监听 从 http.interceptor.js 中 emit() 传递过来的 token失效事件
    uni.$on(TOKEN_INVALID_EVENT, navigateToLogin)
    // 将有效的token 存入vuex
    return tokenKey
  } else {
    navigateToLogin()
  }
}

/**
 * 获取用户token
 * @property
 * npm i js-cookie
 */
const Token = (casUrl) => {
  // #ifdef APP-PLUS
  if (typeof uni === 'object') { //uniapp获取token
    return new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        reject('获取token超时')
      }, 10000)
      uni.sendNativeEvent('sysGetUserToken',{}, ret => {
        clearTimeout(timer)
        resolve(ret)
      })
    })
  } else { //H5获取token
    return getToken(casUrl)
  }
  // #endif

  // #ifdef H5
  return getToken(casUrl)
  // #endif
}

const parse4URL = (query) => {
  // #ifdef MP
  //uniapp获取token
  if (typeof uni === 'object') {
    return new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        reject('获取token超时')
      }, 10000)
      uni.sendNativeEvent('sysGetUserToken', {}, ret => {
        clearTimeout(timer)
        resolve(ret)
      })
    })
  } else {
    const {token, idToken} = qs.parse(query)
    return token || idToken || Cookie.get('X-Id-Token') || Cookie.get('userToken')
  }
  // #endif

  // #ifndef MP
  const {token, idToken} = qs.parse(query)
  return token || idToken || Cookie.get('X-Id-Token') || Cookie.get('userToken')
  // #endif

}

export {
  Token,
  parse4URL,
  TOKEN_INVALID_EVENT
}

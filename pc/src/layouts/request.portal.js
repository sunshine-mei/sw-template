import axios from 'axios'
/*构建axios实例  隔离请求*/
const request = axios.create({
    baseURL: serverConfig.LayoutUrl,
    timeout: 3000
})

// sw-navbar#initInformation  导航栏组建方法需要提前解构data数据返回提供使用
request.interceptors.response.use(async ({data}) => {
    return data
})

export default request

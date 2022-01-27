/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import {Message} from 'element-ui'

// 请求超时时间
axios.defaults.timeout = 1000000000;
axios.defaults.baseURL = `${serverConfig.BACKEND_BASE_URL}`;
// 跨域
axios.defaults.withCredentials = true;
// 跨域请求
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        const code = response.status;
        if (code === 200) {
            return response.data;
        } else if (code === 302) {
            window.location = response.data.redirectUrl;
        } else {
            Message.error(response.msg);
            return Promise.reject("error");
        }
    },
    (error) => {
        const code = error.response.status;
        if (code === 401) {
            localStorage.removeItem("token");
            if (`${serverConfig.BACKEND_BASE_URL}`.endsWith("/")) {
                window.location.href = `${serverConfig.BACKEND_BASE_URL}cas/login?redirect_uri=${location.href}`;
            } else {
                window.location.href = `${serverConfig.BACKEND_BASE_URL}/cas/login?redirect_uri=${location.href}`;
            }
            return Promise.reject(error);
        } else if (code === 403) {
          Message.error('暂无权限访问');
          return Promise.reject(error);
        }
        Message.error(error.response.data.msg);
        console.log(error.response.data)
        return Promise.reject(error.response.data);
    }
);

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // 优先取云平台的token，取不到再取我们自己的
        const token = localStorage.getItem("Admin-Token") || localStorage.getItem("token");
        token && (config.headers["X-Id-Token"] = token);
        config.headers["X-Machine-Type"] = "1";
        return config;
    },
    (error) => {
        return Promise.error(error);
    }
);

export default axios;

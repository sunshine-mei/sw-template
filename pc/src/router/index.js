import Vue from "vue";
import VueRouter from "vue-router";
import qs from 'qs';
import store from '../store';
import request from '../layouts/request.portal';

Vue.use(VueRouter);

import Layout from '../layouts/Layout'
import Index from './../views/index'
import Logout from './../views/logout'
import UnknownPage from './../views/404'

const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/index",
        hidden: true,
        children: [
            {
                path: "/index",
                name: "Index",
                component: Index,
            },

            {
                path: "/404",
                name: 404,
                component: UnknownPage,
                meta: {title: "404"}
            },
            {
                path: "/logout",
                name: Logout,
                component: Logout,
                meta: {
                    title: "退出",
                    icon: "logout",
                }
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'hash', //history 需要后端配置支持
    base: process.env.BACKEND_BASE_URL,
    scrollBehavior: () => ({y: 0}),
    routes,
});


router.beforeEach((to, from, next) => {
    // 判断当前url路径是否有ticket（是否已登录）
    if (window.location.href.indexOf("token") > -1) {
        let obj = qs.parse(window.location.href.split('?')[1]);
        localStorage.setItem("token", obj.token.split('#')[0]);
        sessionStorage.setItem("token", obj.token.split('#')[0]);
        store.commit('setToken', obj.token.split('#')[0])
        //localStorage.setItem("ticket", obj.ticket.split('#')[0]);
        window.location.href = window.location.href.split('?')[0]
    }
    if (sessionStorage.getItem("Admin-Token")) {
        localStorage.setItem("token", sessionStorage.getItem("Admin-Token"));
        sessionStorage.setItem("token", sessionStorage.getItem("Admin-Token"));
    }

    // 优先取云平台的token，取不到再取我们自己的
    if (!sessionStorage.getItem("Admin-Token") && !sessionStorage.getItem("token")) {
        if (`${serverConfig.BACKEND_BASE_URL}`.endsWith("/")) {
            window.location.href = `${serverConfig.BACKEND_BASE_URL}cas/login?redirect_uri=${location.href}`;
        } else {
            window.location.href = `${serverConfig.BACKEND_BASE_URL}/cas/login?redirect_uri=${location.href}`;
        }
        return
    }

    //动态获取页头页尾信息，更换网站图标
    request({
        url: 'v1/config/system/getSystemConf',
        method: 'get',
    }).then(res => {
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = res.data.favIcon;
        document.getElementsByTagName('head')[0].appendChild(link)
    })

    next();
});

router.afterEach(() => {
    // 路由刷新或者跳转以后，滚动条置顶
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

export default router;

import axios from 'axios'

// 接口地址
export default {

    //班车分页列表
    getBusList(query) {
        return axios({
            url: `/api/school/bus/page`,
            method: 'get',
            params: query
        });
    },
    //获取所有线路
    getAllLine() {
        return axios({
            url: `/api/school/bus/line/list`,
            method: 'get'
        });
    },
    //获取所有线路
    getUserAuth() {
        return axios({
            url: `/api/user/is-manager`,
            method: 'get'
        });
    },
    //是否展示寒暑假 true 显示
    getShowVacation() {
        return axios({
            url: `/api/school/bus/isShow`,
            method: 'get'
        });
    }
};

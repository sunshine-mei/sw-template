import axios from 'axios'

// 接口地址
export default {

    // 获取用户信息
    getUserInfo() {
        return axios({
            url: '/api/user',
            method: 'get',
        });
    },
};

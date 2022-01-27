import axios from './http'

export default {
/************** 用户 ***************/
  // 获取用户信息
  getUserInfo() {
    return axios({
      url: '/api/user',
      method: 'get',
    });
  },
}
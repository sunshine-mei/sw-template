import axios from './http'

// 接口地址
export default {

  /************** 公共 api ***************/
  // 获取字典下层节点列表
  getDictChildrenList(code) {
    return axios({
      url: '/api/dict/children/' + code,
      method: 'get',
    });
  },
  // 获取用户信息
  getUserInfo() {
    return axios({
      url: '/api/user',
      method: 'get',
    });
  },
  // 获取用户（分页）
  getUserList(query) {
    return axios({
      url: '/api/user/page',
      method: 'get',
      params: query
    });
  },
  // 组织机构树
  getOrganizationTree() {
    return axios({
      url: '/api/user/orgtree',
      method: 'get',
    });
  },
  // 获取用户组
  getUserGroups(query) {
    return axios({
      url: '/api/user/groups',
      method: 'get',
      params: query
    });
  },
};

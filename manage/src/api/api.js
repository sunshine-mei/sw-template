import axios from './http'
import user from "@/api/user";
import label from "@/api/label";
import course from '@/api/course'
import theme from '@/api/theme'
import task from '@/api/task'

// 接口地址
export default {
  user,
  label,
  course,
  theme,
  task,
/************** 公共 api ***************/
  // 获取字典下层节点列表
  getDictChildrenList(code) {
    return axios({
      url: '/api/dict/children/' + code,
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
  // 学院列表
  getAcademyList() {
    return axios({
      url: '/api/user/academyList',
      method: 'get',
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
  // 组织机构树
  orgTree(query) {
    return axios({
      url: '/api/user/orgtree',
      method: 'get',
      params: query
    });
  },
  // 主题可浏览角色列表
  portalRole(query) {
    return axios({
      url: '/api/v1/roles/portalRole',
      method: 'get',
      params: query
    });
  },

  // 主题可浏览角色列表
  topicDetail(id) {
    return axios({
      url: `/api/topic/${id}`,
      method: 'get',
    });
  },
};

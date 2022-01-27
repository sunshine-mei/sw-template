import axios from './http'

export default {
/************** 主题管理 ***************/
  // 同步CMS思政
  syncCMS() {
    return axios({
      url: `/api/topic/syncPoliticalColumn`,
      method: 'get',
    });
  },
  // 获取主题一级目录（分页）
  getThemeListPage(query) {
    return axios({
      url: `/api/topic/page`,
      method: 'get',
      params: query
    });
  },
  // 获取主题列表
  getThemeList(query) {
    return axios({
      url: `/api/topic`,
      method: 'get',
      params: query
    });
  },
  // 创建/编辑主题
  setTheme(query) {
    return axios({
      url: `/api/topic`,
      method: 'post',
      data: query
    });
  },
  // 获取主题详情
  getThemeInfo(id) {
    return axios({
      url: `/api/topic/${id}`,
      method: 'get',
    });
  },
  // 删除主题
  deleteTheme(id) {
    return axios({
      url: `/api/topic/${id}`,
      method: 'delete',
    });
  },
  // 主题名称重复性校验
  validatorThemeName(k, v, params) {
    return axios({
      url: `/api/topic/valid/${k}/${v}`,
      method: 'get',
      params
    });
  },
  // 主题拖拽排序
  themeSort(data) {
    return axios({
      url: `/api/topic/sort`,
      method: 'post',
      data
    });
  },
  //关联课程:绑定
  bingCourses(query) {
    return axios({
      url: `/api/topic/bind`,
      method: 'post',
      data: query
    });
  },
  //关联课程:查询
  getBingCourses(id) {
    return axios({
      url: `/api/topic/bind/${id}`,
      method: 'get',
    });
  },
  //主题授权: 授权
  bingTwoAdmin(query) {
    return axios({
      url: `/api/topic/grant`,
      method: 'post',
      data: query
    });
  },
  //主题授权: 查询
  getBingTwoAdmin(id) {
    return axios({
      url: `/api/topic/grant/${id}`,
      method: 'get',
    });
  },
}

import axios from './http'

export default {
/************** 任务管理 ***************/
  // 获取学习任务（分页）
  getStudyTaskPage(params) {
    return axios({
      url: `/api/study-task/page`,
      method: 'get',
      params
    });
  },
  // 新建、编辑学习任务
  setStudyTask(data) {
    return axios({
      url: `/api/study-task`,
      method: 'post',
      data
    });
  },
  // 任务关联课程
  getTaskBindCourses(params) {
    return axios({
      url: `/api/course/taskLinkCoursePage`,
      method: 'get',
      params
    });
  },
  // 获取任务详情
  getStudyTaskInfo(id) {
    return axios({
      url: `/api/study-task/${id}`,
      method: 'get',
    });
  },
  // 任务名称重复性校验
  validatorTaskName(k, v, params) {
    return axios({
      url: `/api/study-task/valid/${k}/${v}`,
      method: 'get',
      params
    });
  },
  // 更改任务发布状态
  updateTaskPubStatus(func, id) {
    return axios({
      url: `/api/study-task/operate/${func}/${id}`,
      method: 'get',
    });
  },
  // 删除任务
  removeTask(id) {
    return axios({
      url: `/api/study-task/${id}`,
      method: 'delete',
    });
  },
  // 获取任务人员
  getStudyTaskUser(params) {
    return axios({
      url: `/api/study-task/user`,
      method: 'get',
      params
    });
  },
  // 添加任务人员
  addStudyTaskUser(data) {
    return axios({
      url: `/api/study-task/user`,
      method: 'post',
      data
    });
  },
  // 删除任务人员
  removeStudyTaskUser(ids) {
    return axios({
      url: `/api/study-task/user/${ids}`,
      method: 'delete',
    });
  },
  // 获取任务统计分析
  getTaskStatisticData(taskId) {
    return axios({
      url: `/api/study-task/statistic/detail/${taskId}`,
      method: 'get',
    });
  },
  // 获取任务统计人员名单
  getTaskStatisticPersonData(params) {
    return axios({
      url: '/api/study-task/statistic/user',
      method: 'get',
      params
    });
  },
}

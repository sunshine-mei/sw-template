import axios from "./http";

export default {
    // 标签列表
    getCourse(params) {
        return axios({
            url: '/api/course/page',
            method: 'get',
            params
        })
    },
    // 课程筛选条件
    condition() {
        return axios({
            url: '/api/course/condition',
            method: 'get'
        })
    },
    // 课程分页
    getCoursePage(params){
        return axios({
            url: '/api/course/page',
            method: 'get',
            params
        })
    },
    // 课程分页（主题关联课程）
    getTopicBingCoursePage(params){
        return axios({
            url: '/api/course/topic/page',
            method: 'get',
            params
        })
    },
    // 课程表单
    courseSubmit(data){
        return axios({
            url: '/api/course',
            method: 'post',
            data
        })
    },
    // 课程详情
    courseDetail(id){
        return axios({
            url: '/api/course/' + id,
            method: 'get'
        })
    },
    // 课程删除
    courseDelete(id) {
        return axios({
            url: '/api/course/' + id,
            method: 'delete'
        })
    },
    // 标签关联类目
    tagClassification () {
        return axios({
            url: '/api/tag-classification',
            method: 'get'
        })
    },
    courseStatus(id, status) {
        return axios({
            url: '/api/course/' + id + '/' + status,
            method: 'put'
        })
    },
    // 文章分页
    getArticlePage(params){
        return axios({
            url: '/api/article/page',
            method: 'get',
            params
        })
    }
}

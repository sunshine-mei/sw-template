import axios from "./http";

export default {
    // 标签列表
    getCourseTag(params) {
        return axios({
            url: '/api/course-tag/page',
            method: 'get',
            params
        })
    },
    // 标签保存|编辑
    getTagEdit(data) {
        return axios({
            url: '/api/course-tag',
            method: 'post',
            data:data
        })
    },
    // tree懒加载
    treeTag(params) {
        return axios({
            url: '/api/course-tag/tree',
            method: 'get',
            params
        })
    },
    deleteTag(id) {
        return axios({
            url: '/api/course-tag/' + id,
            method: 'delete',
        })
    },
    // 标签名称重复性校验
    validatorLabelName(k, v, params) {
        return axios({
            url: `/api/course-tag/valid/${k}/${v}`,
            method: 'get',
            params
        });
    },
    // 标签关联类目
    getTagClassification() {
        return axios({
            url: '/api/tag-classification',
            method: 'get',
        })
    },
    // 获取所有栏目
    allColumn(params){
        return axios({
            url: '/api/v1/cms/allColumn',
            method: 'get',
            params
        })
    },
}

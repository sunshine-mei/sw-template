import request from "@/layouts/request.portal";
/*定义导航栏需要的数据参数   header & footer*/
export default {
    data() {
        return ({
            request,
            isRequest: true,
            title: "校内班车查询"
        })
    }
}

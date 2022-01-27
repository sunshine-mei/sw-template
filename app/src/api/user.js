import request from '~/uview-ui/libs/request'

class User {
  // 获取用户权限
  static async getAuthority() {
    return await request.get('/api/user')
  }
}

export {
  User
}

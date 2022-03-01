const request = uni.$u.http

class User {
  // 获取用户权限
  static async getAuthority() {
    return await request.get('/api/user')
  }
}

export {
  User
}

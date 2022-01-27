// 这里用 同步 的缓存持久化处理，简单化
class UniStorage {
  getItem(key) {
    return uni.getStorageSync(key)
  }

  setItem(key, value) {
    return uni.setStorageSync(key, value)
  }

  removeItem(key) {
    return uni.removeStorageSync(key)
  }
}
export {
  UniStorage
}

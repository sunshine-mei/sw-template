const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('~', resolve("node_modules"))
      // 全局引入 scss 文件
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
        // 要公用的scss的路径
        resources: './src/static/style/base.scss'
      })
        .end()
    })
  },
  devServer: {
    port: 8000
  }
}


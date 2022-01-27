const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "/ui/", // 基本路径
  assetsDir: "static",
  outputDir: "dist/ui",// 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  devServer: {
    disableHostCheck: process.env.NODE_ENV === 'development' // 关闭 host check，方便使用 ngrok 之类的内网转发工具
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
        .set('~', resolve("node_modules"))

    // 全局引入 scss 文件
    // const oneOfsMap = config.module.rule('scss').oneOfs.store
    // oneOfsMap.forEach(item => {
    //   item
    //       .use('node-sass')
    //       .loader('sass-loader')
    //       .options({
    //         // 要公用的scss的路径
    //         resources: 'src/assets/scss/base.scss'
    //       })
    //       .end()
    // })
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@import "src/assets/scss/reset.scss";`
  //     }
  //   }
  // }
}

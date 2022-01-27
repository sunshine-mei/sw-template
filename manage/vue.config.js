const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "/school-bus-manage/", // 基本路径
  assetsDir: "static",
  outputDir: "dist/study-center-management",// 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  devServer: {
    disableHostCheck: process.env.NODE_ENV === 'development' //方便内网映射
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
        .set('~', resolve("node_modules"))

    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 1000 * 1024 }))
  },
  // filenameHashing: false, //true 导致部分图标不显示
  configureWebpack: {
    output: {
      filename: "[name].js",
      // library的值在所有子应用中需要唯一
      library: "'study-center-management'", // 项目名
      libraryTarget: "umd",
    }
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}

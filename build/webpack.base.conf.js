// webpack基础配置
//node的路径模块
var path = require('path')
var utils = require('./utils')
var config = require('../config')
//因为我们是vue.js的应用，把各个组件当做一个页面.vue后缀，所以引入这个可以编译這些文件
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 编译入口文件
  entry: {
    app: './src/main.js'
  },
  // 编译输出路径
  output: {
    //输出路径
    path: config.build.assetsRoot,
    //打包的js命名
    filename: '[name].js',
    // 指向异步加载的路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 一些解决方案配置
  //主要设置模块如何被解析。
  resolve: {
    //自动解析确定的拓展名,使导入模块时不带拓展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 创建import或require的别名
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'common': resolve('src/common'),
      'store': resolve('src/store'),
      'pages': resolve('src/pages'),
      'plugins': resolve('src/plugins'),
      'components': resolve('src/components')
    }
  },
  module: {
    // 各种不同类型文件加载器配置
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // js文件用babel转码
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        exclude: resolve('node_modules')
      },
      //图片后缀
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: utils.assetsPath('images/[hash:8].[ext]')
        }
      },
      //字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: utils.assetsPath('fonts/[hash:8].[ext]')
        }
      }
    ]
  }
}

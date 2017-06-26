# Build Setup

```
bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# 运行npm run dev命令时，实际上会运行dev-server.js文件
npm run dev

# build for production with minification
npm run build
```

### 构建一个Vue的项目

* 大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

```
npm install -g cnpm --registry=https://registry.npm.taobao.or

```

* 这样就可以使用 cnpm 命令来安装模块了：

```安装webpack
 cnpm install [name]
```

* 安装webpack

```
cnpm install webpack -g

```
* 安装vue脚手架

```
 npm install vue-cli -g
```

* 在硬盘上找一个文件夹放工程用的，在终端中进入该目录

```
 cd 目录路径
```

* 根据模板创建项目

```
    vue init webpack-simple 工程名字<工程名字不能用中文>
    或者创建 vue1.0 的项目
    vue init webpack-simple#1.0 工程名字<工程名字不能用中文>
```

* 安装项目依赖

```
  npm install
```

* 安装 vue 路由模块vue-router和网络请求模块vue-resource

```
    cnpm install vue-router vue-resource --save
```

* 启动项目

```
npm run dev
```

* 如果你用的是老版本的 vue-cli 还可能报其他错误，需要更新一下 vue-cli

```
npm view vue-cli
```

* 安装一下 babel-runtime

```
cnpm install babel-helpers --save-dev
```

* 生成项目后接下来就是开始Vue


### 技术
***
*  vue-cli
*  vue
*  axios
*  vue-router
*  vuex
*  font-awesome
*  element-ui
*  scss
*  webpack
*  mock
*  echarts

### 安装



***
项目地址: (`git clone`)
```shell
git clone https://github.com/zzmhot/vue-admin.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务: http://localhost:3000

```
npm run dev
```
发布代码

```
npm run build
```
***
### 目录结构
<pre>
├── build                     // 项目的 Webpack 配置文件
├── config                    // 项目配置目录
├── server                    // 项目开发的请求数据
├── src                       // 生产目录
│   ├── assets                // 一些资源文件
│   ├── common                // 通用文件、如工具类、状态码
│   ├── components            // 各种组件
│   ├── pages                 // 各种页面
│   ├── plugins               // 各种插件
│   ├── router                // 路由配置及map
│   ├── store                 // Vuex 状态管理器
│   ├── App.vue               // 根组件
│   ├── favicon.ico           // ico小图标
│   ├── index.html            // 项目入口文件
│   ├── main.js               // Webpack 编译入口文件，入口js
├── static                    // 静态资源，一般把不需要处理的文件可以放这里
├── .babelrc                  // babelrc配置文件
├── .editorconfig             // 代码风格文件，前提是要你的编辑器支持
├── .gitignore                // 用于Git配置不需要加入版本管理的文件
├── .postcssrc.js             // autoprefixer的配置文件
├── package.json              // 项目配置文件
</pre>


```
整理一下配置测试环境所需要的依赖：

* karma //test runner，提供测试所需的浏览器环境、监测代码改变自动重测、整合持续集成等功能
* phantomjs-prebuilt //phantomjs，在终端运行的浏览器虚拟机
* mocha //test framework，测试框架，运行测试
* chai //assertion framework, 断言库，提供多种断言，与测试框架配合使用
* sinon //测试辅助工具，提供 spy、stub、mock 三种测试手段，帮助捏造特定场景
* karma-webpack //karma 中的 webpack 插件
* karma-mocha //karma 中的 mocha 插件
* karma-sinon-chai //karma 中的 sinon-chai 插件
* sinon-chai //karma 中的 chai 插件
* karma-sourcemap-loader //karma 中的 sourcemap 插件
* karma-phantomjs-launcher //karma 中的 phantomjs 插件
* karma-spec-reporter //在终端输出测试结果
* istanbul-instrumenter-loader //代码覆盖率统计工具 istanbul
* karma-coverage-istanbul-reporter //代码覆盖率报告产出插件
```


###目录结构
```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息

```

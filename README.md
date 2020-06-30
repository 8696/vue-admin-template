<div align="center">
  <img width="100" src="http://vue-admin.icodekk.com/vue.png">
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  <img width="350" src="http://vue-admin.icodekk.com/element-ui.svg">
  <br>
  <h1>vue-admin-template</h1>
</div>

### 介绍

`vue-admin-template` 基于 `vue2.x`+`element-ui` 为基础搭建的后台管理系统模板。可以满足大部分中小应用

### 预览

[深圳节点](http://vue-admin.icodekk.com)
[香港节点](http://vue-admin.icode.link)

### 目录结构

<pre>
|-- build                                       CLI内置配置
    |-- build-next.js                           扩展配置
    |-- ...                                     CLI内置配置
|-- config                                      CLI内置配置
    |-- prod.env.js                             扩展配置
    |-- ...                                     CLI内置配置
|-- dist                                        打包完成后的资源目录
    |-- production-static                       实时版本
    |-- history-static                          历史版本
|-- src                                         开发源代码
    |-- api                                     提供的参考 Http 模块目录
    |-- assets                                  可被 loader 解析的资源目录
       |-- ...
    |-- components                              注册全局组件
       |-- global.components.js                 注册全局组件配置文件
       |-- service.components.js                注册全局服务组件配置文件
    |-- directive                               自定义指令配置
       |-- permission.directive.js              权限指定配置文件
    |-- element-ui                              element UI 配置
       |-- element-ui.js                        element UI 配置文件
    |-- filter                                  全局 filter 配置
       |-- global.filter.js                     全局 filter 配置文件
    |-- font-awesome                            Font Awesome 字体配置
       |-- font-awesome.js                      Font Awesome 字体配置文件
    |-- mixins                                  全局混入配置
       |-- __mixins.js                          项目内置全局混入配置文件
    |-- route                                   Vue Router 配置
       |-- route.js                             Vue Router 入口配置文件
    |-- store                                   Vuex 配置
       |-- store.js                             Vuex 入口配置文件
       |-- __module                             项目内置 Vuex 配置
          |-- ...
    |-- utils                                   工具方法
       |-- utils.js                             工具方法文件
    |-- views                                   组件目录
       |-- default                              项目内置组件、布局组价、内置页面、路由插槽等
          |-- layout                            项目内置布局组件
             |-- ...
          |-- page                              内置页面
             |-- 404.page.vue                   404页面
             |-- ...
          |-- route                             路由主载组件
             |-- base.route.component.vue       基础路由、包含头部菜单等组件
             |-- default.route.component.vue    默认组件、不包含头部菜单等组件
       |-- general                              基本组件、手动导入
          |-- ...
       |-- global                               全局组件、这些组件会被 /src/component/global.components.js 注册
          |-- ...
       |-- pages                                Vue Router 配置组件、一般作为 Router 加载的组件建议放在此目录
          |-- ...
       |-- service                              服务组件、这些组件会被 /src/component/service.components.js 注册
          |-- ...
       |-- App.vue                              项目根组件
    |-- config.js                               基础配置文件
    |-- main.js                                 主入口文件、配置全局功能、全局第三个组件等
    |-- store.config.js                         响应式配置文件
    |-- vm.vue.js                               自定义的 vm 实例
|-- static                                      内置静态资源目录
|-- .babelrc                                    项目 babel 配置
|-- .editorconfig                               编辑器配置
|-- .gitignore                                  git 忽略配置
|-- .postcssrc                                  PostCSS 配置
|-- index.html                                  项目入口
|-- package.json                                项目信息、依赖等
|-- README.md                                   README
|-- server.js                                   预览生产环境nodeJs文件
</pre>

### 文档

[深圳节点](http://vue-admin.icodekk.com/#/doc/folder)
[香港节点](http://vue-admin.icode.link/#/doc/folder)

### 快速开始

##### 开发

> git clone https://github.com/8696/vue-admin-template.git
>
> cd vue-admin-template
>
> npm install
>
> npm run dev

##### 打包

[文档](http://vue-admin.icode.link/#/doc/build)

### 环境支持

|  Chrome|Firefox |Edge| Safari | nodeJS |
| :----:| :----: | :----: |:----: |:----: |
| <img width="24" src="http://vue-admin.icodekk.com/chrome_48x48.png"> | <img width="24" src="http://vue-admin.icodekk.com/firefox_48x48.png"> | <img width="24" src="http://vue-admin.icodekk.com/edge_48x48.png"> |   <img width="24" src="http://vue-admin.icodekk.com/safari_48x48.png"> | <img width="24" src="http://vue-admin.icodekk.com/nodejs_48_48.png"> |
| * |  * | * | * |  ^10.0 |



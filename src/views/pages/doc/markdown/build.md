# 打包配置

### 打包：

> yarn run (build:dev | build:test | build:beta | build:prod)

### 版本

该项目每次打包以`打包时间`作为一个'版本'。每次打包之后都会以当前时间作为`根目录`，可防止缓存问题

在打包完成之后，项目根目录会自动生成 `dist` 文件及，该文件下包含
```text
|-- history-static      历史版本
   |-- 20200501170055
   |-- ...
|-- production-static   当前版本
   |-- 20200501170055
   |-- index.html
```

### 预览：

> node server.js

### 扩展

当现有服务器的站点包含多个站点或者多个静态资源，这里为区分当前项目提供了扩展配置

默认情况下静态根文件夹采用`打包时间`。可以通过更改`/config/build.config.js`中`buildRootStaticPath`来进行区分，例如:
```javascript
module.exports = {
  buildRootStaticPath: '/vue-admin-template'
};
```
通过上面配置之后打包完成后`dist`文件夹结构如下：
```text
|-- history-static              历史版本
   |-- 20200501170055
   |-- ...
|-- production-static           当前版本
   |-- vue-admin-template       根目录
      |-- 20200501172626
   |-- index.html
```
在部署时直接将`20200501172626`放置站点`vue-admin-template`下即可

`buildRootStaticPath`配置支持多层级目录结构
```javascript
module.exports = {
  buildRootStaticPath: '/vue-admin-template/a/b/c'
};
```



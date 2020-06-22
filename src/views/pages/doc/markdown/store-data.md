# 响应式配置

该项目的`菜单`、`Logo`、`页面路径`、`tags`等配置都是采用 `Vuex`实现

其中：在此基础上分为两类：
- 内置(可读)
- 自定义(可读写)

另外，还全局混入了`__getStoreConfig`获取配置以及`__setStoreConfig`设置配置等两个方法来配合使用，这两个方法只支持‘自定义’

### 一、自定义配置

自定义配置全部在`/src/store.config.js`中可以查看，这些配置会在页面渲染时在合适的时机会自动进行设置，也可以动态的使用`__setStoreConfig`方法设置。

**访问配置：**

在`/src/store.config.js`的每一项，直接在模板中或者vue实例中加上前缀`__`即可。例如：

- logo

```html
<!--模板 -->
<div>{{__logo}}</div>
```
---
```javascript
// vue 实例
mounted() {
  console.log(this.__logo);
}
```

其他配置可查看`/src/store.config.js`

### 二、内置配置

内置包含以下几个，均为可读

**访问配置：**

- __menuCurrentPaths

```html
<!--模板 -->
<div>{{__menuCurrentPaths}}</div>
```
---
```javascript
// vue 实例
mounted() {
  console.log(this.__menuCurrentPaths);
}
```

- __tagsList

如上

### 三、__getStoreConfig 、__setStoreConfig

这两个方法为全局混入方法


- __setStoreConfig(key: String, config: Any)
    + param
        + key：String 对应 store.config.js 文件中的配置
        + config：Any 对应配置中的具体类型
    + return
        + undefined

- __getStoreConfig(key: String)
    + param
        + key：String 对应 store.config.js 文件中的配置
    + return
        + Any 具体类型为配置可支持的类型

目前只支持自定义配置，例如场景：

- 动态设置菜单
- 动态设置Logo

**案例**
```html
<template>
  <el-input v-model="logoBackColor"/>
  <el-button style="margin-top: 10px" @click="setLogoBackColor">设置log背景</el-button>
  <el-button style="margin-top: 10px" @click="getLogoConfig">获取logo配置</el-button>
  <el-button style="margin-top: 10px" @click="hideLogo">关闭logo</el-button>
</template>
<script efault {
    data() {
      return {
        logoBackColor: 'red'
      };
    },
    methods: {
       setLogoBackColor() {
          this.__setStoreConfig('logo', {
            backgroundColor: this.logoBackColor
          });
       },
       getLogoConfig(){
          this.$message(JSON.stringify(this.__getStoreConfig('logo')))
       },
       hideLogo() {
        this.__setStoreConfig('logo', null);
       }
    }
  };
</script>
```

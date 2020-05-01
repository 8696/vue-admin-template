# 全局组件

全局组件无需`import`，因为它已经注册在全局中。目前全局组件仅有一个，也是认为在现在框架基础上没有满足个人需求所添加的

### 一、va-container

该组件采用的在一定高度容器下固定顶部、底部，而内容区采用自适应且高度超过最高之后自动出现滚动条。可以适用于一些`列表`。在数据内容比较多、顶部和底部都有操作区域时采用。[查看实例](#/doc/base-layout)

```html
<template>
  <div class="page">
    <va-container :height="height">
      <template v-slot:header>
        <div class="flex-center"
             style="height:100%;background-color: #fff;border: 1px solid #cccccc">
          固定在顶部 60px
        </div>
      </template>
      <template v-slot:body>
        <div v-for="item in 100">{{item}}</div>
      </template>
      <template v-slot:footer>
        <div class="flex-center"
             style="height:100%;background-color: #fff;border: 1px solid #cccccc">
          固定在底部 50px
        </div>
      </template>
    </va-container>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        height: {
          containerHeight: '100%',
          headerHeight: '60px',
          footerHeight: '50px'
        }
      };
    }
  };
</script>
```

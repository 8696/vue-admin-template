# va-container

该组件采用的在一定高度容器下固定头部、底部，并且头部、内容区、底部都是自适应高度。可以适用于一些`列表`。在数据内容比较多、顶部和底部都有操作区域时采用。[查看实例](#/doc/base-layout)

```html
<template>
  <div class="page">
    <va-container :containerHeight="containerHeight">
      <template v-slot:header>
        <div class="flex-center"
             style="height:100%;background-color: #fff;border: 1px solid #cccccc;padding: 20px">
          固定在头部 <br> 高度自适应
        </div>
      </template>
      <template v-slot:body>
        <div class="flex-direction-column">
          <el-button type="primary" @click="$router.push2({name:'va-container-global'})">查看文档</el-button>
          <div class="flex-center" v-for="item in 100">{{item}}</div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="flex-center"
             style="height:100%;background-color: #fff;border: 1px solid #cccccc;padding: 20px">
          固定在底部 <br> 高度自适应
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
        containerHeight: '100%'
      };
    }
  };
</script>
```
va-container 组件通过 `slot` 为 `header`、`body`、`footer`区分容器位置

接收一个 prop

> containerHeight: String | default: 100%



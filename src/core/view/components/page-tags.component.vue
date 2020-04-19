<template>
  <div class="">
    <template v-if="__menuCurrentPaths.length > 0
     && $route.name !== __menuCurrentPaths[0].routeName">
      <div class="page-tags">
        <div class="menu-current-paths" v-if="__menuCurrentPaths.length > 0">
          <div class="current-paths-title">
            {{__menuCurrentPaths[__menuCurrentPaths.length - 1].title}}
          </div>
        </div>
        <el-breadcrumb separator="/" v-if="__menuCurrentPaths.length > 0">
          <el-breadcrumb-item :to="{name: item.routeName ||
      (item.children.length > 0 ?item.children[0].routeName:'')
      }" :key="index" v-for="(item,index) in __menuCurrentPaths">
            {{item.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="tags-list">
          <div class="item active">
            <span>首页</span>
          </div>
          <div class="item">
            <span>文档</span>
            <i class="el-icon-delete"></i>
          </div>
          <div class="item">
            <span>富文本编辑器</span>
            <i class="el-icon-delete"></i>
          </div>
          <div class="item">
            <span>组件</span>
            <i class="el-icon-delete"></i>
          </div>
          <div class="item">
            <span>头像上传</span>
            <i class="el-icon-delete"></i>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'page-tags.component',
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {
      navTo(item) {
        console.log(item);
      }
    }
  };
</script>

<style scoped>

</style>

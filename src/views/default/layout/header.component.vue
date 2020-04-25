<template>
  <div class="header-component">
    <div class="l-left">
      <div class="change-menu-collapse">
        <i :class="{'el-icon-s-fold':!__menuCollapseStatus,'el-icon-s-unfold':__menuCollapseStatus}"
           @click="__setMenuCollapseStatus(!__menuCollapseStatus)"/>
      </div>
      <div class="route-breadcrumb">
        <el-breadcrumb separator="/" v-if="__menuCurrentPaths.length > 0">
          <el-breadcrumb-item :to="{name: item.routeName ||
      (item.children.length > 0 ?item.children[0].routeName:'')
      }" :key="index" v-for="(item,index) in __menuCurrentPaths">
            {{item.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="l-right">
      <div class="user">

        <el-dropdown @command="userActionHandleCommand">
        <span class="el-dropdown-link">
          <img class="avatar" src="@/assets/images/avatar.jpeg" alt="">
          龙锦文<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="修改密码">修改密码</el-dropdown-item>
            <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
            <el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="action-more">
        <i class="el-icon-more"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {
      userActionHandleCommand(command) {
        console.log('ss');
        this.$router.replace({name: 'login'});
      }
    }
  };
</script>

<style scoped>

</style>

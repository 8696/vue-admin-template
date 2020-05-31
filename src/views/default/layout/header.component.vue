<template>
  <div class="header-component">
    <div class="l-left">
      <div class="change-menu-collapse">
        <i :class="{'el-icon-s-fold':!__menuCollapseStatus,'el-icon-s-unfold':__menuCollapseStatus}"
           @click="__setMenuCollapseStatus(!__menuCollapseStatus)"/>
      </div>
      <div class="route-breadcrumb">
        <el-breadcrumb separator="/" v-if="__menuCurrentPaths.length > 0">
          <el-breadcrumb-item :key="index" v-for="(item,index) in __menuCurrentPaths">
            {{item.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="l-right">
      <div class="item">
        <i @click="toggleScreenFull" class="el-icon-full-screen"></i>
      </div>
      <div class="item">

        <el-dropdown @command="userActionHandleCommand">
        <span class="el-dropdown-link">
          <img class="avatar" src="@/assets/images/avatar.jpeg" alt="">
          龙锦文<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
            <el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="item action-more">
        <i class="el-icon-more"></i>
      </div>
    </div>
  </div>
</template>

<script>

  const screenFullLoad = () => import('screenfull');

  export default {
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {
      userActionHandleCommand(command) {
        switch (command) {
          case '个人中心':
            this.$router.push({name: 'personal'});
            break;
          case '退出登录':
            // window.localStorage.clear();
            // window.sessionStorage.clear();
            // window.location.reload();
            this.$router.replace({name: 'login'});
            break;
        }
      },
      /**
       * @description 切换全屏
       * */
      async toggleScreenFull() {
        const screenFullIns = await screenFullLoad();
        screenFullIns.toggle();
      }
    }
  };
</script>

<style scoped>

</style>

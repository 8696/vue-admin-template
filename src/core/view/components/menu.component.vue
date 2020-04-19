<template>
  <section>
    <template v-for="(item,index) in menuList">

      <template v-if="item.children && item.children.length > 0">
        <el-submenu
          :disabled="item.disabled === true"
          :data-title="item.title"
          :key="index"
          :index="item.routeName || item.title">
          <template slot="title">
            <i v-if="item.icon" :class="[item.icon]"></i>
            <span class="children-title" slot="title">{{item.title}}</span>
          </template>
          <menu-component :loop="true" :menu-list="item.children"/>
        </el-submenu>
      </template>

      <el-menu-item
        v-if="!item.children || item.children.length === 0"
        :data-title="item.title"
        :disabled="item.disabled === true"
        :data-item="item"
        :index="item.routeName || String(Math.random())">
        <i v-if="item.icon" :class="[item.icon]"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </template>
  </section>
</template>

<script>
  import configHooks from '../../../config.hooks';

  export default {
    name: 'menuComponent',
    watch: {
      $route() {
        if (this.loop) return;
        this.__initMenuCurrentPaths();
      }
    },
    props: {
      menuList: {
        type: Array,
        default() {
          return [];
        }
      },
      /**
       * @description 循环组件的状态 false | 首次循环
       * */
      loop: {
        type: Boolean,
        default: false
      }
    },
    async mounted() {
      if (this.loop) return;
      /**
       * @description 加载菜单
       * */
      let menu = await configHooks.getMenuList.call(this);
      this.__setMenuList(menu);
      this.__initMenuCurrentPaths();

    },

  };
</script>

<style scoped>

</style>

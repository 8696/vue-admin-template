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


  export default {
    name: 'menuComponent',
    props: {
      menuList: {
        type: Array,
        default() {
          return [];
        }
      },
    },

  };
</script>

<style scoped>

</style>

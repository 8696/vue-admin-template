<template>
  <section>
    <template v-for="(item,index) in menuList">
      <template
        v-if="Array.isArray(item.children) && item.children.length > 0">
        <el-submenu
          :disabled="item.disabled === true"
          :data-title="item.name"
          :key="index"
          :index="item.route || item.name">
          <template slot="title">

            <font-awesome-icon v-if="item.icon && !/^el-icon/.test(item.icon)"
                               size="1x" :icon="item.icon"/>
            <i :class="[item.icon]" v-if="item.icon && /^el-icon/.test(item.icon)" style="color: #ffffff"></i>
            <span class="children-title" slot="title">{{item.name}}</span>

          </template>
          <menu-component :loop="true" :menu-list="item.children"/>
        </el-submenu>
      </template>

      <el-menu-item
        v-if="item.children === undefined || item.children.length === 0"
        :data-title="item.name"
        :disabled="item.disabled === true"
        :data-item="item"
        :index="item.route || String(Math.random())">

        <font-awesome-icon v-if="item.icon && !/^el-icon/.test(item.icon)"
                           size="1x" :icon="item.icon"/>
        <i :class="[item.icon]" v-if="item.icon && /^el-icon/.test(item.icon)" style="color: #ffffff"></i>

        <span slot="title">{{item.name}}</span>

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
      }
    }
  };
</script>

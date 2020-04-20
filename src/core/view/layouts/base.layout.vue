<template>
  <div class="base-layout">
    <div class="layout-menu" :class="{'layout-menu-collapse': __menuCollapseStatus}">
      <el-menu :default-active="$route.name" @select="onMenuSelect" background-color="#2a3f54" text-color="#ffffff"
               class="layout-menu-ls" :collapse="__menuCollapseStatus">
        <menu-component :menu-list="__menuFormatList"/>
      </el-menu>
    </div>
    <div class="layout-content" :class="{'layout-content-collapse': __menuCollapseStatus}">
      <div class="layout-header">
        <header-component/>
      </div>
      <div class="layout-page-tags">
        <page-tags-component/>

      </div>
      <div class="layout-body">
        <keep-alive>
          <router-view/>
        </keep-alive>

      </div>
    </div>
  </div>
</template>

<script>
  import vm from '../../vm';
  import configHooks from '../../../config.hooks';
  import {sleep} from '../../../view/utils/utils';

  const MenuComponent = () => import('../components/menu.component');
  const HeaderComponent = () => import('../components/header.component');
  const PageTagsComponent = () => import('../components/page-tags.component');

  export default {
    components: {
      MenuComponent, HeaderComponent,
      PageTagsComponent
    },

    async mounted() {
      /**
       * @description 加载菜单
       * */
      let menu = await configHooks.getMenuList.call(this);
      this.__setMenuList(menu);

      // -------------
      this.onRouteUpdate();
      // -----
    },
    watch: {
      $route() {
        this.onRouteUpdate();
      }
    },
    methods: {
      /**
       * @description 监听菜单选中
       * @doc https://element.eleme.cn/#/zh-CN/component/menu
       * */
      onMenuSelect(index, path, itemVm) {
        // 优先级 routeName -> link
        let item = itemVm.$attrs['data-item'];

        if (!item.hasOwnProperty('routeName')
          && !item.hasOwnProperty('link')
        ) {
          return this.routeTo404();
        }
        // 匹配
        let resolved = this.$router.resolve({
          name: item.routeName
        });

        if (resolved.resolved.matched.length === 0) {
          return this.routeTo404();
        }

        if (item.hasOwnProperty('routeName')) {
          return this.$router.push({
            path: item.routeName
          });
        }
        // 外部链接
        if (item.hasOwnProperty('link') && /^http/.test(item.link)) {
          window.open(item.link);
        }
      },
      /**
       * @description 未匹配到路由跳转至 404
       * */
      routeTo404() {
        return this.$router.push({path: '/404'});
      },
      /**
       * @description 监听路由更新
       * */
      async onRouteUpdate() {
        // -------
        this.__initMenuCurrentPaths();
        // ------- 追加 tags 的一项
        this.__pushTagsList(this.__currentRoute);

      }

    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next();
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next();
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next();
    }
  };
</script>

<style scoped lang="scss">

</style>

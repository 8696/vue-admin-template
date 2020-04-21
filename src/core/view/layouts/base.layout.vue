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
        <section v-for="item in __tagsList" :key="item.id">
          <keep-alive>
            <router-view v-if="$route.name === item.routeName"/>
          </keep-alive>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import configHooks from '../../../config.hooks';

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
          return this.$router.push2({
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
        return this.$router.push2({path: '/404'});
      },
      /**
       * @description 监听路由更新
       * */
      onRouteUpdate() {
        // -------
        this.__initMenuCurrentPaths();
        // ------- 追加 tags 的一项
        this.__pushTagsList(this.__currentRoute);

      }
    }

  };
</script>

<style scoped lang="scss">

</style>

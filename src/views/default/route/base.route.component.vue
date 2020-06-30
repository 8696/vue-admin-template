<template>
  <div class="base-layout" v-loading="__menuList.length === 0">
    <div class="layout-menu-p"
         element-loading-background="rgba(255, 255, 255, 0.8)"
    >
      <menu-scroll-component ref="scroll">
        <div class="layout-menu"
             :class="{
            'layout-menu-collapse': __menuCollapseStatus,
            'exist-logo': __logo,
            'fixed-logo': __logo && __logo.fixed
         }">
          <div v-if="__logo" class="logo" :style="{backgroundColor: __logo.backgroundColor}">
            <img :src="__menuCollapseStatus ? __logo.miniPath : __logo.path"/>
          </div>

          <el-menu :default-active="$route.name" @select="onMenuSelect" background-color="#2a3f54" text-color="#ffffff"
                   class="layout-menu-ls" :collapse="__menuCollapseStatus">
            <menu-component :menu-list="__menuFormatList"/>
          </el-menu>
        </div>
      </menu-scroll-component>
    </div>

    <div class="layout-content"
         :class="{'layout-content-collapse': __menuCollapseStatus,
         'layout-auto-header': !__fixedHeader}">
      <div class="layout-header">
        <header-component/>
      </div>
      <transition name="init">
        <div class="layout-page-tags" v-if="__tagsList.length > 0">
          <page-tags-component/>
        </div>
      </transition>
      <div class="layout-body">
        <section class="route-item" :class="{'active-page': $route.name === item.route}"
                 v-show="$route.name === item.route"
                 v-for="item in __tagsList"
                 :key="item.id">
          <keep-alive>
            <transition v-if="$route.name === item.route" name="router-transition">
              <router-view/>
            </transition>
          </keep-alive>
        </section>
        <div class="tags-list-empty" v-if="__tagsList.length === 0">
          <!--loading...-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import vm from '@/vm.vue';

  import MenuScrollComponent from '../layout/menu.scroll.component';
  import PageTagsComponent from '../layout/page-tags.component';
  import HeaderComponent from '../layout/header.component';
  import MenuComponent from '../layout/menu.component';

  export default {
    components: {
      MenuComponent,
      HeaderComponent,
      PageTagsComponent,
      MenuScrollComponent
    },
    data() {
      return {
        scrollTop: {}
      };
    },

    watch: {
      $route(to, from) {
        this.__onRouteUpdate(to, from);
      },
      __menuList() {
        this.$emit('menu-list-init');
      }
    },
    methods: {
      /**
       * @description 监听菜单选中
       * @doc https://element.eleme.cn/#/zh-CN/component/menu
       * */
      onMenuSelect(index, path, itemVm) {
        // 优先级 route -> link
        let item = itemVm.$attrs['data-item'];

        if (!item.hasOwnProperty('route')
          && !item.hasOwnProperty('link')
        ) {
          return this.routeTo404();
        }
        // 匹配
        let resolved = this.$router.resolve({
          name: item.route
        });

        if (resolved.resolved.matched.length === 0) {
          return this.routeTo404();
        }

        if (item.hasOwnProperty('route')) {
          return this.$router.push2({
            name: item.route
          }, () => {
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
        return this.$router.push2({path: '/404'}, () => {
        });
      },
      /**
       * @description 初始化菜单滚动条位置
       * */
      initMenuScroll() {
        this.$once('menu-list-init', async () => {
          await Vue.nextTick();
          this.$refs.scroll.menuActive();
        });
      },
      onCreated() {
        this.__initStoreConfig(['menuCollapseStatus', 'logo', 'fixedHeader']);
        this.initMenuScroll();
        vm.$on('route-before-each', async ({to, from}) => {
          if (this.__fixedHeader || !from) return;
          this.scrollTop[from.name] = document.querySelector('.layout-content').scrollTop;
        });

        vm.$on('route-after-each', async ({to, from}) => {
          if (this.__fixedHeader || !to) return;
          await Vue.nextTick();
          try {
            document.querySelector('.layout-content').scrollTop = this.scrollTop[to.name] || 0;
          } catch (e) {
          }
        });
      },
      onBeforeDestroy() {
        vm.$off('route-before-each');
        vm.$off('route-after-each');
      }
    },
    async mounted() {
      setTimeout(() => {
        this.__initStoreConfig(['menuList']);
      }, 1000);
      return;
      this.__setStoreConfig('menuList', [
        {
          id: 21,
          parentId: 0,
          name: '首页',
          type: 1,
          icon: 'cogs',
          order: 0,
          route: 'home',
          link: '',
          permission: '',
        },
        {
          id: 1,
          parentId: 0,
          name: '系统管理',
          type: 0,
          icon: 'cogs',
          order: 0,
          route: '',
          link: '',
          permission: '',
        },
        {
          id: 2,
          parentId: 1,
          name: '用户管理',
          type: 1,
          icon: '',
          order: 0,
          route: 'system-menu',
          link: '',
          permission: 'system-user',
        },
        {
          id: 3,
          parentId: 2,
          name: '用户列表',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'system-user',
        },
        {
          id: 4,
          parentId: 2,
          name: '添加用户',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'system-add-user',
        },
        {
          id: 5,
          parentId: 2,
          name: '删除用户',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'system-remove-user',
        },
        {
          id: 10,
          parentId: 0,
          name: '商家管理',
          type: 0,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: '',
        },
        {
          id: 11,
          parentId: 10,
          name: '商家列表',
          type: 1,
          icon: '',
          order: 0,
          route: 'store',
          link: '',
          permission: '',
        },
        {
          id: 12,
          parentId: 11,
          name: '商家更新',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'store-update',
        },
        {
          id: 13,
          parentId: 11,
          name: '商家删除',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'store-update',
        }
      ]);

    },
    created() {
      this.onCreated();
    },
    beforeDestroy() {
      this.onBeforeDestroy();
    }

  };
</script>

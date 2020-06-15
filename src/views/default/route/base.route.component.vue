<template>
  <div class="base-layout" v-loading="__menuList.length === 0">
    <div class="layout-menu-p"
         element-loading-background="rgba(255, 255, 255, 0.8)"
    >
      <vue-scroll ref="refScroller" :ops="scrollOptions">

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
      </vue-scroll>
    </div>

    <div class="layout-content" :class="{'layout-content-collapse': __menuCollapseStatus}">
      <div class="layout-header">
        <header-component/>
      </div>
      <transition name="init">
        <div class="layout-page-tags" v-if="__tagsList.length > 0">
          <page-tags-component/>
        </div>
      </transition>
      <div class="layout-body" :class="[$route.name + '-page-body']">
        <section class="route-item" v-show="$route.name === item.route"
                 v-for="item in __tagsList" :key="item.id">
          <keep-alive>
            <transition name="router-transition">
              <router-view v-if="$route.name === item.route"/>
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
  import {sleep} from '@/utils/utils';
  import vueScroll from 'vuescroll';

  const MenuComponent = () => import('../layout/menu.component');
  const HeaderComponent = () => import('../layout/header.component');
  const PageTagsComponent = () => import('../layout/page-tags.component');

  export default {
    components: {
      MenuComponent,
      HeaderComponent,
      PageTagsComponent,
      vueScroll
    },
    data() {
      return {
        scrollOptions: {
          vuescroll: {
            detectResize: true
          },
          rail: {
            opacity: 0,
          },
          bar: {
            size: '6px',
            showDelay: 500,
            keepShow: true,
            background: '#ffffff',
            opacity: .2,
            specifyBorderRadius: '0',
            onlyShowBarOnScroll: true
          }
        }
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
          this.$off('menu-list-init');
          await this.$nextTick();
          setTimeout(() => {
            let activeMenu = document.querySelectorAll('.layout-menu-ls .is-active')[0];
            if (activeMenu.offsetTop <= window.innerHeight) return;
            this.$refs.refScroller.scrollTo({
              y: activeMenu.offsetTop - 60
            });
          });
        });
      }
    },
    async mounted() {
      this.initMenuScroll();
      this.__initStoreConfig(['menuCollapseStatus', 'logo']);
      await sleep();
      this.__initStoreConfig(['menuList']);
    }

  };
</script>

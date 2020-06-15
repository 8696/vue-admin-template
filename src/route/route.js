import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import merge from 'webpack-merge';

const router = new Router(merge({
    routes: [
      {
        path: '/',
        redirect: {
          name: 'home'
        }
      },
      {
        path: '/',
        component: () => import('@/views/default/route/base.route.component'),
        children: [
          {
            path: 'home',
            name: 'home',
            component: () => import('@/views/pages/home/home.page')
          },

          {
            path: '/doc/card-layout',
            name: 'card-layout',
            component: () => import('@/views/pages/card-layout/card-layout.page')
          },
          {
            path: '/doc/folder',
            name: 'folder',
            component: () => import('@/views/pages/doc/folder.page')
          },
          {
            path: '/doc/build',
            name: 'build',
            component: () => import('@/views/pages/doc/build.page')
          },

          {
            path: '/doc/general-component',
            name: 'general-component',
            component: () => import('@/views/pages/doc/general-component.page')
          },
          {
            path: '/doc/global-component-doc',
            name: 'global-component-doc',
            component: () => import('@/views/pages/doc/global-component/global-component.page')
          },
          {
            path: '/doc/va-container-global',
            name: 'va-container-global',
            component: () => import('@/views/pages/doc/global-component/va-container.page')
          },
          {
            path: '/doc/va-table-global',
            name: 'va-table-global',
            component: () => import('@/views/pages/doc/global-component/va-table.page')
          },
          //
          {
            path: '/doc/va-table-filter-service',
            name: 'va-table-filter-service',
            component: () => import('@/views/pages/doc/service-component/va-table-filter-service.page')
          },
          {
            path: '/doc/store-data',
            name: 'store-data',
            component: () => import('@/views/pages/doc/store-data.page')
          },
          {
            path: '/doc/base-layout',
            name: 'base-layout',
            component: () => import('@/views/pages/base-layout/base-layout.page')
          },
          {
            path: '/doc/font-awesome',
            name: 'doc-font-awesome',
            component: () => import('@/views/pages/doc/font-awesome.page')
          },
          // 图标
          {
            path: '/font-awesome',
            name: 'font-awesome',
            component: () => import('@/views/pages/font-awesome/font-awesome.page')
          },
          // 复制
          {
            path: '/copy-text',
            name: 'copy-text',
            component: () => import('@/views/pages/copy-text/copy-text.page')
          },
          //
          {
            path: '/js-big-decimal',
            name: 'js-big-decimal',
            component: () => import('@/views/pages/js-big-decimal/js-big-decimal.page')
          },
          // antv
          // 曲线折线图
          {
            path: '/antv/g2/line-curved',
            name: 'antv-g2-line-curved',
            component: () => import('@/views/pages/antv/antv-g2/line-curved.page')
          },
          // 双Y轴折线图
          {
            path: '/antv/g2/line-double-y-axes',
            name: 'antv-g2-line-double-y-axes',
            component: () => import('@/views/pages/antv/antv-g2/line-double-y-axes.page')
          },
          // 阶梯折线图
          {
            path: '/antv/g2/line-step-series',
            name: 'antv-g2-line-step-series',
            component: () => import('@/views/pages/antv/antv-g2/line-step-series.page')
          },
          // 堆叠面积图
          {
            path: '/antv/g2/area-stacked',
            name: 'antv-g2-area-stacked',
            component: () => import('@/views/pages/antv/antv-g2/area-stacked.page')
          },

          // 基础漏斗图
          {
            path: '/antv/g2/funnel-basic',
            name: 'antv-g2-funnel-basic',
            component: () => import('@/views/pages/antv/antv-g2/funnel-basic.page')
          },

          // 基础饼图
          {
            path: '/antv/g2/basic-pie',
            name: 'antv-g2-basic-pie',
            component: () => import('@/views/pages/antv/antv-g2/basic-pie.page')
          },
          {
            path: '/antv/g2/basic-pie2',
            name: 'antv-g2-basic-pie2',
            component: () => import('@/views/pages/antv/antv-g2/basic-pie2.page')
          },
          // table
          {
            path: '/table/example-1',
            name: 'table-example-1',
            component: () => import('@/views/pages/table/table-example-1.page')
          },
          // 富文本
          {
            path: '/editor/wangEditor',
            name: 'editor-wangEditor',
            component: () => import('@/views/pages/editor/wangEditor.page')
          },
          // 解析md
          {
            path: '/markdown',
            name: 'markdown',
            component: () => import('@/views/pages/markdown/markdown.page')
          },
          {
            path: '/menu',
            name: 'menu',
            component: () => import('@/views/pages/menu/menu.page')
          },

          {
            path: '/menu2',
            name: 'menu2',
            component: () => import('@/views/pages/menu/menu.page')
          },

          {
            path: '/menu3',
            name: 'menu3',
            component: () => import('@/views/pages/menu/menu.page')
          },
          // 商家管理
          {
            path: '/store',
            name: 'store',
            component: () => import('@/views/pages/store/store.page')
          },
          // 系统管理
          {
            path: '/system-role',
            name: 'system-role',
            component: () => import('@/views/pages/system/system-role/system-role.page')
          },
          {
            path: '/system-menu',
            name: 'system-menu',
            component: () => import('@/views/pages/system/system-menu/system-menu.page')
          },
          {
            path: '/system-user',
            name: 'system-user',
            component: () => import('@/views/pages/system/system-user/system-user.page')
          },

          // 响应式配置
          {
            path: '/store-data-logo',
            name: 'store-data-logo',
            component: () => import('@/views/pages/store-data/logo.page')
          },
          {
            path: '/store-data-menu-collapse',
            name: 'store-data-menu-collapse',
            component: () => import('@/views/pages/store-data/menu-collapse.page')
          },

          {
            path: '/store-data-menu-list',
            name: 'store-data-menu-list',
            component: () => import('@/views/pages/store-data/menu-list.page')
          },
          // 小组件
          {
            path: '/component-va-table-filter',
            name: 'component-va-table-filter',
            component: () => import('@/views/pages/component/component-va-table-filter.page')
          },
          // 个人中心
          {
            path: '/personal',
            name: 'personal',
            meta: {
              name: '个人中心'
            },
            component: () => import('@/views/pages/personal/personal.page')
          },
          {
            path: '/test',
            name: 'test',
            meta: {
              name: '个人中心'
            },
            component: () => import('@/views/pages/test/test.page')
          },
        ]
      },
      {
        path: '/',
        component: () => import('@/views/default/route/default.route.component'),
        children: [
          {
            path: '/login',
            name: 'login',
            component: () => import('@/views/pages/login/login.page')
          }
        ]
      },
    ]
  },
  {
    routes: [
      {
        path: '/',
        component: () => import('@/views/default/route/base.route.component'),
        children: [
          {
            path: 'reload',
            name: 'reload',
            meta: {
              name: '...'
            },
            component: () => import('@/views/default/page/reload.page')
          },
          {
            path: '*',
            name: '404',
            meta: {
              name: '404'
            },
            component: () => import('@/views/default/page/404.page')
          },
        ]
      }
    ]
  }));


/**
 * 当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
 每个守卫方法接收三个参数：
 to: Route: 即将要进入的目标 路由对象
 from: Route: 当前导航正要离开的路由
 next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 ** next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
 ** next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
 ** next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
 ** next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
 * */
router.beforeEach(async (to, from, next) => {
  await new Vue().__appMounted();
  next();
});

/**
 * 在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
 * */
router.beforeResolve(async (to, from, next) => {
  next();
});
/**
 * 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
 * */
router.afterEach(async (to, from) => {
});

/**
 * @description 扩展实例方法
 * */
router.back2 = function (...arg) {
  this.viewChangeType = 'back';
  return this.back(...arg);
};
router.go2 = function (...arg) {
  this.viewChangeType = 'go';
  return this.go(...arg);
};
router.push2 = function (...arg) {
  this.viewChangeType = 'push';
  return this.push(...arg);
};
router.replace2 = function (...arg) {
  this.viewChangeType = 'replace';
  return this.replace(...arg);
};

export default router;

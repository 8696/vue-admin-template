import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import merge from 'webpack-merge';
import routes from '../../router/index';
import vm from '../vm';

const router = new Router(merge(routes, {
  routes: [
    {
      path: '/',
      component: () => import('../view/layouts/base.layout'),
      children: [
        {
          path: '404',
          name: '404',
          component: () => import('../view/page/404.page')
        },
        {
          path: '*',
          redirect: '/404'
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
router.beforeEach(async (...args) => {
  await new Vue().__appMounted();
  routes.hooks.beforeEach.call(router, ...args);
});

/**
 * 在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
 * */
router.beforeResolve(async (...args) => {
  routes.hooks.beforeResolve.call(router, ...args);
});
/**
 * 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
 * */
router.afterEach(async (...args) => {
  routes.hooks.afterEach.call(router, ...args);
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

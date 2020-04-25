export default {
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/',
      component: () => import('../components/default-components/route/base.route.component'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../pages/home/home.page')
        },

        {
          path: '/base-layout',
          name: 'base-layout',
          component: () => import('../pages/base-layout/base-layout.page')
        },

        {
          path: '/doc',
          name: 'doc',
          component: () => import('../pages/doc/doc.page')
        },

        {
          path: '/test1',
          name: 'test1',
          component: () => import('../pages/test')
        },
        {
          path: '/test2',
          name: 'test2',
          component: () => import('../pages/test')
        },
        {
          path: '/test3',
          name: 'test3',
          component: () => import('../pages/test')
        },
        {
          path: '/test4',
          name: 'test4',
          component: () => import('../pages/test')
        },
        {
          path: '/test5',
          name: 'test5',
          component: () => import('../pages/test')
        },
        {
          path: '/test6',
          name: 'test6',
          component: () => import('../pages/test')
        },
        {
          path: '/test7',
          name: 'test7',
          component: () => import('../pages/test')
        },

      ]
    },
    {
      path: '/',
      component: () => import('../components/default-components/route/default.route.component'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../pages/login/login.page')
        },
        {
          path: '/login2',
          name: 'login2',
          component: () => import('../pages/login2/login.page')
        },
      ]
    },


  ],
  hooks: {
    beforeEach(to, from, next) {
      next();
    },
    beforeResolve(to, from, next) {
      next();
    },
    afterEach(to, from) {
    }
  }
};

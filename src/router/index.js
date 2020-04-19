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
      component: () => import('../core/view/layouts/base.layout'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../view/home/home.page')
        },

        {
          path: '/doc',
          name: 'doc',
          component: () => import('../view/doc/doc.page')
        },

        {
          path: '/test',
          name: 'test',
          component: () => import('../view/test/test.page')
        },

        {
          path: '/test2',
          name: 'test2',
          component: () => import('../view/test2/test.page')
        },
        {
          path: '/test3',
          name: 'test3',
          component: () => import('../view/test3/test.page')
        },
        {
          path: '/test4',
          name: 'test4',
          component: () => import('../view/test4/test.page')
        },

      ]
    },
    {
      path: '/',
      component: () => import('../core/view/layouts/default.layout'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../view/login/login.page')
        }, {
          path: '/login2',
          name: 'login2',
          component: () => import('../view/login2/login.page')
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

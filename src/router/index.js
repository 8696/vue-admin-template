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
      component: () => import('../view/components/layouts/base.layout'),
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
          path: '/test1',
          name: 'test1',
          component: () => import('../view/test')
        },
        {
          path: '/test2',
          name: 'test2',
          component: () => import('../view/test')
        },
        {
          path: '/test3',
          name: 'test3',
          component: () => import('../view/test')
        },
        {
          path: '/test4',
          name: 'test4',
          component: () => import('../view/test')
        },
        {
          path: '/test5',
          name: 'test5',
          component: () => import('../view/test')
        },
        {
          path: '/test6',
          name: 'test6',
          component: () => import('../view/test')
        },
        {
          path: '/test7',
          name: 'test7',
          component: () => import('../view/test')
        },

      ]
    },
    {
      path: '/',
      component: () => import('../view/components/layouts/default.layout'),
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

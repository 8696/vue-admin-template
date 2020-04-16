export default {
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: () => import('../core/view/layouts/base.layout'),
      children: [
        {
          path: '/home',
          component: () => import('../view/home/home.page')
        }
      ]
    },
    {
      path: '/',
      component: () => import('../core/view/layouts/default.layout'),
      children: [
        {
          path: '/login',
          component: () => import('../view/login/login.page')
        }
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

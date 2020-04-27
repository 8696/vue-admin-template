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
          component: () => import('@/views/pages/doc/card-layout.page')
        },
        {
          path: '/doc/base-layout',
          name: 'base-layout',
          component: () => import('@/views/pages/doc/base-layout.page')
        },
        // antv
        {
          path: '/antv/g2/line',
          name: 'antv-g2-line',
          component: () => import('@/views/pages/antv/antv-g2/antv-g2-line.page')
        },
        // ag-grid
        {
          path: '/ag-grid/example-1',
          name: 'ag-grid-example-1',
          component: () => import('@/views/pages/ag-grid/ag-grid-example-1.page')
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
        },
        {
          path: '/login2',
          name: 'login2',
          component: () => import('@/views/pages/login2/login.page')
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


/**
 * @description 菜单数据
 * @type {Array}
 * */

export const menuList = [
  {
    title: '首页',
    icon: 'tachometer-alt',
    routeName: 'home',
    id: 1,
    parentID: 0
  },
  {
    title: '源代码',
    icon: 'code',
    link: 'https://github.com/8696/vue-admin-template',
    id: 1601,
    parentID: 0
  },
  {
    title: '文档',
    icon: 'file-alt',
    routeName: 'doc',
    id: 2,
    parentID: 0
  },

  {
    title: '目录介绍',
    icon: '',
    routeName: 'folder',
    id: 102,
    parentID: 2
  },

  {
    title: 'FontAwesome图标',
    icon: '',
    routeName: 'doc-font-awesome',
    id: 111,
    parentID: 2
  },

  {
    title: '基本组件',
    icon: '',
    routeName: 'general-component',
    id: 106,
    parentID: 2
  },
  //
  {
    title: '全局组件',
    icon: '',
    id: 108,
    parentID: 2
  },
  {
    title: '说明',
    icon: '',
    routeName: 'global-component-doc',
    id: 109,
    parentID: 108
  },
  {
    title: 'va-container',
    icon: '',
    routeName: 'va-container-global',
    id: 110,
    parentID: 108
  },
  //
  {
    title: '响应式配置',
    icon: '',
    routeName: 'store-data',
    id: 105,
    parentID: 2
  },

  {
    title: '打包配置',
    icon: '',
    routeName: 'build',
    id: 107,
    parentID: 2
  },
  //
  {
    title: '响应式配置',
    icon: 'thumbtack',
    routeName: '',
    id: 1501,
    parentID: 0
  },
  {
    title: 'Logo配置',
    icon: '',
    routeName: 'store-data-logo',
    id: 1502,
    parentID: 1501
  },
  {
    title: '菜单折叠状态',
    icon: '',
    routeName: 'store-data-menu-collapse',
    id: 1503,
    parentID: 1501
  },
  {
    title: '菜单列表',
    icon: '',
    routeName: 'store-data-menu-list',
    id: 1504,
    parentID: 1501
  },
  //
  {
    title: '基本布局',
    icon: 'laptop-code',
    routeName: 'base-layout',
    id: 1201,
    parentID: 0
  },
  //
  {
    title: '卡片布局',
    icon: 'sticky-note',
    routeName: 'card-layout',
    id: 1301,
    parentID: 0
  },
  {
    title: 'FontAwesome图标',
    icon: 'font',
    routeName: 'font-awesome',
    id: 1101,
    parentID: 0
  },
  {
    title: '复制文本',
    icon: 'copy',
    routeName: 'copy-text',
    id: 1001,
    parentID: 0
  },
  {
    title: '数据可视化',
    icon: 'chart-area',
    routeName: '',
    id: 501,
    parentID: 0
  },
  {
    title: 'G2',
    icon: '',
    id: 502,
    parentID: 501
  },
  {
    title: '曲线折线图',
    icon: '',
    routeName: 'antv-g2-line-curved',
    id: 503,
    parentID: 502
  },
  {
    title: '双Y轴折线图',
    icon: '',
    routeName: 'antv-g2-line-double-y-axes',
    id: 504,
    parentID: 502
  },
  {
    title: '阶梯折线图',
    icon: '',
    routeName: 'antv-g2-line-step-series',
    id: 505,
    parentID: 502
  },
  {
    title: '堆叠面积图',
    icon: '',
    routeName: 'antv-g2-area-stacked',
    id: 506,
    parentID: 502
  },

  {
    title: '基础漏斗图',
    icon: '',
    routeName: 'antv-g2-funnel-basic',
    id: 507,
    parentID: 502
  },

  //
  {
    title: '解析markdown',
    icon: 'marker',
    routeName: 'markdown',
    id: 901,
    parentID: 0
  },

  //

  {
    title: '数据表格',
    icon: 'table',
    id: 701,
    parentID: 0
  },
  {
    title: '数据表格',
    icon: '',
    routeName: 'table-example-1',
    id: 702,
    parentID: 701
  },

  {
    title: '百度外链',
    icon: 'link',
    link: 'https://baidu.com',
    id: 3,
    parentID: 0
  },
  // 菜单
  {
    title: '无限级菜单',
    icon: 'bars',
    routeName: '',
    id: 301,
    parentID: 0
  },
  {
    title: '菜单A组',
    icon: 'bars',
    id: 302,
    parentID: 301
  },
  {
    title: '菜单A组01',
    routeName: 'menu',
    id: 303,
    parentID: 302
  },
  {
    title: '菜单A组02',
    routeName: 'menu2',
    id: 304,
    parentID: 302
  },
  {
    title: '菜单B组',
    icon: 'bars',
    id: 306,
    parentID: 301
  },

  {
    title: '无限级',
    icon: '',
    routeName: '',
    id: 307,
    parentID: 306
  },

  {
    title: '无限级A',
    icon: '',
    id: 308,
    parentID: 307
  },
  {
    title: '无限级B',
    icon: '',
    routeName: 'menu3',
    id: 309,
    parentID: 308
  },

  {
    title: '百度外链',
    icon: 'link',
    link: 'https://baidu.com',
    id: 305,
    parentID: 301
  },
  {
    title: '↑组件 & 实例↓',
    icon: 'sticky-note',
    link: 'https://baidu.com',
    id: 801,
    parentID: 0
  },
  {
    title: '商家管理',
    icon: 'store',
    routeName: 'store',
    id: 1401,
    parentID: 0
  },
];

/**
 * @description 菜单折合状态
 * @type {Boolean}
 * */
export const menuCollapseStatus = false;

/**
 * @description logo
 * @type {Null | Object}
 * */

export const logo = {
  path: '/static/logo/element-ui.svg',
  miniPath: '/static/logo/eleme.png',
  backgroundColor: '#1e3040',
  fixed: true
};
// export const logo = null;



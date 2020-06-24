/**
 * @description 菜单数据
 * @type {Array}
 * */

export const menuList = [
  {
    name: '首页',
    icon: 'tachometer-alt',
    route: 'home',
    id: 1,
    parentId: 0
  },
  {
    name: '源代码',
    icon: 'code',
    link: 'https://github.com/8696/vue-admin-template',
    id: 1601,
    parentId: 0
  },
  {
    name: '文档',
    icon: 'file-alt',
    route: 'doc',
    id: 2,
    parentId: 0
  },

  {
    name: '目录介绍',
    icon: '',
    route: 'folder',
    id: 102,
    parentId: 2
  },

  {
    name: 'FontAwesome图标',
    icon: '',
    route: 'doc-font-awesome',
    id: 111,
    parentId: 2
  },

  {
    name: '基本组件',
    icon: '',
    route: 'general-component',
    id: 106,
    parentId: 2
  },
  //
  {
    name: '全局组件',
    icon: '',
    id: 108,
    parentId: 2
  },
  {
    name: '说明',
    icon: '',
    route: 'global-component-doc',
    id: 109,
    parentId: 108
  },
  {
    name: 'va-container 容器',
    icon: '',
    route: 'va-container-global',
    id: 110,
    parentId: 108
  },
  {
    name: 'va-table 表格',
    icon: '',
    route: 'va-table-global',
    id: 112,
    parentId: 108
  },
  //
  {
    name: '服务组件',
    icon: '',
    id: 1901,
    parentId: 2
  },
  {
    name: '表格组合查询',
    icon: '',
    route: 'va-table-filter-service',
    id: 1902,
    parentId: 1901
  },
  //
  {
    name: '响应式配置',
    icon: '',
    route: 'store-data',
    id: 105,
    parentId: 2
  },
  {
    name: '权限配置',
    icon: '',
    route: 'doc-permission',
    id: 115,
    parentId: 2
  },
  {
    name: '打包配置',
    icon: '',
    route: 'build',
    id: 107,
    parentId: 2
  },
  //
  {
    name: '小组件',
    icon: 'columns',
    route: '',
    id: 2001,
    parentId: 0
  },
  {
    name: '表格组合查询',
    icon: '',
    route: 'component-va-table-filter',
    id: 2002,
    parentId: 2001
  },
  //
  {
    name: '响应式配置',
    icon: 'thumbtack',
    route: '',
    id: 1501,
    parentId: 0
  },
  {
    name: 'Logo配置',
    icon: '',
    route: 'store-data-logo',
    id: 1502,
    parentId: 1501
  },
  {
    name: '菜单折叠状态',
    icon: '',
    route: 'store-data-menu-collapse',
    id: 1503,
    parentId: 1501
  },
  {
    name: '菜单列表',
    icon: '',
    route: 'store-data-menu-list',
    id: 1504,
    parentId: 1501
  },
  {
    name: '固定头部',
    icon: '',
    route: 'store-data-fixed-header',
    id: 1505,
    parentId: 1501
  },
  //
  {
    name: '基本布局',
    icon: 'laptop-code',
    route: 'base-layout',
    id: 1201,
    parentId: 0
  },
  //
  {
    name: '卡片布局',
    icon: 'sticky-note',
    route: 'card-layout',
    id: 1301,
    parentId: 0
  },
  {
    name: 'FontAwesome图标',
    icon: 'font',
    route: 'font-awesome',
    id: 1101,
    parentId: 0
  },
  {
    name: '复制文本',
    icon: 'copy',
    route: 'copy-text',
    id: 1001,
    parentId: 0
  },
  {
    name: '数值计算',
    icon: 'divide',
    route: 'js-big-decimal',
    id: 2301,
    parentId: 0
  },
  {
    name: '数据可视化',
    icon: 'chart-area',
    route: '',
    id: 501,
    parentId: 0
  },
  {
    name: 'G2',
    icon: '',
    id: 502,
    parentId: 501
  },
  {
    name: '曲线折线图',
    icon: '',
    route: 'antv-g2-line-curved',
    id: 503,
    parentId: 502
  },
  {
    name: '双Y轴折线图',
    icon: '',
    route: 'antv-g2-line-double-y-axes',
    id: 504,
    parentId: 502
  },
  {
    name: '阶梯折线图',
    icon: '',
    route: 'antv-g2-line-step-series',
    id: 505,
    parentId: 502
  },
  {
    name: '堆叠面积图',
    icon: '',
    route: 'antv-g2-area-stacked',
    id: 506,
    parentId: 502
  },

  {
    name: '基础漏斗图',
    icon: '',
    route: 'antv-g2-funnel-basic',
    id: 507,
    parentId: 502
  },
  {
    name: '基础饼图',
    icon: '',
    route: 'antv-g2-basic-pie',
    id: 508,
    parentId: 502
  },
  {
    name: '基础饼图(内部文字)',
    icon: '',
    route: 'antv-g2-basic-pie2',
    id: 509,
    parentId: 502
  },

  //
  {
    name: '解析markdown',
    icon: 'marker',
    route: 'markdown',
    id: 901,
    parentId: 0
  },
  //
  {
    name: '富文本编辑器',
    icon: 'edit',
    id: 1701,
    parentId: 0
  },
  {
    name: 'wangEditor',
    icon: '',
    route: 'editor-wangEditor',
    id: 1702,
    parentId: 1701
  },
  {
    name: 'ueditor',
    icon: '',
    route: 'editor-ueditor',
    id: 1703,
    parentId: 1701
  },

  //
  {
    name: '数据表格',
    icon: 'table',
    id: 701,
    parentId: 0
  },
  {
    name: '数据表格',
    icon: '',
    route: 'table-example-1',
    id: 702,
    parentId: 701
  },

  // 菜单
  {
    name: '无限级菜单',
    icon: 'bars',
    route: '',
    id: 301,
    parentId: 0
  },
  {
    name: '菜单A组',
    icon: 'bars',
    id: 302,
    parentId: 301
  },
  {
    name: '菜单A组01',
    route: 'menu',
    id: 303,
    parentId: 302
  },
  {
    name: '菜单A组02',
    route: 'menu2',
    id: 304,
    parentId: 302
  },
  {
    name: '菜单B组',
    icon: 'bars',
    id: 306,
    parentId: 301
  },

  {
    name: '无限级',
    icon: '',
    route: '',
    id: 307,
    parentId: 306
  },

  {
    name: '无限级A',
    icon: '',
    id: 308,
    parentId: 307
  },
  {
    name: '无限级B',
    icon: '',
    route: 'menu3',
    id: 309,
    parentId: 308
  },

  {
    name: '百度外链',
    icon: 'link',
    link: 'https://baidu.com',
    id: 305,
    parentId: 301
  },
  //
  {
    name: '百度外链',
    icon: 'link',
    link: 'https://baidu.com',
    id: 3,
    parentId: 0
  },
  //
  {
    name: '商家管理',
    icon: 'store',
    route: 'store',
    id: 1401,
    parentId: 0
  },
  {
    name: '权限使用',
    icon: 'user-lock',
    route: 'permission',
    id: 2401,
    parentId: 0
  },
  //
  {
    name: '系统管理',
    icon: 'cogs',
    route: '',
    id: 2201,
    parentId: 0
  },
  {
    name: '管理员',
    icon: '',
    route: 'system-user',
    id: 2202,
    parentId: 2201
  },
  {
    name: '角色管理',
    icon: '',
    route: 'system-role',
    id: 2203,
    parentId: 2201
  },
  {
    name: '菜单管理',
    icon: '',
    route: 'system-menu',
    id: 2204,
    parentId: 2201,
    permission: 'system-menu, system-menu-m'
  },
  //
  {
    id: 3123324,
    parentId: 2204,
    name: '用户列表',
    type: 2,
    icon: '',
    order: 0,
    route: '',
    link: '',
    permission: 'system-user-list,system-user-items',
  },
  {
    id: 4356464,
    parentId: 2204,
    name: '添加用户',
    type: 2,
    icon: '',
    order: 0,
    route: '',
    link: '',
    permission: 'system-add-user',
  },
  //
  {
    name: '测试页面',
    icon: 'el-icon-football',
    route: 'test',
    id: 1801,
    parentId: 0
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
  fixed: false
};
// 无 logo
// export const logo = null;

/**
 * @description 固定 Header
 * @type {Boolean}
 * */
export const fixedHeader = false;

/**
 * Created by PhpStorm
 * Description: next..
 * User: JinwenLong
 * Author: longjinwen
 * Email: 204084802@qq.com
 * Date: 2020/4/21
 * Time: 9:08 下午
 */

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
    title: '文档',
    icon: 'file-alt',
    routeName: 'doc',
    id: 2,
    parentID: 0
  },
  {
    title: '源代码',
    icon: '',
    link: 'https://github.com/8696/vue-admin-template',
    id: 101,
    parentID: 2
  },
  {
    title: '目录介绍',
    icon: '',
    routeName: 'folder',
    id: 102,
    parentID: 2
  },

  {
    title: '基本布局',
    icon: '',
    routeName: 'base-layout',
    id: 103,
    parentID: 2
  },

  {
    title: '卡片布局',
    icon: '',
    routeName: 'card-layout',
    id: 104,
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

  {
    title: '全局组件',
    icon: '',
    routeName: 'global-component',
    id: 108,
    parentID: 2
  },

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
    title: '折线图',
    icon: '',
    routeName: 'antv-g2-line',
    id: 503,
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
    title: 'ag-grid表格',
    icon: 'table',
    id: 601,
    parentID: 0
  },

  {
    title: '实例',
    id: 602,
    routeName: 'ag-grid-example-1',
    parentID: 601
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
  path: '/static/logo/logo.png',
  miniPath: '/static/logo/mini-logo.png',
  backgroundColor: '#192632',
  fixed: true
};
// export const logo = null;



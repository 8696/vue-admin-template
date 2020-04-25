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
    title: 'antv可视化',
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
  {
    title: '基础布局',
    icon: '',
    routeName: 'base-layout',
    id: 103,
    parentID: 2
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
    icon: 'link',
    routeName: 'menu',
    id: 303,
    parentID: 302
  },
  {
    title: '菜单A组02',
    icon: 'link',
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



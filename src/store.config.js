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
    title: '基础布局',
    icon: 'pager',
    routeName: 'base-layout',
    id: 101,
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
    title: '百度外链',
    icon: 'hubspot',
    link: 'https://baidu.com',
    id: 3,
    parentID: 0
  },
  {
    title: '组件A',
    icon: 'el-icon-location',
    routeName: '',
    id: 4,
    parentID: 0
  },
  {
    title: '组件A1',
    icon: 'el-icon-location',
    routeName: 'test1',
    id: 5,
    parentID: 4
  },

  {
    title: '组件A2',
    icon: 'el-icon-location',
    routeName: 'test2',
    id: 6,
    parentID: 4
  },
  {
    title: '组件A3',
    icon: 'el-icon-location',
    routeName: 'test3',
    id: 7,
    parentID: 4
  },

  {
    title: '组件B',
    icon: 'el-icon-location',
    routeName: '',
    id: 8,
    parentID: 0
  },

  {
    title: '组件B1',
    icon: 'el-icon-location',
    routeName: 'test4',
    id: 9,
    parentID: 8
  },
  {
    title: '组件B2',
    icon: 'el-icon-location',
    routeName: 'test5',
    id: 10,
    parentID: 8
  },
  {
    title: '组件B3',
    icon: 'el-icon-location',
    routeName: 'test6',
    id: 11,
    parentID: 8
  },
  {
    title: '组件C',
    icon: 'el-icon-location',
    routeName: '',
    id: 12,
    parentID: 0
  },

  {
    title: '组件C1',
    icon: 'el-icon-location',
    routeName: 'test7',
    id: 13,
    parentID: 12
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



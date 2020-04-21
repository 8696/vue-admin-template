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
    icon: 'el-icon-location',
    routeName: 'home',
    id: 1,
    parentID: 0
  },
  {
    title: '文档',
    icon: 'el-icon-location',
    routeName: 'doc',
    id: 2,
    parentID: 0
  },
  {
    title: '百度外链',
    icon: 'el-icon-location',
    link: 'https://baidu.com',
    id: 3,
    parentID: 0
  },
  {
    title: '组件',
    icon: 'el-icon-location',
    id: 4,
    parentID: 0
  },
  {
    title: '富文本编辑器',
    icon: 'el-icon-location',
    routeName: 'test',
    id: 5,
    parentID: 4
  },
  {
    title: '其他组件',
    icon: 'el-icon-location',
    id: 6,
    parentID: 4
  },

  {
    title: '富文本编辑器22',
    icon: 'el-icon-location',
    routeName: 'test2',
    id: 7,
    parentID: 4
  },
  {
    title: '富文本编辑器33',
    icon: 'el-icon-location',
    routeName: 'test4',
    id: 8,
    parentID: 6
  },
  {
    title: '头像上传',
    icon: 'el-icon-location',
    routeName: 'test3',
    id: 9,
    parentID: 6
  },
  {
    title: '404',
    icon: 'el-icon-location',
    routeName: '404',
    id: 10,
    parentID: 6
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
  path: '@/assets/logo/logo.png',
  miniPath: '@/assets/logo/mini-logo.png',
  backgroundColor: '#192632',
  fixed: false
};

// export const logo = null;



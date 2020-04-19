import {sleep} from './view/utils/utils';

export default {
  /**
   * @description 在页面加载完成后获取菜单
   * @this -> rootVm | this 指向 vm
   * */
  getMenuList() {
    return new Promise(async resolve => {
      console.log('getMenuList');
      await sleep();
      let menuData = [
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
          id: 10,
          parentID: 6
        },
      ];
      resolve(menuData);

    });
  },

};




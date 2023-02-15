import {mapState, mapMutations} from 'vuex';
import {cloneDeep, getParentJson} from '../utils/utils';
import * as storeConfig from '../store.config';
import { titleSuffix, permission, permissionWhiteList, localStorageTokenKey } from '../config';
import vm from '../vm.vue';

export default {

  computed: {
    ...mapState({
      /**
       * @description 菜单折合状态
       * @type {Boolean}
       * */
      __menuCollapseStatus: state => state.__menu.collapse,
      /**
       * @description 当前菜单的路由父子集合
       * @type {Array<Object>}
       * */
      __menuCurrentPaths: state => state.__menu.currentPaths,
      /**
       * @description 原始菜单数据
       * @type {Array<Object>}
       * */
      __menuList: state => state.__menu.list,
      /**
       * @description 格式化后的菜单数据
       * @type {Array<Object>}
       * */
      __menuFormatList: state => state.__menu.formatList,
      /**
       * @description 权限列表
       * @type {Array<String>}
       * */
      __permissions: state => state.__menu.permissions,
    }),
    ...mapState({
      /**
       * @description tags 对象集合
       * @type {Array<Object>}
       * */
      __tagsList: state => state.__tags.list,
    }),
    ...mapState({
      /**
       * @description logo 配置
       * @type {Null | Object}
       * */
      __logo: state => state.__base.logo,
      /**
       * @description 头部固定状态
       * @type {Boolean}
       * */
      __fixedHeader: state => state.__base.fixedHeader,
    }),
    /**
     * @description 当前路由菜单项
     * @type {Array<Object>}
     * */
    __currentRoute() {
      return this.__menuCurrentPaths[this.__menuCurrentPaths.length - 1];
    }
  },
  methods: {
    ...mapMutations('__menu', {
      /**
       * @description 设置菜单的折合状态
       * @param {Boolean}
       * */
      __setMenuCollapseStatus: 'setCollapseStatus',
      /**
       * @description 设置当前菜单的路由父子集合
       * @param {Array<Object>}
       * */
      __setMenuCurrentPaths: 'setCurrentPaths',
      /**
       * @description 设置原始菜单数据
       * @param {Array<Object>}
       * */
      __setMenuList: 'setList',
      /**
       * @description 设置权限数据
       * @param {Array<String>}
       * */
      __setPermissions: 'setPermissions',
      /**
       * @description 追加权限数据
       * @param {Array<String> | String}
       * */
      __pushPermissions: 'pushPermissions',
      /**
       * @description 删除权限
       * @param {Array<String> | String}
       * */
      __removePermissions: 'removePermissions'

    }),
    ...mapMutations('__tags', {
      /**
       * @description 往 tsgs 集合里添加一项
       * @param {Object}
       * */
      __pushTagsList: 'pushList',
      /**
       * @description 删除 tags 的一项
       * @param id {Number}
       * */
      __sliceTagsOneItem: 'sliceOneItem',
      /**
       * @description 根据 ID 设置一项为 active
       * @param id {Number}
       * */
      __setTagsOneItemActive: 'setOneItemActive',
      /**
       * @description 根据 ID 根据ID将移动到指定位置 active
       * @param data {Object}
       * */
      __setTagsIdToIndex: 'setIdToIndex',
      /**
       * @description 清除 tags 列表
       * */
      __clearTagsList: 'clearList'
    }),
    ...mapMutations('__base', {
      /**
       * @description 设置 logo 状态
       * */
      __setBaseLogo: 'setLogo',
      /**
       * @description 设置头部是否固定
       * */
      __setFixedHeader: 'setFixedHeader'
    }),
    __appMounted() {
      return new Promise(resolve => {
        if (vm.__appMountedStatus) return resolve();
        vm.$once('__app-mounted', () => {
          vm.__appMountedStatus = true;
          resolve();
        });
      });
    },
    /**
     * @description 监听路由更新
     * @param to {Object} 去哪
     * @param from {Object} 来自哪
     * */
    __onRouteUpdate(to, from) {
      // -------
      this.__initMenuCurrentPaths();
      // ------- 追加 tags 的一项
      this.__pushTagsList(this.__currentRoute);
    },
    /**
     * @description 设置当前菜单的路由父子集合
     * */
    __initMenuCurrentPaths() {
      let routerName = this.$route.name;
      // 存在菜单列表中
      let activeMenuItem = this.__menuList.find(item => {
        return item.route === routerName;
      });

      // 匹配当前路由
      let currentRoute = this.$router.resolve({name: routerName});


      // 匹配首页
      let homeRoute = this.$router.resolve('/').resolved.name;
      let home = this.__menuList.find(item => {
        return item.route === homeRoute;
      });

      let paths = home ? [home] : [];

      if (activeMenuItem) {
        // 合并其他
        paths = paths.concat(getParentJson(this.__menuList, activeMenuItem.id).map(item => {
          item = cloneDeep(item);
          // 如果存在路由表中，名称优先使用路由表的 meta.name
          if (currentRoute.resolved.matched.length > 0
            && currentRoute.resolved.meta.name
          ) {
            item.name = currentRoute.resolved.meta.name;
          }
          return item;
        }).reverse());

        // 去重,两个都是首页的情况
        if (paths[0].route === paths[1].route) {
          paths.splice(0, 1);
        }

        this.__setMenuCurrentPaths(paths);

      } else if (currentRoute.resolved.matched.length > 0) {
        // 存在路由表中
        paths = paths.concat([{
          route: currentRoute.resolved.name,
          name: currentRoute.resolved.meta.name,
          id: new Date().getTime(),
          children: []
        }]);
        this.__setMenuCurrentPaths(cloneDeep(paths));

      } else {
        // 404
        paths = paths.concat([{routerName: '404', name: '404', children: []}]);
        this.__setMenuCurrentPaths(paths);
      }
      this.__setDocumentTitle();
    },
    /**
     * @description 设置文档标题
     * @param title {Null | String}
     * */
    __setDocumentTitle(title = null) {
      if (typeof title === 'string') return document.title = title + titleSuffix;
      let __menuCurrentPaths = cloneDeep(this.__menuCurrentPaths);
      if (__menuCurrentPaths.length >= 2) {
        __menuCurrentPaths.splice(0, 1);
      }
      document.title = __menuCurrentPaths.map(item => item.name).join('-') + titleSuffix;
    },
    /**
     * @description 初始化全局 store config
     * @param itemKey {Array<String>}
     * */
    __initStoreConfig(itemKey) {
      Object.keys(storeConfig).forEach(item => {
        if (!itemKey.includes(item)) return;
        this.__setStoreConfig(item, storeConfig[item]);
      });

    },
    /**
     * @description 设置全局 store config
     * @param key {String}
     * @param value {*}
     * */
    __setStoreConfig(key, value) {
      //
      switch (key) {
        case 'menuList':
          this.__setMenuList(cloneDeep(value));
          this.__onRouteUpdate(null, null);
          break;
        case 'menuCollapseStatus':
          this.__setMenuCollapseStatus(value);
          break;
        case 'logo':
          if (!value) {
            return this.__setBaseLogo(null);
          }

          if (value.hasOwnProperty('path')) {
            if (/^http/.test(value.path)) {
              this.__setBaseLogo({
                path: value.path,
              });
            } else {
              this.__setBaseLogo({
                path: this.__makeStaticPath(value.path),
              });
            }
          }
          if (value.hasOwnProperty('miniPath')) {
            if (/^http/.test(value.miniPath)) {
              this.__setBaseLogo({
                miniPath: value.miniPath,
              });
            } else {
              this.__setBaseLogo({
                miniPath: this.__makeStaticPath(value.miniPath),
              });
            }
          }
          if (value.hasOwnProperty('fixed')) {
            this.__setBaseLogo({
              fixed: value.fixed
            });
          }

          if (value.hasOwnProperty('backgroundColor')) {
            this.__setBaseLogo({
              backgroundColor: value.backgroundColor,
            });
          }
          break;
        case 'fixedHeader':
          this.__setFixedHeader(value);
      }
    },
    /**
     * @description 获取全局 store config
     * @param key {String}
     * */
    __getStoreConfig(key) {

      switch (key) {
        case 'menuList':
          return cloneDeep(this.__menuList);
        case 'menuFormatList':
          return cloneDeep(this.__menuFormatList);
        case 'menuCollapseStatus':
          return this.__menuCollapseStatus;
        case 'logo':
          return cloneDeep(this.__logo);
        case 'fixedHeader':
          return this.__fixedHeader;
      }
    },
    /**
     * @description 生成 static 静态资源文件
     * */
    __makeStaticPath(path) {
      if (process.env.NODE_ENV === 'production') {
        // 生产模式
        return window.__static + path;
      }
      return path;
    },
    /**
     * @description 清除菜单列表
     * */
    __clearMenuList() {
      this.__setMenuList([]);
      this.__setMenuCurrentPaths([]);
    },
    /**
     * @description 判断是否存在权限、数组则需要每一项都得存在
     * @param permission {String | Array<String>}
     * @return {Boolean}
     * */
    hasPermission(permission) {
      permission = Array.isArray(permission) ? permission : [permission];
      return permission.every(item => {
        return this.__permissions.includes(item);
      });
    },
    /**
     * @description 清除权限
     * */
    __clearPermission() {
      this.__setPermissions([]);
    },
    /**
     * @description 测试权限
     * */
    __testPermissions(to, menuList) {
      if (permissionWhiteList.includes(to.name)) return true;
      if (!permission) return true;
      menuList = this.__menuList.length > 1 ? this.__menuList : (menuList || []);
      if (menuList.length === 0) return true;
      return menuList.some(item => item.route === to.name);
    },
    /**
     * @description 退出
     * @param route {Object | Null}
     * */
    __logout(route = null) {
      // 清除所有本地存储
      // window.localStorage.clear();
      // window.sessionStorage.clear();
      window.localStorage.removeItem(localStorageTokenKey)
      this.__clearTagsList();
      this.__clearMenuList();
      this.__clearPermission();
      if (route === null) {
        return this.$router.replace2({
          name: 'login'
        });
      }
      return this.$router.replace2({
        name: 'login',
        query: Object.assign({
          __redirect: route.name
        }, route.query)
      });
    },
    /**
     * @description 没有权限后续流程
     * */
    __notPermission(callBack) {
      this.$router.replace2({name: '401'}, () => {
        typeof callBack === 'function' && callBack();
      });
    }
  }
};


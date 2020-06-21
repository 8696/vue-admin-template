import {parseJsonTree, cloneDeep} from '@/utils/utils';

export default {
  namespaced: true,
  state: {
    /**
     * @description 是否折合菜单
     * */
    collapse: false,
    /**
     * @description 当前页面的菜单父子路径
     * */
    currentPaths: [],
    /**
     * @description 菜单列表
     * */
    list: [],
    /**
     * @description 格式化菜单
     * */
    formatList: [],
    /**
     * @description 权限列表
     * */
    permissions: []
  },
  mutations: {
    /**
     * @description 设置菜单折叠状态
     * @param state {Object}
     * @param status {Boolean}
     * */
    setCollapseStatus(state, status) {
      state.collapse = status;
    },
    /** 设置当前页面菜单路径
     * @description
     * @param state {Object}
     * @param list {Array<Object>}
     * */
    setCurrentPaths(state, list) {
      state.currentPaths = list;
    },
    /**
     * @description 设置菜单数据
     * @param state {Object}
     * @param list {Array<Object>}
     * */
    setList(state, list) {
      list = list.filter(item => item.type !== 2);
      state.list = cloneDeep(list);
      state.formatList = parseJsonTree(list);
    },
    /**
     * @description 设置权限列表
     * @param state {Object}
     * @param permissions {Array<String>}
     * */
    setPermissions(state, permissions) {
      state.permissions = cloneDeep(permissions);
    },
    /**
     * @description 追加一个或多个权限
     * @param state {Object}
     * @param permission {String | Array<String>}
     * */
    pushPermissions(state, permission) {
      let p = cloneDeep(state.permissions);
      permission = Array.isArray(permission) ? permission : [permission];
      state.permissions = [...new Set(p.concat(permission))];
    },
    /**
     * @description 删除一个或多个权限
     * @param state {Object}
     * @param permission {String | Array<String>}
     * */
    removePermissions(state, permission) {
      permission = Array.isArray(permission) ? permission : [permission];

      state.permissions = cloneDeep(state.permissions).filter(item => {
        return !permission.includes(item);
      });
    }

  }
};

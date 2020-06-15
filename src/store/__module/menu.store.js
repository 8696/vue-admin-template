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
     * @description
     * @param state {Object}
     * @param status {Boolean}
     * */
    setCollapseStatus(state, status) {
      state.collapse = status;
    },
    /**
     * @description
     * @param state {Object}
     * @param list {Array}
     * */
    setCurrentPaths(state, list) {
      state.currentPaths = list;
    },
    /**
     * @description
     * @param state {Object}
     * @param list {Array<Object>}
     * */
    setList(state, list) {
      list = list.filter(item => item.type !== 2);
      state.list = cloneDeep(list);
      state.formatList = parseJsonTree(list);
    },
    /**
     * @description
     * @param state {Object}
     * @param permissions {Array<String>}
     * */
    setPermissions(state, permissions) {
      state.permissions = cloneDeep(permissions);
    },
    /**
     * @description 追加一个权限
     * @param state {Object}
     * @param permission {String}
     * */
    pushPermissions(state, permission) {
      let p = cloneDeep(state.permissions);
      !p.includes(permission) && p.push(permission);
      state.permissions = p;
    }

  }
};

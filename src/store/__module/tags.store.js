import {cloneDeep, parseJsonTree} from '@/utils/utils';

export default {
  namespaced: true,
  state: {
    /**
     * @description tags 列表
     * */
    list: [], // [ {title: '', active:true, route: ''} ,..]

  },
  mutations: {

    /**
     * @description
     * @param state {Object}
     * @param route {Object}
     * */
    pushList(state, route) {
      if (!route) return;
      route = cloneDeep(route);
      let findStatus = state.list.some(item => {
        return item.route === route.route;
      });
      if (!findStatus) {
        state.list.push(route);
      }
      state.list = state.list.map(item => {
        item.active = item.route === route.route;
        return item;
      });
    },
    /**
     * @description 根据 ID 删除一项
     * */
    sliceOneItem(state, id) {
      state.list = state.list.filter(item => {
        return item.id !== Number(id);
      });
    },
    /**
     * @description 根据 ID 设置一项为 active
     * */
    setOneItemActive(state, id) {
      state.list = state.list.map(item => {
        item.active = item.id === Number(id);
        return item;
      });
    },
    /**
     * @description 根据ID将移动到指定位置
     * */
    setIdToIndex(state, {id = '', index = ''}) {
      let list = cloneDeep(state.list);
      let tag = list.splice(list.findIndex(item => {
        return item.id === Number(id);
      }), 1);
      list.splice(index, 0, tag[0]);
      state.list = list;
    },
    /**
     * @description 清除 tags 列表
     * */
    clearList(state) {
      state.list = [];
    }

  }
};

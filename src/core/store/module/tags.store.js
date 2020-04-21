import {deepCopy, parseJsonTree} from '../../utils/utils';

export default {
  namespaced: true,
  state: {
    /**
     * @description tags 列表
     * */
    list: [], // [ {title: '', active:true, routeName: ''} ,..]

  },
  getters: {},
  actions: {},
  mutations: {

    /**
     * @description
     * @param state {Object}
     * @param route {Object}
     * */
    pushList(state, route) {
      if (!route) return;
      route = deepCopy(route);
      let findStatus = state.list.some(item => {
        return item.id === route.id;
      });
      if (!findStatus) {
        state.list.push(route);
      }
      state.list = state.list.map(item => {
        item.__active = item.id === route.id;
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
        item.__active = item.id === Number(id);
        return item;
      });
    },
  }
};

import merge from 'webpack-merge';

export default {
  namespaced: true,
  state: {
    logo: null,
    fixedHeader: false
  },
  mutations: {
    /**
     * @description 设置 logo
     * @param state {Object}
     * @param logo {Null | Object}
     * */
    setLogo(state, logo) {
      if (!logo) return state.logo = null;
      //
      state.logo = !state.logo ? {} : state.logo;
      state.logo = merge(state.logo, logo);
    },
    /**
     * @description 设置头部固定
     * @param state {Object}
     * @param fixedHeader {Boolean}
     * */
    setFixedHeader(state, fixedHeader) {
      state.fixedHeader = fixedHeader;
    }
  }
};

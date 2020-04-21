import merge from 'webpack-merge';

export default {
  namespaced: true,
  state: {
    logo: null,
  },
  getters: {},
  actions: {},
  mutations: {
    setLogo(state, logo) {
      if (!logo) return state.logo = null;
      // 
      state.logo = !state.logo ? {} : state.logo;
      state.logo = merge(state.logo, logo);
    }
  }
};

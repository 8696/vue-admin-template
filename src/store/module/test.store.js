export default {
  namespaced: true,
  state: {
    status: false,
  },
  getters: {},
  actions: {},
  mutations: {

    setStatus (state, status) {
      state.status = status;
    },

  }
};

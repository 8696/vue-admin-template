export default {
  namespaced: true,
  state: {},
  getters: {},
  actions: {},
  mutations: {
    /**
     * @description
     * @param state {Object}
     * @param key {String}
     * @param value {any}
     * */
    setConfig(state, key, value) {
      state[key] = value;
    },
  }
};

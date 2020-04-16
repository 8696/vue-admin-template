export default {
  namespaced: true,
  state: {
    userInfo: {},
  },
  getters: {},
  actions: {},
  mutations: {
    /**
     * @description 提交用户信息
     * @param state {Object} 本 store 模块state
     * @param userInfo {Object} 用户信息
     * */
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    },

  }
};

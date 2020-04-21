import vm from '../vm';

export default {
  methods: {
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
     * */
    __onRouteUpdate() {
      // -------
      this.__initMenuCurrentPaths();
      // ------- 追加 tags 的一项
      this.__pushTagsList(this.__currentRoute);
    }
  },


};

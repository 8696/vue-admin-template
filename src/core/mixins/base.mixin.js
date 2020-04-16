import vm from '../vm';

export default {
  methods: {
    __appMounted() {
      return new Promise(resolve => {
        if (vm.__appMountedStatus) return resolve();
        vm.$on('__app-mounted', () => {
          vm.__appMountedStatus = true;
          resolve();
        });
      });
    }
  }
};

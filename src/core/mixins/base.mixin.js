import vm from '../vm';
import {sleep} from '../../view/utils/utils';

const cache = {};
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
    __baseLayoutMounted() {
      return new Promise(resolve => {
        if (vm.__baseLayoutMountedStatus) return resolve();
        vm.$once('__base-layout-mounted', () => {
          vm.__baseLayoutMountedStatus = true;
          resolve();
        });
      });
    },

  },

};

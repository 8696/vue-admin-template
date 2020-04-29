import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import __menu from './__module/menu.store';
import __tags from './__module/tags.store';
import __base from './__module/base.store';

import merge from 'webpack-merge';

export default new Vuex.Store(merge({
  // ...


}, {
  modules: {
    __menu,
    __tags,
    __base
  },
}));

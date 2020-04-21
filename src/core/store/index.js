import Vue from 'vue';
import Vuex from 'vuex';
import merge from 'webpack-merge';

Vue.use(Vuex);
import __menu from './module/menu.store';
import __tags from './module/tags.store';
import __base from './module/base.store';


import stores from '../../store/index';


export default new Vuex.Store(merge({
  modules: {
    __menu,
    __tags,
    __base
  },
}, stores));

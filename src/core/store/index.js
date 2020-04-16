import Vue from 'vue';
import Vuex from 'vuex';
import merge from 'webpack-merge';

Vue.use(Vuex);
import userInfo from './module/userInfo.store';


import stores from '../../store/index';


export default new Vuex.Store(merge({
  modules: {
    userInfo
  },
}, stores));

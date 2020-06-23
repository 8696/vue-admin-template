import Vue from 'vue';
import Vuex from 'vuex';
import merge from 'webpack-merge';

Vue.use(Vuex);
import __menu from './__module/menu.store';
import __tags from './__module/tags.store';
import __base from './__module/base.store';

// 测试模块
import todo from './todo.store.module';


export default new Vuex.Store(merge({
    // 测试
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
    },
    getters: {
      getCount(state) {
        return state.count;
      }
    },
    actions: {
      asyncIncrement(store) {
        store.commit('increment');
      },
      asyncDecrement(store) {
        store.commit('decrement');
      }
    },
    // module
    modules: {
      todo
    }
  },
  {
    modules: {
      __menu,
      __tags,
      __base
    }
  }));

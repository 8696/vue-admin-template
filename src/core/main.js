// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import router from './router';
import store from './store';

console.log('vue version: ' + Vue.version);

/**
 * @description 全局 css
 * */
import './assets/scss/app.scss';

/**
 * @description 注册全局 filter
 * */
import * as globalFilters from './filters/global.filters';

Object.keys(globalFilters).forEach(filterName => {
  Vue.filter(filterName, globalFilters[filterName]);
});

/**
 * @description 自定义 vm 实例
 * */
import vm from './vm';

Vue.prototype.vm = vm;
/**
 * @description 全局 mixin
 * */
import baseMixin from './mixins/base.mixin';

Vue.mixin(baseMixin);

/**
 * @description element-ui
 * */
const elementUI = () => import('../element-ui/index');

Vue.config.productionTip = false;

const App = () => import('./view/App');

elementUI().then(({default: elementUIInstall}) => {
  elementUIInstall(Vue);
  new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
    mounted() {
      vm.$emit('__app-mounted');
    }
  });
});

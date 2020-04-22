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
 * @description 自定义 vm 实例
 * */
import vm from './vm';

Vue.prototype.vm = vm;
Vue.vm = vm;

/**
 * @description 全局 mixin
 * */
const baseMixin = () => import('./mixins/base.mixin');

const storeMixin = () => import('./mixins/store.mixin');

/**
 * @description element-ui
 * */
const elementUI = () => import('../element-ui/index');


const App = () => import('./App');

Vue.config.productionTip = false;


(async () => {

  let {default: _baseMixin} = await baseMixin();
  let {default: _storeMixin} = await storeMixin();

  Vue.mixin(_baseMixin);
  Vue.mixin(_storeMixin);


  let {default: elementUIInstall} = await elementUI();
  elementUIInstall(Vue);

  new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
  });

})();


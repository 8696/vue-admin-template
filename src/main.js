// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import router from './route/route';
import store from './store/store';

console.log('vue version: ' + Vue.version);

/**
 * @description 全局 css
 * */
import './assets/scss/app.scss';

/**
 * @description 自定义 vm 实例
 * */
import vm from './vm.vue';

Vue.prototype.vm = vm;
Vue.vm = vm;

/**
 * @description 全局 mixin
 * */

const __mixins = () => import('./mixins/__mixins');

/**
 * @description 全局 filter
 * */
import * as filter from './filter/filter';

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});
/**
 * @description element-ui
 * @doc https://element.eleme.cn/
 * */
const elementUI = () => import('./element-ui/element-ui');

/**
 * @description fort awesome 字体
 * @doc https://fontawesome.com/
 * */
const fontAwesome = () => import('./font-awesome/font-awesome');


const App = () => import('./views/App');

Vue.config.productionTip = false;


(async () => {

  let {default: mixins} = await __mixins();
  let {default: elementUIInstall} = await elementUI();
  let {default: fontAwesomeInstall} = await fontAwesome();

  Vue.mixin(mixins);
  elementUIInstall(Vue);
  fontAwesomeInstall(Vue);

  new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
  });

})();


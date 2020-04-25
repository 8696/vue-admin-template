import Vue from 'vue';
/**
 * @description 字体
 * @doc https://fontawesome.com/
 * */
import {icon, library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Object.keys(fas).forEach(item => {
  library.add(fas[item]);
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

/**
 * @description 代码高亮
 * @doc
 * */
import hljs from 'highlight.js'; //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css';

Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
/**
 * @description 全局
 * */
import * as filter from './filter/filter';

Object.keys(filter).forEach(key => {
  Vue.use(key, filter[key]);
});

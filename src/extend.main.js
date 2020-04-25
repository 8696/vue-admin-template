import Vue from 'vue';
/**
 * @description 字体
 * @doc https://fontawesome.com/
 * */

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Object.keys(fas).forEach(item => {
  library.add(fas[item]);
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

/**
 * @description 全局 filter
 * */
import * as filter from './filter/filter';

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

/**
 * Created by WebStorm
 * Description: 注册全局组件
 * User: JinwenLong
 * Author: longjinwen
 * Email: 204084802@qq.com
 * Date: 2020/5/1
 * Time: 1:41 下午
 */

import connector from '../views/global/va-container.component';

export default function install (Vue) {
  Vue.component('va-container', connector);
}




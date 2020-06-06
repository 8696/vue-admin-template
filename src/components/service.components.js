/**
 * Created by VsCode
 * Description: 注册以服务调用的组件
 * User: JinwenLong
 * Author: longjinwen
 * Email: 204084802@qq.com
 * Date: 2020/5/3
 * Time: 5:10 下午
 */

import ListFilterComponent from '../views/service/va-list-filter.service';

export default function install(Vue) {
  /**
   * $vaListFilter
   * */
  let VaListFilterComponentConstructor = Vue.extend(ListFilterComponent);

  Vue.prototype.$vaTableFilter = function (data) {
    let visible = data.visible;
    data.visible = false;
    let instance = new VaListFilterComponentConstructor({
      el: document.createElement('div'),
      data
    });
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      [undefined, true].includes(visible) && instance.show();
    });
    return instance;
  };

}



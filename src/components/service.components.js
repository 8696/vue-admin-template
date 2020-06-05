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
  let ListFilterComponentConstructor = Vue.extend(ListFilterComponent);

  Vue.prototype.$vaListFilter = function (fields = []) {
    return new Promise((resolve, reject) => {
      let instance = new ListFilterComponentConstructor({
        el: document.createElement('div'),
        data: fields,
        methods: {
          get() {
            resolve(this.data);
            this.handleClose();
          },
          handleOpen() {
            this.dialogVisible = true;
          },
          handleClose() {
            reject();
            this.dialogVisible = false;
            // 保证动画的过渡 | nextTick 过渡不明显
            setTimeout(() => {
              this.$destroy();
            }, 100);
          }
        },
        destroyed() {
          this.$el.remove();
        }
      });
      instance.$el.setAttribute('class', 'va-list-filter');
      document.body.appendChild(instance.$el);
      Vue.nextTick(() => {
        instance.handleOpen();
      });
    });
  };

}



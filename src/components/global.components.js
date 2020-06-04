/**
 * Created by VsCode
 * Description: 注册全局组件
 * User: JinwenLong
 * Author: longjinwen
 * Email: 204084802@qq.com
 * Date: 2020/5/1
 * Time: 1:41 下午
 */


export default function install (Vue) {
  Vue.component('va-container', () => import('@/views/global/va-container.component'));
}


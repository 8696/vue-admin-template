/**
 * 方式一：
 *
 * 推荐：***
 *  将被作用的元素的display值设置为none和还原设置
 * 优点：
 *  1、可以动态设置权限
 * 缺点：
 *  1、消耗性能，因为如果该元素具有事情的情况下依然会进行绑定
 *  2、css设置问题，因为该元素只是简单的进行隐藏。在css设置元素顺序可能会产生问题
 *
 * */

function is(el, binding, vnode) {
  let value = Array.isArray(binding.value) ? binding.value : [binding.value];
  let has = vnode.context.hasPermission(value);
  if (has) {
    el.style.display = el.getAttribute('display') || getComputedStyle(el).display;
  } else {
    !el.getAttribute('display') && el.setAttribute('display', getComputedStyle(el).display);
    el.style.display = 'none';
  }
}

/**
 * 方式二：
 *
 * 推荐：*****
 *  将被作用的元素的进行移除
 * 优点：
 *  1、节省性能、会自动进行事件解绑
 *  2、由于元素被删除，css等设置相对好设置
 * 缺点：
 *  1、不能进行动态的设置权限，因为移除后无法再进行还原
 *
 * */
/*
function is(el, {value}, vnode) {
  value = Array.isArray(value) ? value : [value];
  let has = vnode.context.hasPermission(value);
  if (!has) {
    el.remove();
  }
}
*/


export default {
  install(Vue) {
    Vue.directive('permission', {
      inserted: function (...args) {
        is(...args);
      },
      update(...args) {
        is(...args);
      }
    });
  }
};



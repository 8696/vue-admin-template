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



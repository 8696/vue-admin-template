<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    mounted() {
      let children = this.$el.children;

      children = Array.from(children);

      let topEls = [];
      let bottomEls = [];
      let baseEls = [];
      // 整理所有元素
      children.forEach(item => {
        if (item.getAttribute('position') === 'top') {
          topEls.push(item);
        } else if (item.getAttribute('position') === 'bottom') {
          bottomEls.push(item);
        } else {
          baseEls.push(item);
        }
      });
      bottomEls = bottomEls.reverse();

      // 所有顶部、底部固定的高度
      let topHeight = 0;
      let bottomHeight = 0;

      topEls.forEach(item => {
        topHeight += Number.parseInt(window.getComputedStyle(item).height);
      });

      bottomEls.forEach(item => {
        bottomHeight += Number.parseInt(window.getComputedStyle(item).height);
      });

      topEls.forEach((item, index) => {
        let height = 0;
        if (index > 0) {
          // 第二个元素 +
          for (let i = 0; i < index; i++) {
            height += Number.parseInt(window.getComputedStyle(topEls[i]).height);
          }
          item.style.top = height + 'px';
        } else {
          // 第一个元素
          item.style.top = height + 'px';
        }
      });
      bottomEls.forEach((item, index) => {
        let height = 0;
        if (index > 0) {
          // 第二个元素 +
          for (let i = 0; i < index; i++) {
            height += Number.parseInt(window.getComputedStyle(bottomEls[i]).height);
          }
          item.style.bottom = height + 'px';
        } else {
          // 第一个元素
          item.style.bottom = height + 'px';
        }
      });

      if (baseEls.length > 1) {
        // 设置第一个和最后一个的padding
        baseEls[0].style.paddingTop = topHeight + 'px';
        baseEls[baseEls.length - 1].style.paddingBottom = bottomHeight + 'px';
      } else {
        baseEls[0].style.paddingTop = topHeight + 'px';
        baseEls[0].style.paddingBottom = bottomHeight + 'px';
        baseEls[0].style.overflow = 'auto';
      }
    }

  };
</script>

<style scoped lang="scss">


</style>

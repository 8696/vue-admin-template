<template>
  <section>
    <div class="native-scroll" v-if="type === 1">
      <slot/>
    </div>
    <vue-scroll :ops="scrollOptions" ref="scroll" v-if="type === 2" v-bind="$attrs" v-on="$listeners">
      <slot/>
    </vue-scroll>
  </section>
</template>

<script>
  import vueScroll from 'vuescroll';

  export default {
    components: {
      vueScroll
    },
    data() {
      return {
        type: 2, // 1 原生滚动条 | 2 vuescroll
        scrollOptions:{
          vuescroll: {
            detectResize: true
          },
          rail: {
            opacity: 0,
          },
          bar: {
            size: '6px',
            showDelay: 500,
            keepShow: true,
            background: '#ffffff',
            opacity: .2,
            specifyBorderRadius: '0',
            onlyShowBarOnScroll: true
          }
        }
      };
    },
    created() {
      let userAgent = navigator.userAgent.toLowerCase();
      this.type = (userAgent.includes('chrome') || userAgent.includes('safari') || userAgent.includes('mac os'))
        && (!userAgent.includes('edge'))
        ? 1 : 2;
    },
    methods: {
      menuActive() {
        let activeMenu = document.querySelectorAll('.layout-menu-ls .is-active')[0];
        if (!activeMenu) return;
        if (activeMenu.offsetTop <= window.innerHeight) return;
        let y = activeMenu.offsetTop - 60;
        if (this.type === 2) {
          return this.$refs.scroll.scrollTo({y});
        }
        document.querySelector('.native-scroll .layout-menu').scrollTop = y;
      }
    }
  };
</script>
<style lang="scss">
  .native-scroll {

    $scrollbar-color: rgba(0, 0, 0, 0);

    .layout-menu::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background-color: $scrollbar-color;
    }

    .layout-menu::-webkit-scrollbar-track {
      background-color: $scrollbar-color;
    }

    .layout-menu::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: rgba(0, 0, 0, .2);
    }

    .layout-menu {
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>

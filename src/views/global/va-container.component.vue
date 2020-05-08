<template>
  <div class="base-container" :style="{height: containerHeight}">
    <div class="container-slot">
      <div class="container-slot-header" :style="{height: height.headerHeight}">
        <slot name="header"></slot>
      </div>
      <div class="container-slot-body"
           :style="{
              marginTop: height.headerHeight,
              marginBottom: height.footerHeight,
              height: `calc(100% - ${parseInt(height.headerHeight) + parseInt(height.footerHeight)}px)`
           }">
        <slot name="body"></slot>
      </div>
      <div class="container-slot-footer" :style="{height: height.footerHeight}">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      containerHeight: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        height: {
          headerHeight: 'auto',
          footerHeight: 'auto'
        }
      };
    },
    mounted() {
      this.computedHeight();
    },
    methods: {
      async computedHeight() {
        await this.$nextTick();
        this.height.headerHeight = window
          .getComputedStyle(this.$el
            .querySelector('.container-slot-header')).height;
        this.height.footerHeight = window
          .getComputedStyle(this.$el
            .querySelector('.container-slot-footer')).height;
      }
    }
  };
</script>

<style scoped lang="scss">

  .base-container {
    height: 100%;
    position: relative;

    .container-slot {
      max-height: 100%;
      height: 100%;
      overflow: hidden;
    }

    .container-slot-header, .container-slot-footer {
      position: absolute;
      width: 100%;
      left: 0;
    }

    .container-slot-header {
      top: 0;
    }

    .container-slot-body {
      overflow: auto;
    }

    .container-slot-footer {
      bottom: 0;
    }
  }

</style>

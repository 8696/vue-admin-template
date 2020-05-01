<template>
  <div class="base-container" :style="{height: height.containerHeight}">
    <div class="container-slot">
      <div class="container-slot-header" :style="{height: height.headerHeight}">
        <slot name="header"></slot>
      </div>
      <div class="container-slot-body"
           :style="{
              marginTop:height.headerHeight,
              marginBottom:height.footerHeight,
              height:`calc(100% - ${parseInt(height.headerHeight) + parseInt(height.footerHeight)}px)`
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
      height: {
        type: Object,
        default() {
          return {
            containerHeight: '100%',
            headerHeight: '40px',
            footerHeight: '50px'
          };
        }
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

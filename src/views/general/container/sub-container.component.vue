<template>
  <div class="base-sub-container"
       :position="fixed"
       :style="{
                height,
                position: ['top','bottom'].includes(fixed) ? 'absolute' : 'static',
                top: 'auto',
                bottom: 'auto'
               }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: String,
        default: 'auto'
      },
      fixed: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style scoped>

</style>

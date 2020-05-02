<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import vm from '@/vm.vue';
  export default {
    mounted() {
      vm.$emit('__app-mounted');
    }
  };
</script>



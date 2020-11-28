<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import vm from '../vm.vue';

  export default {
    async mounted() {
      vm.$emit('__app-mounted');
      try {
        window.closeVaLoading()
      } catch (e) {
      }
    }
  };
</script>



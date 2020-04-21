<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import vm from '../vm';

  export default {
    mounted() {
      vm.$emit('__app-mounted');
    },
    beforeMount() {
      //
    }
  };
</script>


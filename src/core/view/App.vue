<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import vm from '../vm';

  import configHooks from '../../config.hooks';

  export default {
    name: 'App',
    async mounted() {
      vm.$emit('__app-mounted');
    }
  };
</script>


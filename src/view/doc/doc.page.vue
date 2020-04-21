<template>
  <div>
    <div v-for="item in 100">doc.page {{item}}</div>

  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      console.log('doc');
      setTimeout(() => {
        this.__setStoreConfig('logo', {
          miniPath: '@/assets/logo/logo.png',
          path: '@/assets/logo/mini-logo.png',
          backgroundColor: '#076ac7',
          fixed: true
        });
      }, 3000);
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>

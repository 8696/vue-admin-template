<template>
  <div>
    <div v-for="item in 100">doc.page {{item}}</div>

  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('doc');
      setTimeout(() => {
        this.__setStoreConfig('logo', {
          miniPath: 'http://explorer.moac.io/img/new-logo.png',
          path: '/static/微信截图_20200422094423.png',
          backgroundColor: '#076ac7',
          fixed: false
        });
      }, 2000);
    }

  };
</script>

<style scoped>

</style>

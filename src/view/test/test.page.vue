<template>
  <div>
    test.page
    {{str}}
  </div>
</template>

<script>

  export default {
    data() {
      return {
        str: ''
      };
    },
    mounted() {
      this.str = Math.random();
      console.log('123456');
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>

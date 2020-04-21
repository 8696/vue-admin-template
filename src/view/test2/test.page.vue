<template>
  <div>
    test2.page
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
      console.log('56789');
      this.str = Math.random();
    },
    computed: {},
    methods: {},

  };
</script>

<style scoped>

</style>

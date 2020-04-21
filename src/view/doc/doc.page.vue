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
      console.log('doc')
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>

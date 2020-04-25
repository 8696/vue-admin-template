<template>
  <div @click="login">
    login2.page
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {
      login() {
        this.$router.push({name: 'home'});
      }
    }
  };
</script>

<style scoped>

</style>

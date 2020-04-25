<template>
  <div @click="login">
    login.page
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
        this.$router.push({name: 'login2'});
      }
    }
  };
</script>

<style scoped>

</style>

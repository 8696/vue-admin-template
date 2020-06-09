<template>
  <div style="">
    <el-button @click="open">open</el-button>
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
      open() {
        this.__clearTagsList();
        this.__clearMenuList();
      }
    }
  };
</script>

<template>
  <div style="font-size: 50px;display: flex;justify-content: center;align-items: center">
    <el-button @click="open2">Open</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        number: 0
      };
    },
    mounted() {
    },
    computed: {},
    methods: {
      open2() {
        this.$vaListFilter({
          data: [
            {
              title: 'AA',
              field: 'aa'
            }
          ]
        }).then(res => {
          console.log(res);
        });

      }
    }
  };
</script>

<style scoped>

</style>

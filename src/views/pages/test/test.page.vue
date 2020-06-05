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
          fields: [
            {
              name: 'AA',
              field: 'aa'
            }
          ]
        }).then(res => {
          this.$message(JSON.stringify(res))
        });

      }
    }
  };
</script>

<style scoped>

</style>

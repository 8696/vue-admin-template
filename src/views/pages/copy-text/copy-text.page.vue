<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>vue-clipboard2 复制插件</h2>
        </div>
        <div class="card-body">
          <el-input v-model.trim="text"/>
          <el-button style="margin-top: 10px" @click="copyText">复制文本</el-button>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      };
    },
    methods: {
      copyText() {
        if(!this.text){
          return this.$message({
            type: 'error',
            message: '未输入内容'
          })
        }
        this.$copyText(this.text)
          .then(() => {
            this.$message({
              type: 'success',
              message: '复制成功'
            });
          })
          .catch((e) => {
            this.$message({
              type: 'error',
              message: e.toString()
            });
          });
      }
    }
  };
</script>

<style scoped lang="scss">


</style>

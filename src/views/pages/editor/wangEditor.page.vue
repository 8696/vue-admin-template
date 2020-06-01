<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>wangEditor</h2>
        </div>
        <div class="card-body">
          <div ref="editor" style="text-align:left"></div>
          <br>
          <el-button @click="getContent">查看内容</el-button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>预览</h2>
        </div>
        <div class="card-body" v-html="editorContent || '<span>未输入..</span>'"></div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import E from 'wangeditor';

  export default {
    data() {
      return {
        editorContent: '',
        editor: null
      };
    },
    methods: {
      getContent() {
        this.$message.info(this.editor.txt.html());
      }
    },
    mounted() {
      this.editor = new E(this.$refs.editor);
      this.editor.customConfig.onchange = (html) => {
        this.editorContent = html;
      };
      // 配置了此项之后，上传图片才有“上传图片”选项
      this.editor.customConfig.uploadImgServer = '/upload';
      this.editor.create();
    }
  };
</script>

<style scoped>
</style>

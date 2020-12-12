<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>ueditor</h2>
        </div>
        <div class="card-body">
          <div id="ueditor"></div>
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
      <div class="card">
        <div class="card-header">
          <h2>后端配置</h2>
        </div>
        <div class="card-body">
          <a target="_blank" href="http://fex.baidu.com/ueditor/#server-deploy">官方</a>
          <br>
          <a target="_blank" href="https://github.com/8696/node-ueditor">nodeJs版</a>
        </div>
      </div>
    </el-row>

  </div>
</template>

<script>
  import {asyncLoadScript} from '@/utils/utils';

  export default {
    data() {
      return {
        ueditor: null,
        editorContent: ''
      };
    },
    async mounted() {
      await asyncLoadScript().js('http://file.cdn.icode.link/ueditor/utf8-php/ueditor.config.js');
      await asyncLoadScript().js('http://file.cdn.icode.link/ueditor/utf8-php/ueditor.all.min.js');
      await asyncLoadScript().js('http://file.cdn.icode.link/ueditor/utf8-php/lang/zh-cn/zh-cn.js');
      this.ueditor = UE.getEditor('ueditor', {
        initialFrameHeight: 300,
        autoHeightEnabled: false
      });
      this.ueditor.addListener('contentChange', (editor) => {
        this.editorContent = this.ueditor.getContent();
      });
    },
    computed: {},
    methods: {
      getContent() {
        this.$message.info(this.ueditor.getContent());
      }
    }
  };
</script>

<style scoped>

</style>

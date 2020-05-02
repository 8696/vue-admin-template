<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-body">
          <markdown-component :text="md"/>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import md from '../markdown/global-component/global-component.md';
  import MarkdownComponent from '@/views/general/markdown/markdown.component';

  export default {
    components:{
      MarkdownComponent
    },
    computed: {
      md() {
        return md;
      }
    },
  };
</script>


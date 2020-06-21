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
  import MarkdownComponent from '@/views/general/markdown/markdown.component';
  import md from './markdown/permission.md';

  export default {
    components: {
      MarkdownComponent
    },

    computed: {
      md() {
        return md;
      }
    },
    methods: {}
  };
</script>

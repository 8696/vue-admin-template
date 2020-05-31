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
  import md from './markdown/store-data.md';
  import MarkdownComponent from '@/views/general/markdown/markdown.component';

  export default {
    components: {MarkdownComponent},
    data() {
      return {
        logoBackColor: 'red'
      };
    },
    mounted() {
    },
    computed: {
      md() {
        return md;
      }
    },
    methods: {

    }
  };
</script>

<style scoped>

</style>

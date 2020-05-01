<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-body">
          <markdown-component :text="md"/>
          <el-input v-model="logoBackColor"/>
          <el-button style="margin-top: 10px" @click="setLogoBackColor">设置Logo背景</el-button>
          <el-button style="margin-top: 10px" @click="getLogoConfig">获取logo配置</el-button>
          <el-button style="margin-top: 10px" @click="hideLogo">关闭logo</el-button>
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
      setLogoBackColor() {
        this.__setStoreConfig('logo', {
          backgroundColor: this.logoBackColor
        });
      },
      getLogoConfig() {
        this.$message(JSON.stringify(this.__getStoreConfig('logo')));
      },
      hideLogo() {
        this.__setStoreConfig('logo', null);
      }
    }
  };
</script>

<style scoped>

</style>

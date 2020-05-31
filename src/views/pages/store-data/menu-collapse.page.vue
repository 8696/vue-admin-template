<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>菜单折叠状态配置</h2>
        </div>
        <div class="card-body">
          <h3>配置信息</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
          <pre>
{{__menuCollapseStatus}}
          </pre>
          </div>
          <h3>基本设置</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <pre>
代码
this.__setStoreConfig('menuCollapseStatus', {{this.status}});
            </pre>
          </div>
          <el-form label-width="80px">
            <el-form-item label="折叠状态">
              <el-radio v-model="status" :label="false">展开</el-radio>
              <el-radio v-model="status" :label="true">折叠</el-radio>
            </el-form-item>
            <el-form-item label="">
              <el-button @click="setStatus">设置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: false
      };
    },
    mounted() {
      this.status = this.__getStoreConfig('menuCollapseStatus');
    },
    computed: {},
    methods: {
      setStatus() {
        this.__setStoreConfig('menuCollapseStatus', this.status);
      },
    }
  };
</script>

<style scoped>

</style>

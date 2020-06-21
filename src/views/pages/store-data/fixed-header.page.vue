<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h1 style="font-size: 28px;padding-top: 12px">固定头部</h1>
        </div>
        <div class="card-body">
          <h3>配置信息</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
          <pre>
{{__fixedHeader}}
          </pre>
          </div>
          <h3>设置</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
          <pre>
this.__setStoreConfig('fixedHeader', false);
va-container 组件在头部固定下才生效
          </pre>
          </div>
          <el-button @click="setFixedHeader(true)">固定</el-button>
          <el-button @click="setFixedHeader(false)">非固定</el-button>

          <br>
          <br>
          <div v-for="i in 200">{{i}}</div>
        </div>
      </div>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {
      setFixedHeader(status) {
        this.__setStoreConfig('fixedHeader', status);
      }
    }
  };
</script>

<template>
  <div class="page">
    <va-container :containerHeight="containerHeight">
      <template v-slot:header>
        <div class="flex-center"
             style="height:100%;background-color: #fff;border: 1px solid #cccccc;padding: 20px">
          固定在头部 <br> 高度自适应
        </div>
      </template>
      <template v-slot:body>
        <div class="flex-direction-column">
          <el-button type="primary" @click="$router.push2({name:'va-container-global'})">查看文档</el-button>
          <div class="flex-center" v-for="item in 100">{{item}}</div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="flex-center"
             style="height:100%;background-color: #fff;border: 1px solid #cccccc;padding: 20px">
          固定在底部 <br> 高度自适应
        </div>
      </template>
    </va-container>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        containerHeight: '100%'
      };
    }
  };
</script>


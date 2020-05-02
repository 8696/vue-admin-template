<template>
  <div class="page">

    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>这里标题</h2>
        </div>
        <div class="card-body">
          这里是内容区
        </div>
      </div>
    </el-row>


    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="card-header">
            <h2>这里标题A</h2>
          </div>
          <div class="card-body">
            这里是内容区A
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="card-header">
            <h2>这里标题B</h2>
          </div>
          <div class="card-body">
            这里是内容区B
          </div>
        </div>
      </el-col>

    </el-row>

    <!-------------------->

    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="card">
          <div class="card-header">
            <h2>这里标题A</h2>
          </div>
          <div class="card-body">
            这里是内容区
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="card">
          <div class="card-header">
            <h2>这里标题B</h2>
          </div>
          <div class="card-body">
            这里是内容区
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="card">
          <div class="card-header">
            <h2>这里标题C</h2>
          </div>
          <div class="card-body">
            这里是内容区
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        code003:`

`
      };
    },
    mounted() {

    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>

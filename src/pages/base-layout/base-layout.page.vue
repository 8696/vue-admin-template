<template>
  <div class="page">
    <el-row>
      <div class="container">
        <el-alert
          title="响应式基础布局采用element-ui栅格布局，全部采用类似卡片的形式"
          type="success">
        </el-alert>
      </div>
    </el-row>
    <!-------------->
    <el-row>
      <div class="container">
        <div class="container-title">
          这里标题
        </div>
        <div class="container-body">
          这里是内容区
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="container" v-highlight>
        <div class="container-title">
          代码演示
        </div>
        <div class="container-body" v-highlight>
          <pre>
          <code class="html">
              {{html001}}
          </code>
        </pre>
        </div>
      </div>
    </el-row>
    <!-------------->
    <el-row>
      <div class="container">
        <el-alert
          title="响应式布局，只需要在 el-row 标签下定义 el-col"
          type="success">
        </el-alert>
      </div>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="container">
          <div class="container-title">
            这里标题A
          </div>
          <div class="container-body">
            这里是内容区A
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="container">
          <div class="container-title">
            这里标题B
          </div>
          <div class="container-body">
            这里是内容区B
          </div>
        </div>
      </el-col>

    </el-row>
    <el-row>
      <div class="container" v-highlight>
        <div class="container-title">
          代码演示
        </div>
        <div class="container-body" v-highlight>
          <pre>
          <code class="html">
              {{html002}}
          </code>
        </pre>
        </div>
      </div>
    </el-row>
    <!-------------------->
    <el-row>
      <div class="container">
        <el-alert
          title="添加多个卡片"
          type="success">
        </el-alert>
      </div>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="container">
          <div class="container-title">
            这里标题
          </div>
          <div class="container-body">
            这里是内容区
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="container">
          <div class="container-title">
            这里标题
          </div>
          <div class="container-body">
            这里是内容区
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <div class="container">
          <div class="container-title">
            这里标题
          </div>
          <div class="container-body">
            这里是内容区
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="container" v-highlight>
        <div class="container-title">
          代码演示
        </div>
        <div class="container-body" v-highlight>
          <pre>
          <code class="html">
              {{html003}}
          </code>
        </pre>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'base-layout.page',
    data() {
      return {
        html001: `
  <el-row>
    <div class="container">
      <div class="container-title">
        这里标题
      </div>
      <div class="container-body">
        这里是内容区
      </div>
    </div>
  </el-row>
`,
        html002:`
  <el-row>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="container">
        <div class="container-title">
          这里标题
        </div>
        <div class="container-body">
          这里是内容区
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="container">
        <div class="container-title">
          这里标题
        </div>
        <div class="container-body">
          这里是内容区
        </div>
      </div>
    </el-col>

  </el-row>
        `,
        html003:`
  <el-row>
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
      <div class="container">
        <div class="container-title">
          这里标题
        </div>
        <div class="container-body">
          这里是内容区
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
      <div class="container">
        <div class="container-title">
          这里标题
        </div>
        <div class="container-body">
          这里是内容区
        </div>
      </div>
    </el-col>
    
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
      <div class="container">
        <div class="container-title">
          这里标题
        </div>
        <div class="container-body">
          这里是内容区
        </div>
      </div>
    </el-col>
  </el-row>
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

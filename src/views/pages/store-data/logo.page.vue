<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h1 style="font-size: 28px;padding-top: 12px">Logo配置</h1>
        </div>
        <div class="card-body">
          <h3>配置信息</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
          <pre>
{{__logo?__logo:'null'}}
          </pre>
          </div>
          <h3>基本设置</h3>
          <br>
          <el-form label-width="80px">
            <el-form-item label="Logo">
              <el-input v-model="logo.path"></el-input>
              <div style="opacity: .5;font-size: 13px;line-height: 20px;margin-top: 4px">可以设置为/static下的本地图片(源代码绝对路径，已经处理过、生产环境仍按可按此方式设置)或者远程图片</div>
            </el-form-item>
            <el-form-item label="折叠Logo">
              <el-input v-model="logo.miniPath"></el-input>
            </el-form-item>
            <el-form-item label="背景颜色">
              <el-input v-model="logo.backgroundColor"></el-input>
            </el-form-item>
            <el-form-item label="是否固定">
              <el-radio v-model="logo.fixed" :label="true">固定</el-radio>
              <el-radio v-model="logo.fixed" :label="false">非固定</el-radio>
            </el-form-item>
            <el-form-item label="">
              <el-button @click="setLogo">设置</el-button>
            </el-form-item>
          </el-form>
          <h3>单项设置</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <pre>
logo配置传入一个对象，如果只需要修改一个属性(例如是否固定展示)，那么对象只需要传入该属性即可
    代码
    this.__setStoreConfig('logo', {
      fixed: true
    });
            </pre>
          </div>
          <el-form label-width="80px">
            <el-form-item label="是否固定">
              <el-radio v-model="fixed" :label="true">固定</el-radio>
              <el-radio v-model="fixed" :label="false">非固定</el-radio>
            </el-form-item>
            <el-form-item label="">
              <el-button @click="setLogoFixed">设置</el-button>
            </el-form-item>
          </el-form>
          <h3>关闭Logo</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <pre>
关闭Logo仅需要在配置文件/src/store.config.js中logo项设置为null即可，获取使用配置设置手动关闭
    代码
    this.__setStoreConfig('logo', null);
            </pre>
          </div>
          <el-form label-width="80px">
            <el-form-item label="">
              <el-button @click="closeLogo">设置</el-button>
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
        logo: {
          path: '',
          miniPath: '',
          backgroundColor: '',
          fixed: true
        },
        fixed: false
      };
    },
    mounted() {
      this.logo = this.__getStoreConfig('logo');
      this.fixed = this.__getStoreConfig('logo').fixed;
    },
    computed: {},
    methods: {
      setLogo() {
        this.__setStoreConfig('logo', this.logo);
      },
      // 设置固定 logo
      setLogoFixed() {
        this.__setStoreConfig('logo', {
          fixed: this.fixed
        });
      },
      // 关闭 logo
      closeLogo() {
        this.__setStoreConfig('logo', null);
      }

    }
  };
</script>

<style scoped>

</style>

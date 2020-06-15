<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>
            Font Awesome字体图标
            <a
              style="font-size: 14px;color: #999999;
            cursor: pointer;font-weight: normal"
              href="javascript:;" @click="$router.push2({
                name:'doc-font-awesome'
              })">配置</a>
            <a
              style="font-size: 14px;color: #999999;
            cursor: pointer;font-weight: normal"
              href="https://fontawesome.com" target="_blank"
            >文档</a>
          </h2>
        </div>
        <div class="card-body">
          <div class="fonts-box" @click="copyFont">
            <div class="item" v-for="item in fonts">
              <font-awesome-icon-2 size="1x" :icon="item"/>
              <span :data-text="item">{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {fas} from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

  Object.keys(fas).forEach(item => {
    library.add(fas[item]);
  });
  export default {
    components: {
      FontAwesomeIcon2: FontAwesomeIcon
    },
    data() {
      return {
        fonts: []
      };
    },
    mounted() {

      Object.keys(fas).forEach(item => {
        this.fonts.push(fas[item].iconName);
      });
      //
    },
    methods: {
      copyFont($event) {
        let text = $event.target.getAttribute('data-text');
        if (text) {
          this.$copyText(text)
            .then(() => {
              this.$message({
                type: 'success',
                message: '复制成功'
              });
            })
            .catch((e) => {
              this.$message({
                type: 'error',
                message: e.toString()
              });
            });
        }

      }
    }
  };
</script>

<style scoped lang="scss">
  .fonts-box {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 0;

      span {
        color: #999;
        margin-top: 6px;
        text-align: center;
      }
    }
  }

</style>

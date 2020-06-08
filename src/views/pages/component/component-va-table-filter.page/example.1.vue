<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>
            基本用法
            <a
              style="font-size: 14px;color: #999999;
            cursor: pointer;font-weight: normal"
              href="javascript:;" @click="$router.push2({
                name:'va-table-filter-service'
              })">文档</a>
          </h2>
        </div>
        <div class="card-body">
          <el-button @click="open">初始化并展示</el-button>
          <el-button @click="getFilterData">获取筛选数据</el-button>
          <el-button @click="destroy">销毁</el-button>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        instance: null
      };
    },

    methods: {
      open() {
        // 实例
        if (!this.instance) {
          // 保存实例
          this.instance = this.$vaTableFilter({
            fields: [
              {
                name: '姓名',
                field: 'username'
              },
              {
                name: '地址',
                field: 'address'
              },
            ],
            visible: false
          });
          // 监听
          this.onInstanceAction();
        }
        this.instance.show();
      },
      destroy() {
        if (this.instance) {
          this.instance = this.instance.destroy();
          return this.$message.success('销毁组件并删除DOM成功');
        }
        this.$message.error('组件未创建');
      },
      getFilterData() {
        if (this.instance) {
          return this.$message.success(JSON.stringify(this.instance.getFilterData()));
        }
        this.$message.error('组件未创建');
      },
      onInstanceAction() {
        this.instance.on('cancel', () => {
          this.$message.info('关闭');
          return Promise.resolve();
        });
        this.instance.on('confirm', (data) => {
          this.$message.success(JSON.stringify(data));
          return Promise.resolve();
        });
      }
    },

  };
</script>

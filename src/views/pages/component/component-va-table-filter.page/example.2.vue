<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>
            结合 el-table
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
          <el-table
            ref="table"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        instance: null,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      open() {
        // 实例
        if (!this.instance) {
          // 保存实例
          this.instance = this.$vaTableFilter({
            tableVm: this.$refs['table'],
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

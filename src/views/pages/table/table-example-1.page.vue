<template>
  <div class="page">
    <div class="card">
      <div class="card-header">
        <h2>基础表格</h2>
      </div>
      <div class="card-body">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            sortable
            header-align="left"
            align="left">
            <template slot="header" slot-scope="scope">
            <span class="title">
              <el-popover
                placement="bottom"
                width="400"
                trigger="hover">
              <span>奥术大师</span>
              <span slot="reference">姓名</span>
            </el-popover>
            </span>
            </template>
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            header-align="right"
            align="right">
            <template slot="header" slot-scope="scope">
            <span class="title">
              <el-popover
                placement="bottom"
                width="400"
                trigger="hover">
              <span>奥术大师</span>
              <span slot="reference">地址</span>
            </el-popover>
            </span>
            </template>
            <template slot-scope="scope">
              <span>{{scope.row.address}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
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
        }],
        search: ''
      };
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      headerClick() {
        console.log('s');
      }
    },
  };
</script>

<style scoped lang="scss">
  .title {
    .el-icon-menu {
      display: none;
    }
  }
  .title:hover{
    .el-icon-menu {
      display: inline-block;
    }
  }
</style>

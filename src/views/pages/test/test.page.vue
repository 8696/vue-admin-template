<template>
  <div style="">
    <!--


        -->
    <va-table2 ref="table"
               border
               @sort-change="sortChange"
               :va-table-filter-cancel="vaTableFilterCancel"
               :va-table-filter-confirm="vaTableFilterConfirm"
               :api-demo-get="APIDemoGet"
               :data="tableData">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        sortable
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编">
        <template slot-scope="scope">
          {{scope.row.zip}}
        </template>
      </el-table-column>
    </va-table2>
    <el-button @click="open3">Open3</el-button>
  </div>
</template>

<script>
  import VaTable2 from './va-table2.component';

  import API from '../../../api/api';

  export default {
    components: {VaTable2},
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ],
        msg: new Date().getTime()
      };
    },
    mounted() {
    },
    computed: {
      APIDemoGet() {
        return API.demo.get;
      }
    },
    methods: {

      open3() {
        this.$refs['table'].vaTableFilter();
      },
      vaTableFilterCancel() {
        console.log('1');
        console.log(this);
        return Promise.resolve();
      },
      vaTableFilterConfirm(data) {
        console.log('2');
        console.log(data);
        console.log(this);
        return Promise.resolve();
      },
      sortChange(...args) {
        console.log('sortChange2');
        console.log(...args);
      }
    }
  };
</script>

<style scoped>

</style>

<template>
  <div style="">

    <va-table ref="table-shop"
              border
              :va-table-filter-cancel="vaTableFilterCancel"
              :va-table-filter-confirm="vaTableFilterConfirm"
              @sort-change="sortChange"
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
    </va-table>
    <el-button @click="open2">Open2</el-button>
    <el-button @click="open3">Open3</el-button>
    <div>{{msg | parseDateTime}}</div>
  </div>
</template>

<script>

  export default {
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
    computed: {},
    methods: {
      open2() {
        let instance = this.$vaTableFilter({
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
          // tableVm: this.$refs['table-shop'],
          visible: true
        });
        instance.on('cancel', () => {
          return Promise.resolve();
        });
        instance.on('confirm', (data) => {
          console.log(data);
          return Promise.resolve();
        });
      },
      open3() {
        this.$refs['table-shop'].vaTableFilter();
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
      sortChange() {
        console.log('2');
      }

    }
  };
</script>

<style scoped>

</style>

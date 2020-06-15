<template>
  <div class="page">
    <va-container>
      <template v-slot:header>
        <div class="container-header">
          <div class="action">
            <el-button size="small" type="primary" icon="el-icon-plus" circle></el-button>
            <el-button size="small" type="danger" icon="el-icon-delete" circle></el-button>
          </div>

          <div class="filter">
            <div class="filter-item">
              <div style="width: 80px" class="filter-title">
                <span>姓名</span>
              </div>
              <el-input size="small" v-model="formInline.user" placeholder="姓名"></el-input>
            </div>
            <div class="filter-item">
              <div style="width: 80px" class="filter-title">
                <span>地址</span>
              </div>
              <el-input size="small" v-model="formInline.user" placeholder="地址"></el-input>
            </div>
            <div class="filter-item">
              <el-button size="small" type="primary">查询</el-button>
              <el-button size="small" @click="openFilter" type="primary">高级查询</el-button>
            </div>
          </div>
        </div>

      </template>
      <template v-slot:body>
        <div class="card">
          <div class="card-body">
            <va-table
              :va-table-filter-cancel="vaTableFilterCancel"
              :va-table-filter-confirm="vaTableFilterConfirm"
              ref="table"
              :data="tableData"
              style="width: 100%">
              <el-table-column
                type="selection">
              </el-table-column>
              <el-table-column
                fixed
                prop="date"
                label="日期">
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
                <template slot-scope="scope">
                  <div style="overflow: hidden;
                              text-overflow:ellipsis;
                              white-space: nowrap;">{{scope.row.address}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </va-table>
          </div>
        </div>

      </template>
      <template v-slot:footer>
        <div class="container-footer">
          <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </template>
    </va-container>
  </div>

</template>

<script>
  export default {

    data() {
      return {
        tableData: [],
        formInline: {
          user: '',
          region: ''
        }
      };
    },
    created() {
      for (let i = 0; i < 20; i++) {
        this.tableData.push({
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路1518',
          zip: 200333
        });
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      openFilter() {
        this.$refs.table.vaTableFilter({
          excludeField: [
            '操作'
          ]
        });
      },
      vaTableFilterCancel() {
        this.$message.warning('取消查询');
        return Promise.resolve();
      },
      vaTableFilterConfirm(data) {
        this.$message.info(JSON.stringify(data));
        return Promise.resolve();
      }
    }
  };
</script>
<style scoped lang="scss">
  .container-header {
    padding: 20px 30px;
    /*box-shadow: 5px 4px 6px 0 rgba(58,58,58,0.1);*/
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    z-index: 9;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .container-footer {
    padding: 20px 30px;
    background: #fff;
    box-shadow: -3px -2px 6px 0 rgba(58, 58, 58, 0.1);
    z-index: 9;
    position: relative;
  }

  .filter {
    display: flex;

    .filter-item {
      display: flex;
      align-items: center;
      margin-left: 10px;
    }

    .filter-title {
      display: flex;
      justify-content: center;
    }
  }
</style>

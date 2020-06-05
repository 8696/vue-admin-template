<template>
  <div>
    <el-dialog
      custom-class="va-list-filter-dialog"
      :visible.sync="dialogVisible"
      width="600px"
      title="组合查询"
      :before-close="handleClose">
      <div>
        <el-table
          :data="data"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="方式"
            width="60">
            <template slot-scope="scope">
              <span>并且</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="字段">
            <template slot-scope="scope">
              <el-select size="small" v-model="scope.row.fieldValue" placeholder="请选择">
                <el-option
                  v-for="item in scope.row.fields"
                  :key="item.field"
                  :label="item.name"
                  :value="item.field">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="条件">
            <template slot-scope="scope">
              <el-select size="small" v-model="scope.row.filterValue" placeholder="请选择">
                <el-option
                  v-for="item in scope.row.filterType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            width="160"
            label="值">
            <template slot-scope="scope">
              <el-input size="small" v-model="scope.row.inputValue"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            header-align="right"
            align="right"
            width="60"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="addFilterField" v-if="scope.$index === 0" type="text">添加</el-button>
              <el-button @click="removeFilterField(scope.$index)" v-else type="text" style="color: #e57470">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <div slot="footer">
        <el-button type="info" size="small" @click="handleClose">关闭</el-button>
        <el-button type="primary" size="small" @click="get">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {deepCopy} from '@/utils/utils';

  export default {
    data() {
      return {
        dialogVisible: false,
        data: [],
        initListItem: {
          fields: [],
          fieldValue: '',
          filterType: [],
          filterValue: '',
          inputValue: ''
        },
        fields: [],
        filterType: [
          {
            label: '等于',
            value: '等于'
          }
        ]
      };
    },
    mounted() {
      this.addFilterField();
    },
    computed: {},

    methods: {
      /**
       * @description 设置表格的字段筛选
       * */
      addFilterField() {
        let index = this.data.length;
        if (!this.data[index]) {
          this.data.push(deepCopy(this.initListItem));
        }
        this.data[index].fields = this.fields;
        this.data[index].filterType = this.filterType;
      },
      removeFilterField(index) {
        this.data.splice(index, 1);
      }
    },

  };
</script>

<style lang="scss">
  .va-list-filter-dialog {
    .el-dialog__body {
      padding: 10px 20px;
    }

    .el-dialog__footer {
      margin-top: 10px;
    }
  }
</style>

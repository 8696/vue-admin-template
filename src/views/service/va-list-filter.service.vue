<template>
  <div :class="[customClass]">
    <el-dialog
      custom-class="va-list-filter-dialog"
      :visible.sync="visible"
      width="600px"
      :show-close="false"
      title="组合查询"
      :before-close="_cancel">
      <div>
        <el-table
          :data="data"
          style="width: 100%">
          <el-table-column
            width="60">
            <template slot="header" slot-scope="scope">
              <span class="title">方式</span>
            </template>
            <template slot-scope="scope">
              <span>并且</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <span class="title">字段</span>
            </template>
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
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <span class="title">条件</span>
            </template>
            <template slot-scope="scope">
              <el-select size="small" v-model="scope.row.filterValue" placeholder="请选择">
                <el-option
                  v-for="item in scope.row.filterType"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            width="160">
            <template slot="header" slot-scope="scope">
              <span class="title">值</span>
            </template>
            <template slot-scope="scope">
              <el-input size="small" v-model="scope.row.inputValue"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            header-align="right"
            align="right"
            width="60">
            <template slot="header" slot-scope="scope">
              <span class="title">操作</span>
            </template>
            <template slot-scope="scope">
              <el-button @click="_addFilterField" v-if="scope.$index === 0" type="text">添加</el-button>
              <el-button @click="_removeFilterField(scope.$index)" v-else type="text" style="color: #e57470">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer">
        <el-button v-if="showCancelButton" size="small" @click="_cancel">{{cancelButtonText}}</el-button>
        <el-button type="primary" size="small" @click="_confirm">{{confirmButtonText}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {cloneDeep} from '@/utils/utils';
  import Vue from 'vue';

  export default {
    data() {
      return {
        visible: false,
        data: [],
        initListItem: {
          fields: [],
          fieldValue: '',
          filterType: [],
          filterValue: '',
          inputValue: ''
        },
        filterType: [
          {name: '等于', value: '='},
          {name: '包含', value: 'like'},
          {name: '大于', value: '>'},
          {name: '小于', value: '<'},
          {name: '大于等于', value: '>='},
          {name: '小于等于', value: '<='},
        ],
        fieldsList: [],
        onHandleFunctions: {},
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        customClass: '',
        excludeField: []
      };
    },
    mounted() {
      this._confirmFilterField();
      this._addFilterField();
    },
    computed: {},

    methods: {
      /**
       * @description 设置表格的字段筛选
       * */
      _addFilterField() {
        let index = this.data.length;
        if (!this.data[index]) {
          this.data.push(cloneDeep(this.initListItem));
        }
        try {
          this.data[index].fields = this.fieldsList;
          // 初始值
          this.data[index].fieldValue = this.data[index].fields[0].field;
          // ---
          this.data[index].filterType = this.filterType;
          // 初始值
          this.data[index].filterValue = this.data[index].filterType[0].value;
        } catch (e) {
        }

      },
      _removeFilterField(index) {
        this.data.splice(index, 1);
      },
      /**
       * @description 获取当前调用者的字段参数
       * */
      _confirmFilterField() {
        //
        if (Array.isArray(this.fields)) {
          return this.fieldsList = this.fields.filter(item => {
            return !this.excludeField.includes(item.name)
              && !this.excludeField.includes(item.field);
          });
        }
        // 表格组件
        if (this.tableVm instanceof Vue && Array.isArray(this.tableVm.columns)) {
          return this.fieldsList = this.tableVm.columns
            .map((item) => {
              if (item.hasOwnProperty('property')
                && item.hasOwnProperty('label')) {
                return {
                  name: item.label,
                  field: item.property,
                };
              }
              return null;
            })
            .filter(item => item)
            .filter(item => {
              return !this.excludeField.includes(item.name)
                && !this.excludeField.includes(item.field);
            });
        }
      },
      _confirm() {
        if (typeof this.onHandleFunctions.confirm === 'function') {
          let data = this.getFilterData();
          let result = this.onHandleFunctions.confirm(data);
          // Promise 实例
          if (result instanceof Promise) {
            return result
              .then(() => {
                this.visible = false;
              })
              .catch(() => {
              });
          }
          return this.visible = ![undefined, true].includes(result);
        }
        this.visible = false;
      },
      _cancel() {
        if (typeof this.onHandleFunctions.cancel === 'function') {
          let result = this.onHandleFunctions.cancel();
          // Promise 实例
          if (result instanceof Promise) {
            return result
              .then(() => {
                this.visible = false;
              })
              .catch(() => {
              });
          }
          return this.visible = ![undefined, true].includes(result);
        }
        this.visible = false;
      },
      show() {
        this.visible = true;
      },
      destroy() {
        this.$destroy();
        return null;
      },
      /**
       * @description 添加监听函数
       * @param type {String} confirm | cancel
       * @param handle {Function} 监听函数
       * */
      on(type, handle) {
        this.onHandleFunctions[type] = handle;
      },
      /**
       * @description 获取重组数据
       * @return {Array}
       * */
      getFilterData() {
        return this.data.map(item => {
          return {
            join: 'and',
            field: item.fieldValue,
            op: item.filterValue,
            value: item.inputValue
          };
        });
      }
    },
    destroyed() {
      this.$el.remove();
    }

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

    .title {
      font-size: 16px;
    }
  }
</style>

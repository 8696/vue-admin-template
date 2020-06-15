<template>
  <div class="page">
    <va-container>
      <template v-slot:header>
        <div class="container-header">
          <div class="action">
            <el-button @click="dialogOpenHandle" size="small" type="primary" icon="el-icon-plus"
                       circle></el-button>
          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="card">
          <div class="card-body">
            <va-table
              row-key="id"
              :data="tableData"
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
              style="width: 100%">
              <el-table-column
                prop="title"
                label="名称">
              </el-table-column>
              <el-table-column
                prop="type"
                header-align="center"
                align="center"
                label="类型">
                <template slot-scope="scope">
                  <div>
                    <template v-if="scope.row.type === 0">
                      <el-tag size="small">目录</el-tag>
                    </template>
                    <template v-if="scope.row.type === 1">
                      <el-tag size="small" type="success">菜单</el-tag>
                    </template>
                    <template v-if="scope.row.type === 2">
                      <el-tag size="small" type="info">按钮</el-tag>
                    </template>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="order"
                header-align="center"
                align="center"
                label="排序">
              </el-table-column>
              <el-table-column
                prop="route"
                align="center"
                header-align="center"
                label="路由名称">
                <template slot-scope="scope">
                  <div>
                    <template v-if="scope.row.type === 0">
                      <span>-</span>
                    </template>
                    <template v-if="scope.row.type === 1">
                      <span>{{scope.row.route}}</span>
                    </template>
                    <template v-if="scope.row.type === 2">
                      <span>-</span>
                    </template>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="permission"
                header-align="center"
                align="center"
                label="权限标识">
                <template slot-scope="scope">
                  <div>
                    <template v-if="scope.row.permission">
                      <span>{{scope.row.permission}}</span>
                    </template>
                    <template v-else>
                      <span>-</span>
                    </template>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                header-align="right"
                align="right"
                width="120">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click="update(scope.row)"
                    size="small">
                    修改
                  </el-button>
                  <el-button
                    type="text"
                    @click="remove(scope.row)"
                    size="small">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </va-table>
          </div>
        </div>

      </template>
    </va-container>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="dialogCloseHandle">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型">
          <el-radio-group v-model="form.type">
            <el-radio :label="0">目录</el-radio>
            <el-radio :label="1">菜单</el-radio>
            <el-radio :label="2">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <div style="display: flex;align-items: center">
            <el-cascader
              style="width: 100%"
              v-model="form.parentId"
              placeholder="一级菜单"
              :clearable="true"
              :props="{label: 'title', value: 'id', checkStrictly: true, emitPath: false}"
              :options="tableData">
            </el-cascader>
            <el-tooltip class="item" effect="dark"
                        content="默认为一级菜单。如果是‘菜单’在选择一项作为‘父项’，要将‘父项’的type值改成0" placement="top-start">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item v-if="form.type === 1" label="路由/链接">
          <div style="display: flex;align-items: center">
            <el-input v-model="form.to"></el-input>
            <el-tooltip class="item" effect="dark"
                        content="根据输入自动检测是否为外链" placement="top-start">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item v-if="form.type !== 0" label="权限标识">
          <div style="display: flex;align-items: center">
            <el-input v-model="form.permission"></el-input>
            <el-tooltip class="item" effect="dark"
                        content="以逗号分隔表示多个" placement="top-start">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item v-if="form.type !== 2" label="图标">
          <div style="display: flex;align-items: center">
            <el-input v-model="form.icon"></el-input>
            <el-tooltip class="item" effect="dark" content="支持Font Awesome和element-ui图标" placement="top-start">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
        </el-form-item>
        <el-form-item v-if="form.type !== 2" label="排序">
          <el-input-number
            v-model="form.order"
            :min="0"
            label="排序"></el-input-number>
        </el-form-item>
      </el-form>
      {{form}}
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCloseHandle">取 消</el-button>
        <el-button type="primary" @click="dialogConfirmHandle">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
  import {parseJsonTree} from '../../../../utils/utils';

  export default {

    data() {
      return {
        dialogVisible: false,
        tableData: [],
        form: {
          type: 0,
          id: null,
          parentId: null,
          title: '',
          to: '',
          route: '',
          link: '',
          permission: '',
          icon: '',
          order: 0,
          dialogType: ''
        }
      };
    },
    created() {

      let list = [
        {
          id: 1,
          parentId: 0,
          title: '系统管理',
          type: 0,
          icon: 'cogs',
          order: 0,
          route: '',
          link: '',
          permission: '',
        },
        {
          id: 2,
          parentId: 1,
          title: '用户管理',
          type: 1,
          icon: '',
          order: 0,
          route: 'system-menu',
          link: '',
          permission: 'system-user',
        },
        {
          id: 3,
          parentId: 2,
          title: '用户列表',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'system-user',
        },
        {
          id: 4,
          parentId: 2,
          title: '添加用户',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'system-add-user',
        },
        {
          id: 5,
          parentId: 2,
          title: '删除用户',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'system-remove-user',
        },
        {
          id: 10,
          parentId: 0,
          title: '商家管理',
          type: 0,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: '',
        },
        {
          id: 11,
          parentId: 10,
          title: '商家列表',
          type: 1,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: '',
        },
        {
          id: 12,
          parentId: 11,
          title: '商家更新',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'store-update',
        },
        {
          id: 13,
          parentId: 11,
          title: '商家删除',
          type: 2,
          icon: '',
          order: 0,
          route: '',
          link: '',
          permission: 'store-update',
        }
      ];

      this.tableData = parseJsonTree(list);
    },
    methods: {
      dialogCloseHandle() {
        this.dialogVisible = false;
      },
      dialogOpenHandle() {
        this.dialogVisible = true;
      },
      update(row) {
        this.resetDialogForm('update');
        this.form.type = row.type;
        this.form.title = row.title;
        this.form.id = row.id;
        this.form.parentId = row.parentId;
        this.form.to = row.route || row.link;
        this.form.permission = row.permission;
        this.form.icon = row.icon;
        this.form.order = row.order;
        this.dialogOpenHandle();
      },
      remove(row) {
        this.$message.info(String(row.id));
      },
      dialogConfirmHandle() {
        let form = this.form;
        form.parentId = form.parentId || 0;
        form.route = /^http/.test(form.to) ? '' : form.to;
        form.link = /^http/.test(form.to) ? form.to : '';
        this.$message.info(JSON.stringify(form));
      },
      resetDialogForm(dialogType = 'add') {
        this.form.id = null;
        this.form.parentId = null;
        this.form.title = '';
        this.form.to = '';
        this.form.route = '';
        this.form.link = '';
        this.form.permission = '';
        this.form.icon = '';
        this.form.order = 0;
        this.form.dialogType = dialogType;
      }
    }
  };
</script>
<style scoped lang="scss">
  .container-header {
    padding: 20px 30px;
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

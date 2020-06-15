<template>
  <div class="page">
    <va-container>
      <template v-slot:header>
        <div class="container-header">
          <div class="action">
            <el-button @click="dialogOpenHandle" size="small" type="primary" icon="el-icon-plus"
                       circle></el-button>
            <el-button size="small" type="danger" icon="el-icon-delete" circle></el-button>

          </div>
        </div>
      </template>
      <template v-slot:body>
        <div class="card">
          <div class="card-body">
            <va-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                width="40"
                type="selection">
              </el-table-column>

              <el-table-column
                prop="name"
                label="名称">
              </el-table-column>
              <el-table-column
                prop="create"
                header-align="center"
                align="center"
                label="创建者">
              </el-table-column>
              <el-table-column
                prop="note"
                header-align="center"
                align="center"
                label="备注">
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

        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.note"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <div style="position: relative;top: 7px;left: -9px">
            <el-tree
              ref="tree"
              node-key="id"
              show-checkbox
              @check-change="checkChange"
              :default-checked-keys="defaultCheckedKeys"
              :data="menu"
              :default-expand-all="true"
              :props="defaultProps"></el-tree>
          </div>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCloseHandle">取 消</el-button>
        <el-button type="primary" @click="dialogConfirmHandle">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
  export default {

    data() {
      return {
        dialogVisible: false,
        tableData: [],
        form: {
          name: '',
          note: '',
          roles: []
        },
        defaultProps: {
          children: 'children',
          label: 'title'
        },
        defaultCheckedKeys: [],
        menu: [
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
            children: [
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
                children: [
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
                    title: '其他操作',
                    type: 2,
                    icon: '',
                    order: 0,
                    route: '',
                    link: '',
                    permission: 'system-action-user',
                  }
                ]
              }
            ]
          }
        ]

      };
    },
    created() {
      this.tableData.push({
        id: 1,
        name: '销售',
        create: 'Admin',
        note: '销售',
        roles: [1, 2, 5]
      });
    },
    methods: {
      dialogCloseHandle() {
        this.dialogVisible = false;
      },
      dialogOpenHandle() {
        this.dialogVisible = true;
      },
      async update(row) {
        this.form.name = row.name;
        this.form.note = row.note;
        this.form.roles = row.roles;

        this.dialogOpenHandle();
        await this.$nextTick();
        row.roles.forEach(item => {
          this.$refs.tree.setChecked(item, true, false);
        });
      },
      remove(row) {
        this.$message.info(String(row.id));
      },
      dialogConfirmHandle() {
        this.$message.info(JSON.stringify(this.form));
      },
      checkChange() {
        // 选中的 ID 集合
        this.form.roles = this.$refs.tree.getCheckedNodes(false, true).map(item => {
          return item.id;
        });
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

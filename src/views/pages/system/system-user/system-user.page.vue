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
                prop="type"
                width="80"
                header-align="center"
                align="center"
                label="头像">
                <template slot-scope="scope">
                  <div>
                    <template>
                      <img :src="scope.row.avatar" style="height: 40px" alt="">
                    </template>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="username"
                label="用户名">
              </el-table-column>

              <el-table-column
                prop="role"
                header-align="center"
                align="center"
                label="角色组">
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

        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-checkbox-group v-model="form.role">
            <el-checkbox :key="item.id" v-for="item in roles" :label="item.id">{{item.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            drag
            action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
  const avatar = require('../../../../assets/images/avatar.jpeg');
  export default {

    data() {
      return {
        dialogVisible: false,
        tableData: [],
        form: {
          username: '',
          avatar: '',
          password: '',
          role: []
        },
        roles: [
          {
            id: 1,
            name: '销售'
          },
          {
            id: 2,
            name: '运营'
          },
          {
            id: 3,
            name: '客服'
          }
        ]
      };
    },
    created() {
      this.tableData.push({
        id: 1,
        username: '龙锦文',
        avatar: avatar,
        role: '销售,运营'
      });
    },
    methods: {
      dialogCloseHandle() {
        this.dialogVisible = false;
      },
      dialogOpenHandle() {
        this.dialogVisible = true;
      },
      update(row) {

      },
      remove(row) {
        this.$message.info(String(row.id));
      },
      dialogConfirmHandle() {
        this.$message.info(JSON.stringify(this.form));
      },

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

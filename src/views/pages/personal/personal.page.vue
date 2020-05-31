<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>
            个人中心
          </h2>
        </div>
        <div class="card-body">
          <el-form label-width="80px">
            <el-form-item label="用户名">
              <el-input disabled v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <span>******</span>
              <el-button @click="dialogVisible = true" type="text">修改密码</el-button>
            </el-form-item>
            <el-form-item style="margin-bottom: 6px" label="头像">
              <img style="width: 40px;" src="../../../assets/images/avatar.jpeg" alt="">
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">立即保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form label-width="80px">
        <el-form-item label="旧密码">
          <el-input v-model="changePassword.old"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="changePassword.new"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '龙锦文',

          desc: ''
        },
        dialogVisible: false,
        changePassword: {
          old: '',
          new: ''
        }
      };
    },
    methods: {
      handleClose() {
        this.dialogVisible = false;
      }
    }
  };
</script>


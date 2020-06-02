<template>
  <div class="login-page">
    <div class="box">
      <div class="dec">
        <div class="title">
          <span>Welcome</span>
          <span>后台管理系统</span>
        </div>
        <div class="support">
          <a href="javascript:;" style="color: #ccc">技术支持</a>
        </div>

      </div>
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <div class="code">
            <el-form-item style="width: 62%" prop="code" label="验证码">
              <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
            <div class="code-con" style="
            width: 36%;
            background-color: #2a3f54;
            height: 34px;">
            </div>
          </div>
          <el-form-item style="margin-bottom: 10px">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('ruleForm')" style="width: 100%" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {sleep} from '../../../utils/utils';

  export default {
    data() {
      return {
        ruleForm: {
          username: 'admin',
          password: '123456',
          code: '8800',

        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ],

        },
        checked: true
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            this.$router.push('/');

          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style lang="scss">

  .login-page {
    width: 100%;
    height: 100%;
    background-color: #2a3f54;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 800px;
      height: 400px;
      background-color: rgba(255, 255, 255, .1);
      border-radius: 4px;
      display: flex;
      overflow: hidden;

      > div {
        height: 100%;
        width: 50%;
      }

      .form {
        background-color: #fff;
        padding: 30px 34px;
      }
    }

    .el-form-item__label {
      line-height: 20px;
      position: relative;
      left: -11px;
    }

    .el-input__inner {
      border-radius: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      padding: 0;
      height: 28px;
    }

    .el-form-item__content {
    }

    .el-form-item__error {
      padding-top: 0;
    }

    .code {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;


      .code-con {
        position: relative;
        bottom: 28px;
      }
    }

    .dec {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 30px;

      .title {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span:nth-child(1) {
          font-size: 60px;
          color: #fff;
          font-weight: bold;
        }

        span:nth-child(2) {
          color: #fff;
          font-size: 30px;

        }
      }
    }
  }


</style>

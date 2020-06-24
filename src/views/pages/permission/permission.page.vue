<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>指令方式</h2>
        </div>
        <div class="card-body">
          <el-button size="small" type="warning" v-permission="'update'" @click="update">修改</el-button>
          <!--支持数组-->
          <el-button size="small" type="danger" v-permission="['remove']" @click="remove">删除</el-button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>表达式方式</h2>
        </div>
        <div class="card-body">
          <el-button size="small" type="warning" v-if="hasPermission('update')" @click="update">修改</el-button>
          <!--支持数组-->
          <el-button size="small" type="danger" v-if="hasPermission(['remove'])" @click="remove">删除</el-button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>权限列表</h2>
        </div>
        <div class="card-body">
          {{__permissions}}
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>操作</h2>
        </div>
        <div class="card-body">
          <el-button size="small" @click="addUpdate">添加修改权限</el-button>
          <el-button size="small" @click="addRemove">添加删除权限</el-button>
          <el-button size="small" @click="removeUpdate">移除修改权限</el-button>
          <el-button size="small" @click="removeRemove">移除删除权限</el-button>
          <el-button size="small" @click="addOther">添加其他</el-button>
          <el-button size="small" @click="clearAll">清空所有权限</el-button>
        </div>
      </div>

    </el-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {};
    },
    created() {
      this.__pushPermissions('update');
    },
    computed: {},
    methods: {
      update() {
        this.$message.info('update');
      },
      remove() {
        this.$message.info('remove');
      },
      // 添加修改权限
      addUpdate() {
        this.__pushPermissions('update');
      },
      // 添加删除权限
      addRemove() {
        // 支持数组
        this.__pushPermissions(['remove']);
      },
      // 添加其他测试
      addOther() {
        this.__pushPermissions(['aaa ', 'bbb ,  ccc  ', '', '  ']);
        // this.__setPermissions(['aaa', 'bbb  ,  ccc     ', '', '  ']);
      },
      // 移除修改权限
      removeUpdate() {
        this.__removePermissions('update');
      },
      // 移除删除权限
      removeRemove() {
        // 支持数组
        this.__removePermissions(['remove']);
      },
      // 清空所有权限
      clearAll() {
        this.__clearPermission();
      }
    }
  };
</script>

<style scoped>

</style>

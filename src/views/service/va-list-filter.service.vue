<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>{{data}}</span>

      <span slot="footer" class="dialog-footer">
           <el-button type="primary" @click="set">AA</el-button>
           <el-button type="primary" @click="get">确 定</el-button>
         </span>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        data: []
      };
    },
    mounted() {

    },
    computed: {},

    methods: {
      set() {
        this.data.push({
          asd: 'asd'
        });
      }
    },

  };
</script>

<style scoped>

</style>

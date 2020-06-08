<template>
  <el-table
    ref="table"
    @sort-change="sortChange"
    :data="data"
    v-bind="$attrs"
    v-on="$listeners">
    <slot/>
  </el-table>
</template>

<script>
  // import {Table} from 'element-ui';

  export default {
    props: {
      vaTableFilterCancel: {
        type: Function,
        default() {
          return Promise.resolve();
        }
      },
      vaTableFilterConfirm: {
        type: Function,
        default() {
          return Promise.resolve();
        }
      },
      // 需要重写一遍，才能访问 this.data
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        vaListFilterInstance: null
      };
    },
    // mixins: [Table],
    methods: {
      /**
       * @description 初始化展示表格查询组件
       * */
      vaTableFilter(options = {}) {

        if (this.vaListFilterInstance === null) {
          this.vaListFilterInstance = this.$vaTableFilter(
            Object.assign({
              tableVm: this.$refs['table'],
              visible: false
            }, options)
          );
          this.vaListFilterInstance.on('cancel', (...args) => {
            return this.vaTableFilterCancel(...args);
          });
          this.vaListFilterInstance.on('confirm', (...args) => {
            return this.vaTableFilterConfirm(...args);
          });
        }
        return this.vaListFilterInstance.show();
      },
      sortChange() {
        console.log('表格数据');
        console.log(this.data);
        console.log('1');
      }
    },
    mounted() {
    },
    destroyed() {
      try {
        this.vaListFilterInstance.destroy();
      } catch (e) {
      }
    }
  };
</script>

<style scoped>

</style>

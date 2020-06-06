<script>
  import {Table} from 'element-ui';

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
      }
    },
    data() {
      return {
        vaListFilterInstance: null
      };
    },
    mixins: [Table],
    methods: {
      /**
       * @default 展示表格查询组件
       * */
      vaTableFilter() {

        if (this.vaListFilterInstance === null) {
          // 单例
          this.vaListFilterInstance = this.$vaTableFilter({
            tableVm: this,
            visible: false
          });
          this.vaListFilterInstance.on('cancel', (...args) => {
            return this.vaTableFilterCancel(...args);
          });
          this.vaListFilterInstance.on('confirm', (...args) => {
            return this.vaTableFilterConfirm(...args);
          });
        }
        return this.vaListFilterInstance.show();
      }
    },
    destroyed() {
      // 销毁组件
      this.vaListFilterInstance.destroy();
    }
  };
</script>

<style scoped>

</style>

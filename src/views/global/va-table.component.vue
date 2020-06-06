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
       * @description 初始化展示表格查询组件
       * */
      vaTableFilter() {

        if (this.vaListFilterInstance === null) {
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
      try {
        this.vaListFilterInstance.destroy();
      }catch (e) {
      }
    }
  };
</script>

<style scoped>

</style>

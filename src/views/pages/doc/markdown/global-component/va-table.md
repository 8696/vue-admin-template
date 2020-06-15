# va-table

该组件继承了 `el-table`，用法跟 `el-table` 一致。额外集成了[vaTableFilter-组合查询](#/doc/va-table-filter-service)组件。[查看实例](#store)

### 使用

- ##### 打开组合查询组件

```javascript
this.$refs.table.vaTableFilter();
```
- vaTableFilter
    + param
        + options：Object 和`vaTableFilter 查询组件`参数一致

    + return
        + void

---

- ##### 接收两个 props
    + va-table-filter-cancel：Function
        + callParam：
            + void

    + va-table-filter-confirm：Function
        + callParam：
            + filterData：Object

示例

```html
<va-table
  :va-table-filter-cancel="vaTableFilterCancel"
  :va-table-filter-confirm="vaTableFilterConfirm"
  ref="table"
  :data="tableData"
  >
</va-table>
export default {
    methods: {
      // 打开查询组件
      openFilter() {
        this.$refs.table.vaTableFilter();
      },
      // 组件关闭回调
      vaTableFilterCancel() {
        this.$message.info('取消查询');
        return Promise.resolve();
      },
      // 组件确认回调
      vaTableFilterConfirm(data) {
        this.$message.success(JSON.stringify(data));
        return Promise.resolve();
      }
    }
};
```

### 其他

- `va-table` 组件在销毁时会自动销毁 `vaTableFilter 组件`，无需关心该组件的生命周期的情况
- 无需保存 `vaTableFilter 组件` 的实例，也没有提供方法保存。在 `this.$refs.table.vaTableFilter()` 中会自动维护该组件的单例

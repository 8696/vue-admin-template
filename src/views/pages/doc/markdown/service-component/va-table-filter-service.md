# 表格组合查询

在`Vue.prototype`中注册了一个专为表格`el-table`扩展的弹出框组件

### 使用

- 组件中

```javascript
let instance = this.$vaTableFilter({
   fields: [
      {
        name: '姓名',
        field: 'username'
      },
      {
        name: '地址',
        field: 'address'
      },
   ],
   visible: true
});
```

- $vaTableFilter(options: Object)
    + param
        + options：Object
          + fields: Array 可选 | 筛选字段、和 tableVm 二选一 fields 存在时优先级为 fields
          + tableVm: Object 可选 | el-table 组件实例
          + visible: Boolean 可选 | 默认:true | 初始化是否显示组件
    + return
        + instance: Object 组件 vm 实例。为实现下次重新打开组件实现之前输入的数据还存在，需要保存该实例。该组件向外提供了三个方法`show`、`on`、`destroy`

---

- #### `show` 显示组件
    + param
        - void
    + return
        - undefined

```javascript
instance.show();
```
---

- #### `on` 监听关闭、确认
    + param
        - type: String 监听类型 `cancel` or `confirm`
        - handleFunction: Function 监听函数
    + return
        - undefined

```javascript
instance.on('cancel', () => {
  return Promise.resolve();
});
instance.on('confirm', (data) => {
  console.log(data); // [{join: "and", field: "date", op: "=", value: "value"}]
  return Promise.reject();
});
```

- cancel 监听函数不接收参数

- confirm 监听函数接收一个参数、为筛选输入的数据
    + data  // [{join: "and", field: "date", op: "=", value: "value"}]



on 监听函数中。返回 `false` 或者 `reject状态` 的 `promise实例` 状态的数据可以阻止关闭。可以返回 `undefined` `true`或者`resolve状态` 的 `promise实例` 关闭

---

- #### `destroy` 销毁组件
    + param
        - 无
    + return
        - null

```javascript
instance.destroy();
```
当销毁完组件相应的`dom`会在页面中移除


### 参数 tableVm

在构建一个实例如果使用 `tableVm` 时必须是 `el-table` 组件实例，可使用 `vue ref` 获取。它会自动获取表格这个组件的表头字段，实现代码：
```javascript
if (tableVm instanceof Vue && Array.isArray(tableVm.columns)) {
  let fieldsList = tableVm.columns.map((item) => {
    if (item.hasOwnProperty('property')
      && item.hasOwnProperty('label')) {
      return {
        name: item.label,
        field: item.property,
      };
    }
    return null;
  }).filter(item => item);
  console.log(fieldsList);
  /**
      [
        {
          name: '姓名',
          field: 'username'
        },
        {
          name: '地址',
          field: 'address'
        },
      ]
  */
}
```

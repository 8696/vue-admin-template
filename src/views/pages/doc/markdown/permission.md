# 权限配置

权限的具体格式可参考[菜单配置](#/store-data-menu-list)和[菜单管理](#/system-menu)

### 一、设置权限

#### 自动设置
```javascript
this.__setStoreConfig('menuList', menuList);
```
根据菜单的格式，在使用 `__setStoreConfig` 时菜单项会自动将 `type = 2` 的筛选出来设置为 `权限` 列表。[示例中](#/permission) `system-user-list`、`system-add-user` 两项就是在设置菜单数据时自动设置的。

#### 手动设置

在实例全局中混入了四个方法用于设置权限列表 `__setPermissions`、`__pushPermissions`、`__removePermissions` 和 `__clearPermission`

- #### `__setPermissions` 设置权限列表，会覆盖已经存在的列表
    + param
        - permissionsList: Array\<String\>
    + return
        - void

```javascript
this.__setPermissions(['p1','p2'])
```

---

- #### `__pushPermissions` 追加一个或者多个权限
    + param
        - permission: Array\<String\> | String
    + return
        - void

```javascript
this.__pushPermissions(['p1','p2'])
this.__pushPermissions('p3')
```

---

- #### `__removePermissions` 移除一项或者多项权限
    + param
        - permission: Array\<String\> | String
    + return
        - void

```javascript
this.__removePermissions(['p1','p2'])
this.__removePermissions('p3')
```

---

- #### `__clearPermission` 清除权限
    + param
    + return
        - void

```javascript
this.__clearPermission()
```

### 二、获取权限

可在实例中通过 `__permissions` 获取

```html
<template>
  <div>
    {{__permissions}}
  </div>
</template>
```

```javascript
methods:{
  getPermission(){
    return this.__permissions
  }
}
```

### 三、权限使用

[示例](#/permission)

#### 指令方式

全局封装了一个 `指令` `v-permission` 来进行权限的控制

- #### v-permission
    + param
        - permission: Array\<String\> | String
    + return


```html
<el-button v-permission="'update'" >修改</el-button>
<el-button type="danger" v-permission="['remove']">删除</el-button>
```


#### 表达式方式

全局混入了一个方法 `hasPermission` 来通过指定权限项来判断是否存在权限，`v-permission` 也是基于这个方法


- #### hasPermission
    + param
        - permission: Array\<String\> | String
    + return
        - has: Boolean

```html
<el-button v-if="hasPermission('update')">修改</el-button>
<el-button v-if="hasPermission(['remove'])">删除</el-button>
```

```javascript
methods:{
  hasPermission(){
 // return this.hasPermission('update')
    return this.hasPermission(['remove'])
  }
}
```

### 四、指令相关

具体可查看 `/src/directive/permission.directive.js` 备注信息
